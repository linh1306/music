play_wave_form();

function play_wave_form() {
    elements_l.splice(0, elements_l.length);
    elements_r.splice(0, elements_r.length);
    const ctn_left = document.querySelector('.container_left');
    const ctn_right = document.querySelector('.container_right');
    for (let i = 0; i < bufferLength; i++) {
        const element_l = document.createElement('div');
        element_l.classList.add('element');
        const element_r = document.createElement('div');
        element_r.classList.add('element');
        elements_l.push(element_l);
        elements_r.push(element_r);
        ctn_left.appendChild(element_l);
        ctn_right.appendChild(element_r);
    }
}


var intervalId = setInterval(() => {
    const btn = document.querySelector('.btn_waveform');
    analyser.getByteFrequencyData(dataArray);
    var value = dataArray[15];
    var tl;
    var vl;
    if (dataArray[9] > 100) {
        tl = [0, 0, 0, 0.2, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0.2, 0, 0, 0, 0.1, 0.3, 0.5, 0.7, 0.5, 0.3, 0.1, 0, 0, 0, 0.1, 0.2, 0.3, 0.2, 0.1, 0, 0];
        vl = [0, 0, 0, 15, 16, 15, 14, 15, 14, 15, 16, 15, 0, 0, 0, 5, 4, 6, 5, 6, 4, 5, 0, 0, 0, 17, 18, 19, 18, 17, 0, 0];
    }
    else {
        tl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.4, 0.6, 0.8, 0.6, 0.4, 0.2, 0, 0, 0, 0, 0.1, 0.3, 0.5, 0.7, 0.5, 0.3, 0.1, 0, 0, 0, 0, 0];
        vl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 14, 15, 14, 16, 15, 0, 0, 0, 0, 5, 6, 6, 5, 6, 6, 5, 0, 0, 0, 0, 0];
    }
    for (let i = 0; i < bufferLength; i++) {
        var item;
        if (value > 0) {
            item = Math.round(Math.random() * (11 - 5) + 5, 0);
            if (item == 10) item = 15;
            item = dataArray[vl[i]] * tl[i] + item
            item = item / 255 * 100;
        } else {
            item = 0;
        }
        var vl_btn = dataArray[15] / 250 * 30;
        elements_l[bufferLength - i - 1].style.height = item * 2 + 'px';
        elements_r[i].style.height = item * 2 + 'px';
    }
    document.getElementById('name').style.fontSize = 20 + vl_btn / 1.5 + 'px';
    btn.style.width = vl_btn + 150 + 'px';
    btn.style.height = vl_btn + 150 + 'px';
    btn.style.fontSize = vl_btn + 150 + 'px';
}, 0);


function delete_waveform() {
    var name_music = document.getElementById("name").innerHTML;
    var main = document.getElementById("container");
    var item1 = document.getElementById('name');
    var item2 = document.getElementById("dlt_wave");
    var item3 = document.getElementById("id_app");
    main.removeChild(item1);
    main.removeChild(item2);
    main.removeChild(item3);
    main.innerHTML = `
        <div id="menu">
            <div id="toggle" class="mn__ls-item" onclick="show_menu()">
                <i class="far fa-bars"></i>
            </div>
            <nav>
                <ul id="menu__list">
                    <li class="mn__ls-item" onclick="add_list_name('all_musics')"><i class="fas fa-globe-americas"></i></i></i></li>
                    <li class="mn__ls-item" onclick="add_list_name('favorites_musics')"><i class="fas fa-heart"></i></li>
                    <li class="mn__ls-item" onclick="add_list_name('mrSiro_musics')"><i class="fas fa-cloud-rain"></i></i></li>
                    <li class="mn__ls-item" onclick="add_list_name('vn_musics')"><i class="fab fa-vimeo-v"></i></li>
                    <li class="mn__ls-item" onclick="add_list_name('cn_musics')"><i class="fas fa-copyright"></i></li>
                    <li class="mn__ls-item" onclick="add_list_name('us_musics')"><i class="fas fa-union"></i></li>
                    <li class="mn__ls-item" onclick="waveform()"><i class="fas fa-waveform-path"></i></li>
                </ul>
            </nav>
        </div>

        <div id="main_list" class="list" >
            <div class="list__hder">
                <p>List</p>
            </div>

            <div id="container_list">
                <div class="scrollbar" id="style-2">
                    <!-- add item music -->
                    <div class="force-overflow"></div>
                </div>
            </div>

            <div class="console">
                <p id="name">${name_music}</p>
                <div id="time">0:00 / 0:00</div>
                <ul class="csl__button">
                    <li class="button">
                        <i class="fal fa-caret-left" onclick="back()"></i>
                    </li>
                    <li class="button" onclick="playPause()">
                        <i id="Pause_Play" class="fal fa-pause-circle"></i>
                    </li>
                    <li class="button" onclick="next()">
                        <i class="fal fa-caret-right"></i>
                    </li>
                </ul>
            </div>
        </div>
    `
    add_musics();
    remove_js(intervalId);
}