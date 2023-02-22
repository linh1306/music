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
    'sầu tương tư',
    'đừng yêu nữa em mệt rồi',
    'quả phụ tướng',
    'nếu em không về',
    'sao cũng được'
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
    'gió nổi lên rồi',
    'một đường hoa nở',
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
    'soul out'
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
    'vô hình trong tim em',
    'một bước yêu vạn dặm đau'
]

var audioWf;
var ctx;
var analyser;
var source;
var bufferLength;
let dataArray;

vn_musics = vn_musics.concat(mrSiro_musics);
favorites_musics = favorites_musics.concat(mrSiro_musics);

var all = vn_musics.concat(tq_musics, us_musics);
all.sort();
var i = 0;
all.forEach(element => {
    var name_id = "ms" + i.toString();
    musics[name_id] = element;
    i += 1
});