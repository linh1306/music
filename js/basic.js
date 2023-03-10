
var title = 'cố giang tình';
var album = 'all';
let elements_l = [];
let elements_r = [];

if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('nexttrack', back);
    navigator.mediaSession.setActionHandler('previoustrack', next);
} else {
    console.log('This browser does not support mediaSession');
}


function getAudio() {
    var main = document.getElementById('container');
    var item = document.getElementById('begin');
    main.removeChild(item);
    audioWf = document.querySelector('audio');
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new window.AudioContext();
    analyser = ctx.createAnalyser();
    source = ctx.createMediaElementSource(audioWf);
    source.connect(analyser);
    source.connect(ctx.destination);
    analyser.fftSize = 64;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
}






add_musics();

function add_musics() {
    const main = document.getElementById("style-2");

    for (const key in musics) {
        var class_hearth = "far fa-heart bt_list_item";
        if (favorites_musics.includes(musics[key])) class_hearth = "fas fa-heart color_heart";
        if (main) {
            const item_list = document.createElement("div");
            item_list.classList.add('list__item');
            item_list.id = key;
            item_list.innerHTML = `
                    <div class="list__item-name" onclick="nextTo('${musics[key]}','${key}')">
                        <i class="fal fa-list-music"></i>
                        <p>${musics[key]}</p>
                    </div>
    
                    <i id="${key}-heart" class="${class_hearth}" onclick="add_remove_heart('${key}-heart')"></i>
                    <i class="fas fa-times bt_list_item" onclick="remove_item('${key}', '${musics[key]}')"></i> 
            `;
            main.appendChild(item_list);
        }
    }
}


function remote_list() {
    var main = document.getElementById("container_list");
    var item = document.getElementById("style-2");
    main.removeChild(item);
    const item_list = document.createElement("div");
    item_list.classList.add("scrollbar");
    item_list.id = "style-2";
    item_list.innerHTML = `
        <div class="force-overflow"></div>
    `;
    main.appendChild(item_list);
}


function add_list_name(name_list) {
    remote_list();
    musics = {};
    tmp = [];
    if (name_list == 'vn_musics') {
        tmp = vn_musics;
        album = 'việt nam';
    } else if (name_list == 'cn_musics') {
        tmp = tq_musics;
        album = 'trung quốc';
    } else if (name_list == 'us_musics') {
        tmp = us_musics;
        album = 'tiếng anh';
    } else if (name_list == 'favorites_musics') {
        tmp = favorites_musics;
        album = 'yêu thích';
    } else if (name_list == 'mrSiro_musics') {
        tmp = mrSiro_musics;
        album = 'mr siro';
    } else {
        tmp = all;
        album = 'all';
    }
    var i = 0;
    tmp.forEach(element => {
        var name_id = "ms" + i.toString();
        musics[name_id] = element;
        i += 1
    });
    add_musics();
}



function updateTimeDisplay() {
    var audio = document.getElementById("myAudio");
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    if (document.getElementById("time")) {
        document.getElementById("time").innerHTML = formatTime(currentTime) + " / " + formatTime(duration);
    }
    if (formatTime(currentTime) == formatTime(duration)) {
        next();
    }
}

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}

function show_menu() {
    var nav = document.querySelector('nav').style.display;
    if (nav == 'block') {
        document.querySelector('nav').style.display = 'none';
    } else {
        document.querySelector('nav').style.display = 'block';
    }
}

function playPause() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
        document.getElementById("Pause_Play").className = "fal fa-pause-circle";
    } else {
        audio.pause();
        document.getElementById("Pause_Play").className = "fal fa-play-circle";
    }
}

function update_navigator() {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: title,
            artist: '',
            album: album,
            artwork: [{ src: '../img/bgr.jpg', sizes: '96x96', type: 'image/jpg' }]
        });
    } else {
        console.log('This browser does not support mediaSession');
    }
}

function next() {
    var audio = document.getElementById("myAudio");
    var name_music = document.getElementById("name").innerHTML;
    var list_music = Object.values(musics);
    var position = list_music.indexOf(name_music);

    if (position == list_music.length - 1) position = 0;
    else position += 1;

    var link = "music/" + list_music[position] + ".mp3";
    audio.src = link;
    document.getElementById("name").innerHTML = list_music[position];
    audio.play();

    title = list_music[position];
    update_navigator();
}

function back() {
    var audio = document.getElementById("myAudio");
    var name_music = document.getElementById("name").innerHTML;
    var list_music = Object.values(musics);
    var position = list_music.indexOf(name_music);

    if (position == 0) position = list_music.length - 1;
    else position -= 1;

    var link = "music/" + list_music[position] + ".mp3";
    audio.src = link;
    document.getElementById("name").innerHTML = list_music[position];
    audio.play();

    title = list_music[position];
    update_navigator();
}

function nextTo(link) {
    title = link;
    document.getElementById("name").innerHTML = link;
    var audio = document.getElementById("myAudio");
    link = "music/" + link + ".mp3";
    audio.src = link;
    audio.play();

    update_navigator();
}

function add_remove_heart(name_id) {
    var name_id_father = "";
    for (var i = 0; i < name_id.length; i++) {
        if (name_id[i] == '-') break;
        name_id_father += name_id[i];
    }
    var position;
    var list_music = Object.values(musics);
    var tmp = list_music.find(function (item, index) {
        position = index;
        return item.id === name_id_father;
    });


    var name_class = document.getElementById(name_id).className;
    if (name_class == "far fa-heart bt_list_item") {
        document.getElementById(name_id).className = "fas fa-heart color_heart";
        favorites_musics.push(list_music[position].name);
    }
    else {
        document.getElementById(name_id).className = "far fa-heart bt_list_item";
        favorites_musics = favorites_musics.filter(function (element) {
            return element !== list_music[position].name;
        });
    }
}

function remove_item(id, name_music) {
    var main = document.getElementById("style-2");
    var item = document.getElementById(id);
    main.removeChild(item);
    var position;
    var list_music = Object.values(musics);
    var tmp = list_music.find(function (item, index) {
        position = index;
        return item.name === name_music;
    });
    list_music.splice(position, 1);
}

function waveform() {
    var name_music = document.getElementById("name").innerHTML;
    var main = document.getElementById("container");
    var item1 = document.getElementById('menu');
    var item2 = document.getElementById("main_list");
    main.removeChild(item1);
    main.removeChild(item2);
    main.innerHTML = `
        <p id="name" class="name_waveform">${name_music}</p>
        <div id="dlt_wave" class="mn__ls-item defause_waveform" onclick="delete_waveform()"><i class="fas fa-list-ul"></i></i></div>
        <div id="id_app" class="app">
            <div class="container_left"></div>
            <div class="console_waveform">
                <button class="btn_waveform" onclick = "playPause()">
                    <i id="Pause_Play" class="fal fa-pause-circle"></i>
                </button>
            </div>
            <div class="container_right"></div>
        </div>
    `;
    var script = document.createElement('script');
    script.src = 'js/waveform.js';
    document.head.appendChild(script);
}

function remove_js(id) {
    clearInterval(id);
    var script = document.querySelector('script[src="js/waveform.js"]');
    script.parentNode.removeChild(script);
}

