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

var music_running = 0;

musics = vn_musics.concat(tq_musics,us_musics);

function updateTimeDisplay() {
    var audio = document.getElementById("myAudio");
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    document.getElementById("time").innerHTML = formatTime(currentTime) + " / " + formatTime(duration);
    if(formatTime(currentTime) == formatTime(duration)){
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
    if(music_running == musics.length -1){
        music_running = 0;
    }
    else{
        music_running = music_running + 1;
    }
    var link = "music/" + musics[music_running] + ".mp3";
    audio.src = link;
    document.getElementById("name").innerHTML = musics[music_running];
    audio.play();
}