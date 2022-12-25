var musics = [];

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
    'cứu vãn kịp không'
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

var favorites_music = [];

var music_running = 0;

musics = vn_musics.concat(tq_musics, us_musics);


var i = 0;
musics.forEach(item => {
    const main = document.getElementById("style-2");
    if (main) {
        var name_id = "ms" + i.toString();
        const item_list = document.createElement("div");
        item_list.classList.add('list__item');
        item_list.id = name_id;
        item_list.innerHTML = `
                <div class="list__item-name" onclick="nextTo('${item}')">
                    <i class="fal fa-list-music"></i>
                    <p>${item}</p>
                </div>

                <i id="${name_id}-heart" class="far fa-heart bt_list_item" onclick="add_remove_heart('${name_id}-heart')"></i>
                <i class="fas fa-times bt_list_item" onclick="remove_item('${name_id}', '${item}')"></i> 
        `;
        main.appendChild(item_list);
        i+=1;
    }
});


function updateTimeDisplay() {
    var audio = document.getElementById("myAudio");
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    document.getElementById("time").innerHTML = formatTime(currentTime) + " / " + formatTime(duration);
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

function playPause() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
        document.getElementById("Pause/Play").className = "fal fa-play-circle";
    } else {
        audio.pause();
        document.getElementById("Pause/Play").className = "fal fa-pause-circle";
    }
}

function next() {
    var audio = document.getElementById("myAudio");
    if (music_running == musics.length - 1) {
        music_running = 0;
    }
    else {
        music_running = music_running + 1;
    }
    var link = "music/" + musics[music_running] + ".mp3";
    audio.src = link;
    document.getElementById("name").innerHTML = musics[music_running];
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
    var name_class = document.getElementById(name_id).className;
    if (name_class == "far fa-heart bt_list_item") {
        document.getElementById(name_id).className = "fas fa-heart color_heart";
    }
    else {
        document.getElementById(name_id).className = "far fa-heart bt_list_item";
    }
}

function remove_item(id, name) {
    var main = document.getElementById("style-2");
    var item = document.getElementById(id);
    main.removeChild(item);
    var index = musics.indexOf(name);
    if (index >= 0) {
        musics.splice(index, 1);
    }
}