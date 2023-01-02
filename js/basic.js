var musics = {};

var vn_musics = [
    'cố giang tình',
    'cách ngạn',
    'mười năm nhân gian',
    'ai khóc cho em',
    'người em cố đô',
    'thuyền quyên',
    'lỡ yêu người đậm sâu',
    'đào nương',
    'như bến đợi đò',
    'thương thầm',
    'đâu còn đây',
    'nếu có kiếp sau',
    'thế thái',
    'em muốn ta là gì',
    'thay tôi yêu cô ấy',
    'hẹn em kiếp sau',
    'đoạn tuyệt nàng đi',
    'tháng tư là lời nói dối của em',
    'sợ rằng em biết anh còn yêu em',
    'buồn lắm em ơi',
    'em đâu hay',
    'nói có khó nhưng vui',
    'anh không có yêu cô gái đó',
    'phụ tình',
    'em giấu anh điều gì',
    'em ổn không',
    'có khi nào rời xa',
    'ai đợi được mình mãi',
    'chỉ anh hiểu em',
    'đừng nói yêu em',
    'kiếp duyên không thành',
    'cứu vãn kịp không',
    'lạc trôi',
    'ai mang cô đơn đi',
    'hồng nhan',
    'bạc phận',
];

var tq_musics = [
    'thanh ti',
    'vây giữ',
    'ảo ảnh',
    'seve x outside',
    'tiếu nạp',
    'thiếu niên',
    'trích tiên',
    'hồi tâm chuyển ý',
    'sao trời biển rộng',
    'khúc cửu môn hồi ức',
    'xích linh',
    'làm việc gì trải qua những gì',
    'tát nhật lãng rực rỡ',
    'đáp án của bạn',
    'quẻ bói',
    'tình yêu không thể nắm giữ',
    'tâm lặng như nước',
    'đại điền hậu sinh tử',
    'gió nổi lên rồi'
];

var us_musics = [
    'lily',
    'la la la',
    'dancing with your ghost',
    'east of eden',
    'the ocean',
    'the river',
    'move your body',
    'duncan laurence',
    'arcade',
    'Im not angrymore',
    'some body that i used to know',
    'love me like you do',
    'salting',
    'play date',
    'the night',
    'waiting for love',
    'wake me up',
    'hey brother',

];

var favorites_musics = [
    'ai khóc cho em',
    'ai đợi được mình mãi',
    'anh không có yêu cô gái đó',
    'arcade',
    'buồn lắm em ơi',
    'cứu vãn kịp không',
    'dancing with your ghost',
    'east of eden',
    'em giấu anh điều gì',
    'em muốn ta là gì',
    'em đâu hay',
    'gió nổi lên rồi',
    'hẹn em kiếp sau',
    'hồi tâm chuyển ý',
    'khúc cửu môn hồi ức',
    'lily',
    'nếu có kiếp sau',
    'phụ tình',
    'quẻ bói',
    'sợ rằng em biết anh còn yêu em',
    'thanh ti',
    'the night',
    'the ocean',
    'the river',
    'thiếu niên',
    'thuyền quyên',
    'thương thầm',
    'waiting for love',
    'wake me up',
    'đào nương',
    'ảo ảnh',
    'lạc trôi'
];

var mrSiro_musics = [
    'tìm được nhau khó thế nào',
    'bức tranh từ nước mắt',
    'chạm đáy nỗi đau',
    'đã từng vô giá',
    'day dứt nỗi đau',
    'dưới những cơn mưa',
    'gương mặt lạ lẫm',
    'lặng lẽ tổn thương',
    'lắng nghe nước mắt',
    'sống trong nỗi nhớ',
    'tình yêu chắp vá',
    'vô hình trong tim em'
]

vn_musics = vn_musics.concat(mrSiro_musics);
favorites_musics = favorites_musics.concat(mrSiro_musics);
const audioWf = document.querySelector('audio');
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new window.AudioContext();
const analyser = ctx.createAnalyser();
const source = ctx.createMediaElementSource(audioWf);
source.connect(analyser);
source.connect(ctx.destination);
analyser.fftSize = 64;
const bufferLength = analyser.frequencyBinCount;

let dataArray = new Uint8Array(bufferLength);


let elements_l = [];
let elements_r = [];



var all = vn_musics.concat(tq_musics, us_musics);
all.sort();
var i = 0;
all.forEach(element => {
    var name_id = "ms" + i.toString();
    musics[name_id] = element;
    i += 1
});

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
    } else if (name_list == 'cn_musics') {
        tmp = tq_musics;
    } else if (name_list == 'us_musics') {
        tmp = us_musics;
    } else if (name_list == 'favorites_musics') {
        tmp = favorites_musics;
    } else if(name_list  == 'mrSiro_musics'){
        tmp = mrSiro_musics;
    }else{
        tmp = all;
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

function show_menu(){
    var nav = document.querySelector('nav').style.display;
    if(nav == 'block' ){
        document.querySelector('nav').style.display = 'none';
    }else{
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
}

function nextTo(link) {
    document.getElementById("name").innerHTML = link;
    var audio = document.getElementById("myAudio");
    link = "music/" + link + ".mp3";
    audio.src = link;
    audio.play();
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

function remove_js(id){
    clearInterval(id);
    var script = document.querySelector('script[src="js/waveform.js"]');
    script.parentNode.removeChild(script);
}

