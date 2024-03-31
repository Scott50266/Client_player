var play_value = 0;
var list = 0;
var list_Check = [];
var play_go=document.getElementById("play_").src;
var all_delete_butt=true;
var random_brin;
function on_files() {
    console.log(document.getElementById("music_file").value);
    // document.getElementById("music_file").addEventListener("change", function (event) {
        //my_test 為觸發運作的按鈕
        var files = document.getElementById("music_file").files;
        console.log(files);
        // var files = event.target.files;
        var old_ui_files = 0;
        var old_target_folder = 0;
        var music = [[]];
        var music0 = [[]];
        var music_num = 0;
        var files_num = -1;
        console.log(files.length);
        // console.log("1");
        for (let i = 0; i < files.length; i++) {
            // console.log(files);
            let ng = files[i].webkitRelativePath;
            let concrete_files = ng.substring(0, ng.lastIndexOf("/") + 1)
            var target_folder = files[i].webkitRelativePath.lastIndexOf("/");
            let tmp = files[i].webkitRelativePath.substr(0, target_folder);
            let tpm0 = files[i].webkitRelativePath.substr(target_folder + 1);
            var ui_files_cut = tmp.lastIndexOf("/");
            var ui_files;
            // console.log("2");
            if (ui_files_cut >= 0) {
                ui_files = tmp.substr(ui_files_cut + 1);
                if ((target_folder != old_target_folder) && (ui_files == old_ui_files)) {
                    old_target_folder = target_folder;
                    ui_files = "*" + ui_files;
                }
                else {
                    ui_files = tmp.substr(ui_files_cut + 1);
                    old_target_folder = target_folder;
                }

            } else {
                ui_files = tmp;
                if ((target_folder != old_target_folder) && (ui_files == old_ui_files)) {
                    old_target_folder = target_folder;
                    ui_files = "*" + tmp;
                }
                else {
                    old_target_folder = target_folder;

                }

            }

            // console.log("3");
            if (tpm0.lastIndexOf(".mp3") >= 0 || tpm0.lastIndexOf(".wav") >= 0 || tpm0.lastIndexOf(".mp4") >= 0 || tpm0.lastIndexOf(".avi") >= 0) {
                // console.log("4");
                if (ui_files != old_ui_files) {
                    files_num++;
                    // console.log("5");
                    // console.log(files_num);
                    let div = document.createElement("div");
                    let div1 = document.createElement("div");
                    let div2 = document.createElement("div");
                    let div3 = document.createElement("div");
                    let p = document.createElement("p");
                    let img = document.createElement("img");
                    // let p = document.createElement("p");
                    old_ui_files = ui_files;
                    // console.log(div);
                    div3.setAttribute("id",files_num+"frame")//外框
                    div3.classList="files_frame"
                    document.getElementById("music_list").appendChild(div3);
                    //
                    div.setAttribute("id", files_num + "files");//資料夾
                    div.classList = "music_file_open";
                    // console.log(div);
                    document.getElementById(files_num+"frame").appendChild(div);
                    // console.log(ui_files);
                    p.setAttribute("id", files_num + "files_txt");//資料夾名稱
                    p.classList="p_170x margin5x";
                    document.getElementById(files_num + "files").appendChild(p);
                    document.getElementById(files_num + "files_txt").innerText = ui_files;
                    //
                    div1.setAttribute("id", files_num + "files_all");//資料夾全放入
                    div1.classList = "music_file_all";
                    document.getElementById(files_num+"frame").appendChild(div1);
                    //
                    img.setAttribute("id",files_num+"files_img")//資料夾全放入圖片
                    img.setAttribute("src","img/upload.png")
                    img.classList = "all_add_ico"
                    document.getElementById(files_num + "files_all").appendChild(img);
                    //
                    div2.setAttribute("id", files_num + "files_txt_list");//文字清單
                    div2.classList = "files_list_txt";
                    // console.log(target_folder);
                    document.getElementById(files_num + "files").appendChild(div2);
                    //
                    
                    //
                    music_num = 0;
                    music.push([]);
                    music[files_num].push([]);
                    music0.push([]);
                    music[files_num][0] = ui_files;
                    music[files_num][1] = concrete_files;

                    //
                   
                    document.getElementById(files_num+"files_img").addEventListener("click",function(event){
                        let tmp =event.target.id;
                        let tmp0 =parseInt(tmp);
                        let tmp1 = music0[tmp0].length;
                        for(let u = 0; u < tmp1; u++){
                            let li = document.createElement("li");
                                li.setAttribute("id", "list" + list);
                                li.classList="p_150x";
                                list_Check[list] = music[tmp0][1]+music0[tmp0][u];
                                li.innerText = music0[tmp0][u];
                                list_Check.push();
                                document.getElementById("playlist").appendChild(li);

                                li.addEventListener("click", function (event) {
                                    let tmp = event.target.id;
                                    let list_value = tmp.substring(4);
                                    let z = document.getElementById("play_");
                                    let tmp2 = list_Check.length;
                                    let tmp3= parseInt(list_value)+1;
                                    // console.log(event.target.id);
                                    // console.log(list_value);
                                    // console.log(list_Check[list_value]);
                                    if(all_delete_butt){
                                        document.getElementById("list"+play_value).style.listStyleType = "disc";
                                        z.setAttribute("src", "../" + list_Check[list_value]);
                                        play_value = list_value;
                                        document.getElementById("list"+play_value).style.listStyleType = "circle";
                                        let at_play=document.getElementById("list"+play_value).innerText
                                        document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
                                        z.load();
                                        z.play();
                                    }
                                    else{
                                        let myList = document.getElementById("playlist");
                                        let last_item = myList.lastElementChild;    
                                        for(let i=0;i<(tmp2)-list_value;i++){
                                            let tmp4 =parseInt(list_value)+i;
                                            let tmp5 = tmp3+i;
                                            if(!(tmp5==tmp2) ){    
                                                console.log("true");
                                                document.getElementById("list"+tmp4).innerText =document.getElementById("list"+tmp5).innerText;
                                                list_Check[tmp4]=list_Check[tmp5];
                                            }
                                            else{
                                                console.log("false");
                                                break;
                                            }
                                            
                                        }
                                        myList.removeChild(last_item);
                                        list_Check.pop();
                                        list--;
                                    }

                                })
                                list++;
                        }
                        
                    })
                    //

                    // console.log(music);
                }
                // console.log(music0);
                // console.log(files_num);
                music0[files_num].push([]);
                music0[files_num][music_num] = tpm0;
                music_num++;
                let files_passwd = document.getElementById(files_num + "files");
                files_passwd.addEventListener("click", function (event) {
                    let tmp = event.target.id;
                    let tmp0 = parseInt(tmp);
                    let tmp1 = music0[tmp0].length;
                    // console.log(tmp0);
                    console.log(tmp1);

                    // console.log(music0);
                    // console.log(music.length+"music");
                    let tmp2 = tmp + "_list";
                    let tmp3 = document.getElementById(tmp2);
                    let click_Check = tmp3.querySelector("p") == null;
                    if (click_Check) {
                        for (let u = 0; u < tmp1; u++) {
                            // console.log(tmp0);
                            let p = document.createElement("p");
                            p.classList="p_150x  focus_div";
                            p.setAttribute("id", tmp2 + u);
                            p.innerText = music0[tmp0][u];
                            p.value = music[tmp0][1] + music0[tmp0][u];
                            // p.value = music[tmp0]+"/"+music0[tmp0][u];
                            // console.log(music[tmp0]);
                            tmp3.appendChild(p);
                            let x = document.getElementById(tmp2 + u);
                            x.addEventListener("click", function (event) {
                                let li = document.createElement("li");
                                li.setAttribute("id", "list" + list);
                                li.classList="p_150x";
                                list_Check[list] = event.target.value;
                                li.innerText = event.target.innerText;
                                list_Check.push();
                                document.getElementById("playlist").appendChild(li);

                                li.addEventListener("click", function (event) {
                                    let tmp = event.target.id;
                                    let list_value = tmp.substring(4);
                                    let z = document.getElementById("play_");
                                    let tmp2 = list_Check.length;
                                    let tmp3= parseInt(list_value)+1;
                                    // console.log(event.target.id);
                                    // console.log(list_value);
                                    // console.log(list_Check[list_value]);
                                    console.log(all_delete_butt);
                                    if(all_delete_butt){
                                        document.getElementById("list"+play_value).style.listStyleType = "disc";
                                        z.setAttribute("src", "../" + list_Check[list_value]);
                                        play_value = list_value;
                                        document.getElementById("list"+play_value).style.listStyleType = "circle";
                                        let at_play=document.getElementById("list"+play_value).innerText
                                        document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
                                        z.load();
                                        z.play();
                                    }
                                    else{
                                        let myList = document.getElementById("playlist");
                                        let last_item = myList.lastElementChild;    
                                        for(let i=0;i<(tmp2)-list_value;i++){
                                            let tmp4 =parseInt(list_value)+i;
                                            let tmp5 = tmp3+i;
                                            if(!(tmp5==tmp2) ){    
                                                console.log("true");
                                                document.getElementById("list"+tmp4).innerText =document.getElementById("list"+tmp5).innerText;
                                                list_Check[tmp4]=list_Check[tmp5];
                                            }
                                            else{
                                                console.log("false");
                                                break;
                                            }
                                            
                                        }
                                        myList.removeChild(last_item);
                                        list_Check.pop();
                                        list--;
                                    }
                                   


                                })
                                list++;

                            })

                        }


                    }
                    else {
                        while (tmp3.firstChild) {
                            tmp3.removeChild(tmp3.firstChild);
                        }
                    }
                    //

                    //
                })
            }
        }
        document.getElementById("clear_files_button").style.display = "block";
        document.getElementById("op_files_button").style.display = "none";
    // })
}


function clear_files() {
    let tmp0 = document.getElementById("music_list");
    let tmp1 = document.getElementById("music_file");
    tmp1.value = "";
    // console.log(tmp0);
    while (tmp0.firstChild) {
        tmp0.removeChild(tmp0.firstChild);
    }
    document.getElementById("clear_files_button").style.display = "none";
    document.getElementById("op_files_button").style.display = "block";
}


function change_next_song(){
    document.getElementById("list"+play_value).style.listStyleType = "disc";
    play_value++;
    let tmp = document.getElementById("play_");
    if (list_Check[play_value] != undefined){
        tmp.setAttribute("src", "../" + list_Check[play_value]);
        document.getElementById("list"+play_value).style.listStyleType = "circle";
        let at_play=document.getElementById("list"+play_value).innerText
        document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
        tmp.load();
        tmp.play();
    }
    else{
        play_value = 0;
        if (list_Check[play_value] != undefined) {
            tmp.setAttribute("src", "../" + list_Check[0]);
            document.getElementById("list"+play_value).style.listStyleType = "circle";
            let at_play=document.getElementById("list"+play_value).innerText
            document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
            tmp.load();
            tmp.play();
        }
    }
}

function change_Previous_song(){
    document.getElementById("list"+play_value).style.listStyleType = "disc";
    play_value--;
    console.log(play_value);
    let tmp=document.getElementById("play_");
    if (play_value >= 0){
        tmp.setAttribute("src", "../" + list_Check[play_value]);
        document.getElementById("list"+play_value).style.listStyleType = "circle";
        let at_play=document.getElementById("list"+play_value).innerText
        document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
        tmp.load();
        tmp.play();
    }
    else{
        play_value = list_Check.length-1;
        console.log(play_value);
        tmp.setAttribute("src", "../" + list_Check[play_value]);
        document.getElementById("list"+play_value).style.listStyleType = "circle";
        let at_play=document.getElementById("list"+play_value).innerText
        document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
        tmp.load();
        tmp.play();
        
    }
}



document.getElementById("play_").addEventListener("click", function (event) {
    if (play_value == 0) {  
        if(play_go==document.getElementById("play_").src){
            if (document.getElementById("playlist").querySelector("li") != null) {
                let x = document.getElementById("play_");
                event.target.setAttribute("src", "../" + list_Check[0]);
                document.getElementById("list"+play_value).style.listStyleType = "circle";
                let at_play=document.getElementById("list"+play_value).innerText
                document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
                x.play();
                
            }
        }
            
    }

})
document.getElementById("play_").addEventListener("ended", function (event) {
    // console.log(play_value+"ended");
    document.getElementById("list"+play_value).style.listStyleType = "disc";
    if(!random_brin){
        play_value++;
    }
    else
    {
        let tmp =list_Check.length;
        let tmp0=play_value;   
        for(let i ;play_value==tmp0;i++){
            tmp0=Math.floor(Math.random()*tmp);
        }
        play_value=tmp0;
    }
    let x = document.getElementById("play_");
    if (list_Check[play_value] != undefined) {
        event.target.setAttribute("src", "../" + list_Check[play_value]);
        document.getElementById("list"+play_value).style.listStyleType = "circle";
        let at_play=document.getElementById("list"+play_value).innerText
        document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
        x.load();
        x.play();
    }
    else {
        play_value = 0;
        if (list_Check[play_value] != undefined) {
            // console.log(play_value+"ended");
            event.target.setAttribute("src", "../" + list_Check[0]);
            document.getElementById("list"+play_value).style.listStyleType = "circle";
            let at_play=document.getElementById("list"+play_value).innerText
            document.getElementById("at_play").innerText="Playlist   ("+at_play+")";
            x.load();
            x.play();
        }
    }
})

document.getElementById("play_ui_delete").addEventListener("click", function () {
    let tmp = document.getElementById("play_ui_all_delete").style.visibility == "visible"
    // console.log(tmp);
    if (tmp) {
        document.getElementById("play_ui_all_delete").style.visibility = "hidden";
        all_delete_butt=true;
        
    }
    else {
        document.getElementById("play_ui_all_delete").style.visibility = "visible";
        all_delete_butt=false;
    }

})
document.getElementById("play_ui_all_delete").addEventListener("click", function () {
    let tmp = document.getElementById("playlist");
    while (tmp.firstChild) {
        tmp.removeChild(tmp.firstChild);
    }
    list = 0;//播放清單ID重置
    list_Check = [];
    document.getElementById("play_ui_all_delete").style.visibility = "hidden";
})

document.getElementById("play_ui_arrows").addEventListener("click", function () {
    document.getElementById("play_ui_shuffle").style.visibility = "visible";
    document.getElementById("play_ui_arrows").style.visibility = "hidden";
    random_brin=true;

})
document.getElementById("play_ui_shuffle").addEventListener("click", function () {
    document.getElementById("play_ui_arrows").style.visibility = "visible";
    document.getElementById("play_ui_shuffle").style.visibility = "hidden";
    random_brin=false;

})

document.getElementById("play_change1").addEventListener("mouseover",function(){
    document.getElementById("change_ico1").style.visibility = 'visible';
    document.getElementById("play_change1").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
})
document.getElementById("play_change2").addEventListener("mouseover",function(){
    document.getElementById("change_ico2").style.visibility = 'visible';
    document.getElementById("play_change2").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
})
document.getElementById("play_change1").addEventListener("mouseout",function(){
    document.getElementById("change_ico1").style.visibility = 'hidden';
    document.getElementById("play_change1").style.backgroundColor = "";
})

document.getElementById("play_change2").addEventListener("mouseout",function(){
    document.getElementById("change_ico2").style.visibility = 'hidden';
    document.getElementById("play_change2").style.backgroundColor = "";
})

