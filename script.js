function changeImg() {
  const param = new URLSearchParams(window.location.search);
  const content = param.get("content");
  const album = document.createElement("img");
  const lowerCaseArtist = content.toLowerCase().replace(/\s/g, "");
  album.src = `./assets/images/${lowerCaseArtist}.jpg`;
  document.getElementById("album-art").appendChild(album);

  let artist_name = document.getElementById("art-name");
  artist_name.innerText = `${content}`;
  playimg.src = "./assets/pause.svg";
  if (lowerCaseArtist === "arijitsingh") {
    const popularSongs = `<div class="song-list-3">           

    
              
          <div class="row">
              <div class="sno">
                  <p>1</p>
                  </div>
                  <div class="songs-list" id="row1"><img
                      src="./assets/songs-img/apnabanale.jpg" height="40px">
                                  <h3>Apna Bana Le</h3>
                              </div>
                              <div class="song-info">
                                  <p>272,727,219</p>
                              </div>
                              <div class="duration"><img src="./assets/heart.svg" height="15px">
                                  <p>4:21</p>
                              </div>
                              <audio id="apnaBanaLeAudio" data-song-name="Apna Bana Le - Arijit Singh "src="./assets/songs/arijit/Apna Bana Le.mp3"></audio>
                          </div>
                          <div class="row">
                                    <div class="sno">
                                        <p>2</p>
                                    </div>
                                    <div class="songs-list"><img src="./assets/songs-img/omahi.jpg"
                                            height="40px">
                                        <h3>O Maahi</h3>
                                    </div>
                                    <div class="song-info">
                                        <p>97,311,112</p>
                                    </div>
                                    <div class="duration"><img src="./assets/heart.svg" height="15px">
                                        <p>3:53</p>
                                    </div>
                                    <audio id="omahiAudio"
                                        src="./assets/songs/arijit/bO Mahi O Mahi.mp3"></audio>
                                </div>
                                <div class="row">
                                    <div class="sno">
                                        <p>3</p>
                                    </div>
                                    <div class="songs-list"><img src="./assets/songs-img/heeriye.jpg"
                                            height="40px">
                                        <h3>Heeriye</h3>
                                    </div>
                                    <div class="song-info">
                                        <p>272, 511, 011</p>
                                    </div>
                                    <div class="duration"><img src="./assets/heart.svg" height="15px">
                                        <p>3:14</p>
                                    </div>
                                    <audio id="heeriyeAudio" src="./assets/songs/arijit/Heeriye - Arijit Singh.mp3"></audio>
                                </div>
                                <div class="row">
                                    <div class="sno">
                                        <p>4</p>
                                    </div>
                                    <div class="songs-list"><img src="./assets/songs-img/kesariya.jpg"
                                            height="40px">
                                        <h3>Kesariya</h3>
                                    </div>
                                    <div class="song-info">
                                        <p>500,448,171</p>
                                    </div>
                                    <div class="duration"><img src="./assets/heart.svg" height="15px">
                                        <p>3:53</p>
                                    </div>
                                    <audio id="kesariyaAudio" src="./assets/songs/arijit/Kesariya Tera Ishq Hai Piya.mp3"></audio>
                                </div>
                                <div class="row">
                                    <div class="sno">
                                        <p>5</p>
                                    </div>
                                    <div class="songs-list"><img src="./assets/songs-img/pal.jpg"
                                            height="40px">
                                        <h3>Pal</h3>
                                    </div>
                                    <div class="song-info">
                                        <p>164,474,618</p>
                                    </div>
                                    <div class="duration"><img src="./assets/heart.svg" height="15px">
                                        <p>5:46</p>
                                    </div>
                                    <audio id="palAudio"
                                        src="./assets/songs/arijit/Pal.mp3"></audio>
                                </div>
                                <div class="row">
                                    <div class="sno">
                                        <p>6</p>
                                    </div>
                                    <div class="songs-list"><img src="./assets/songs-img/terehawale.jpg"
                                            height="40px">
                                        <h3>Tere Hawale</h3>
                                    </div>
                                    <div class="song-info">
                                        <p>164,474,618</p>
                                    </div>
                                    <div class="duration"><img src="./assets/heart.svg" height="15px">
                                        <p>5:46</p>
                                    </div>
                                    <audio id="terehawaleAudio"
                                        src="./assets/songs/arijit/Tere Hawale.mp3"></audio>
                                </div>
                          <!-- Add more rows here -->
                          `;

    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row

    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const audioElementId = this.getElementsByTagName("audio")[0].id;
        const audioElement = document.getElementById(audioElementId);
        const circleDiv = document.getElementById("circle");
        if (circleDiv) {
          audioElement.addEventListener("timeupdate", function () {
            const duration = audioElement.duration;
            const currentTime = audioElement.currentTime;
            const percentage = (currentTime / duration) * 100;
            circleDiv.style.left = `${percentage}%`;

            function formatTime(time) {
              const minutes = Math.floor(time / 60);
              const seconds = Math.floor(time % 60);
              return `${minutes}:${seconds.toString().padStart(2, "0")}`;
            }
            const timeInfoDiv = document.getElementById("time-info");
            timeInfoDiv.innerText = `${formatTime(currentTime)} / ${formatTime(
              duration
            )}`;
          });
        }

        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audioElement;
        audioElement.play();

        const songName = document.getElementById("info");
        let artist = "Arijit Singh";
        songName.innerText = musicLibrary[artist][i];
      });
      controller();
    }
  } else if (lowerCaseArtist === "aatifaslam") {
    const popularSongs = `<div class="song-list-3">           
        
        <div class="row">
            <div class="sno">
                <p>1</p>
                </div>
                <div class="songs-list" id="row1"><img
                    src="./assets/songs-img/dekhtedekhte.jpg" height="40px">
                                <h3>Dekhte Dekhte</h3>
                            </div>
                            <div class="song-info">
                                <p>272,727,219</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>4:21</p>
                            </div>
                            <audio id="dekhteAudio" src="./assets/songs/aatifaslam/Dekhte Dekhte.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>2</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/dildiyagalla.png"
                                    height="40px">
                                <h3>Dil Diya Gallan</h3>
                            </div>
                            <div class="song-info">
                                <p>97,311,112</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="dildiyaAudio"
                                src="./assets/songs/aatifaslam/Dil Diyan Gallan.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>3</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/tajdareharam.webp"
                                    height="40px">
                                <h3>Tajdar - E - Haram</h3>
                            </div>
                            <div class="song-info">
                                <p>272, 511, 011</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:14</p>
                            </div>
                            <audio id="tajdareharamAudio" src="./assets/songs/aatifaslam/Tajdar E Haram.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>4</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/terahonelagahu.jpg"
                                    height="40px">
                                <h3>Tera Hone Laga Hu</h3>
                            </div>
                            <div class="song-info">
                                <p>500,448,171</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="terahonelagahuAudio" src="./assets/songs/aatifaslam/Tera Hone Laga hu.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>5</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/teresangyara.jpg"
                                    height="40px">
                                <h3>Tere Sang Yaara</h3>
                            </div>
                            <div class="song-info">
                                <p>164,474,618</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>5:46</p>
                            </div>
                            <audio id="teresangyaraAudio"
                                src="./assets/songs/aatifaslam/Tere Sang Yaara.mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row

    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const audioElementId = this.getElementsByTagName("audio")[0].id;
        const audioElement = document.getElementById(audioElementId);
        const circleDiv = document.getElementById("circle");

        if (circleDiv) {
          audioElement.addEventListener("timeupdate", function () {
            const duration = audioElement.duration;
            const currentTime = audioElement.currentTime;
            const percentage = (currentTime / duration) * 100;
            circleDiv.style.left = `${percentage}%`;

            function formatTime(time) {
              const minutes = Math.floor(time / 60);
              const seconds = Math.floor(time % 60);
              return `${minutes}:${seconds.toString().padStart(2, "0")}`;
            }
            const timeInfoDiv = document.getElementById("time-info");
            timeInfoDiv.innerText = `${formatTime(currentTime)} / ${formatTime(
              duration
            )}`;
          });
        }

        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audioElement;
        audioElement.play();

        const songName = document.getElementById("info");
        let artist = "Aatif Aslam";
        songName.innerText = musicLibrary[artist][i];
      });
      controller();
    }
  } else if (lowerCaseArtist === "a.r.rahman") {
    const popularSongs = `<div class="song-list-3">           
        
        <div class="row">
            <div class="sno">
                <p>1</p>
                </div>
                <div class="songs-list" id="row1"><img
                    src="./assets/songs-img/jaiho.jpg" height="40px">
                                <h3>Jai Ho</h3>
                            </div>
                            <div class="song-info">
                                <p>272,727,219</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>4:21</p>
                            </div>
                            <audio id="jaihoAudio" src="./assets/songs/arrahman/Jai Ho.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>2</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/jashnebahara.jpg"
                                    height="40px">
                                <h3>Jashan - E - Bahara</h3>
                            </div>
                            <div class="song-info">
                                <p>97,311,112</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="jashnebaharaAudio"
                                src="./assets/songs/arrahman/Jashn E Bahaaraa.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>3</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/kunfayakun.jpg"
                                    height="40px">
                                <h3>Kun Faya Kun</h3>
                            </div>
                            <div class="song-info">
                                <p>272, 511, 011</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:14</p>
                            </div>
                            <audio id="kunfayaAudio" src="./assets/songs/arrahman/Kun Faya Kun.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>4</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/lukkachhuppi.jpg"
                                    height="40px">
                                <h3>Lukka Chhuppi</h3>
                            </div>
                            <div class="song-info">
                                <p>500,448,171</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="lukachupiAudio" src="./assets/songs/arrahman/Luka Chuppi Bohut Hui.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>5</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/maatujhesalam.webp"
                                    height="40px">
                                <h3>Maa Tujhe Salaam</h3>
                            </div>
                            <div class="song-info">
                                <p>164,474,618</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>5:46</p>
                            </div>
                            <audio id="maatujhesalamAudio"
                                src="./assets/songs/arrahman/Maa Tujhhe Salaam.mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row

    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const audioElementId = this.getElementsByTagName("audio")[0].id;
        const audioElement = document.getElementById(audioElementId);
        const circleDiv = document.getElementById("circle");
        if (circleDiv) {
          audioElement.addEventListener("timeupdate", function () {
            const duration = audioElement.duration;
            const currentTime = audioElement.currentTime;
            const percentage = (currentTime / duration) * 100;
            circleDiv.style.left = `${percentage}%`;

            function formatTime(time) {
              const minutes = Math.floor(time / 60);
              const seconds = Math.floor(time % 60);
              return `${minutes}:${seconds.toString().padStart(2, "0")}`;
            }
            const timeInfoDiv = document.getElementById("time-info");
            timeInfoDiv.innerText = `${formatTime(currentTime)} / ${formatTime(
              duration
            )}`;
          });
        }

        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audioElement;
        audioElement.play();

        const songName = document.getElementById("info");
        let artist = "ARRahman";
        songName.innerText = musicLibrary[artist][i];
      });
      controller();
    }
  } else if (lowerCaseArtist === "sonunigam") {
    const popularSongs = `<div class="song-list-3">           
        
    <div class="row">
                                <div class="sno">
                                <p>1</p>
                                </div>
                                <div class="songs-list" id="row1"><img
                                src="./assets/songs-img/abhimujhmekahi.webp" height="40px">
                                <h3>Abhi Mujh Mein Kahin</h3>
                                </div>
                                <div class="song-info">
                                <p>272,727,219</p>
                                </div>
                                <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>6:04</p>
                                </div>
                                <audio id="abhiAudio" src="./assets/songs/sonunigam/Abhi Mujhme Kahi.mp3"></audio>
                                </div>
                                <div class="row">
                                    <div class="sno">
                                        <p>2</p>
                                        </div>
                                        <div class="songs-list" id="row1"><img
                                            src="./assets/songs-img/bhagwan.jpg" height="40px">
                                    <h3>Bhagwan Hai Kahan Re Tu</h3>
                                </div>
                                <div class="song-info">
                                    <p>272,727,219</p>
                                </div>
                                <div class="duration"><img src="./assets/heart.svg" height="15px">
                                    <p>5:11</p>
                                </div>
                                <audio id="bhagwanAudio" src="./assets/songs/sonunigam/Bhagwan Hai Kahan Re Tu.mp3"></audio>
                            </div>
                                <div class="row">
                                <div class="sno">
                                <p>3</p>
                                </div>
                                <div class="songs-list" id="row1"><img
                                src="./assets/songs-img/Kal_Ho_Naa_Ho.jpg" height="40px">
                                <h3>Kal Ho Na Ho</h3>
                            </div>
                            <div class="song-info">
                                <p>272,727,219</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>4:47</p>
                            </div>
                            <audio id="kalAudio" src="./assets/songs/sonunigam/Kal Ho Naa Ho.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>4</p>
                                </div>
                                <div class="songs-list" id="row1"><img
                                    src="./assets/songs-img/maihoonna.jpg" height="40px">
                            <h3>Main Hoon Na</h3>
                        </div>
                        <div class="song-info">
                            <p>272,727,219</p>
                        </div>
                        <div class="duration"><img src="./assets/heart.svg" height="15px">
                            <p>6:01</p>
                        </div>
                        <audio id="maihunnaAudio" src="./assets/songs/sonunigam/Main Hoon Na.mp3"></audio>
                    </div>
                            <div class="row">
                                <div class="sno">
                                    <p>5</p>
                                    </div>
                                    <div class="songs-list" id="row1"><img
                                        src="./assets/songs-img/papamerijaan.jpg" height="40px">
                                <h3>Papa Meri Jaan</h3>
                            </div>
                            <div class="song-info">
                                <p>272,727,219</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:04</p>
                            </div>
                            <audio id="papaAudio" src="./assets/songs/sonunigam/Papa Meri Jaan.mp3"></audio>
                        </div>

                        
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row

    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const audioElementId = this.getElementsByTagName("audio")[0].id;
        const audioElement = document.getElementById(audioElementId);
        const circleDiv = document.getElementById("circle");
        if (circleDiv) {
          audioElement.addEventListener("timeupdate", function () {
            const duration = audioElement.duration;
            const currentTime = audioElement.currentTime;
            const percentage = (currentTime / duration) * 100;
            circleDiv.style.left = `${percentage}%`;

            function formatTime(time) {
              const minutes = Math.floor(time / 60);
              const seconds = Math.floor(time % 60);
              return `${minutes}:${seconds.toString().padStart(2, "0")}`;
            }
            const timeInfoDiv = document.getElementById("time-info");
            timeInfoDiv.innerText = `${formatTime(currentTime)} / ${formatTime(
              duration
            )}`;
          });
        }

        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audioElement;
        audioElement.play();

        const songName = document.getElementById("info");
        let artist = "Sonu Nigam";
        songName.innerText = musicLibrary[artist][i];
      });
      controller();
    }
  } else if (lowerCaseArtist === "vishalmishra") {
    const popularSongs = `<div class="song-list-3">           
        
    <div class="row">
    <div class="sno">
    <p>1</p>
    </div>
    <div class="songs-list" id="row1"><img
                    src="./assets/songs-img/aajbhi.png" height="40px">
                                <h3>Aaj Bhi</h3>
                            </div>
                            <div class="song-info">
                            <p>272,727,219</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                            <p>4:21</p>
                            </div>
                            <audio id="aajbhiAudio" src="./assets/songs/vishalmishra/Aaj Bhi.mp3"></audio>
                            </div>
                            <div class="row">
                                <div class="sno">
                                    <p>2</p>
                                </div>
                                <div class="songs-list"><img src="./assets/songs-img/ekmulaqat.jpg"
                                        height="40px">
                                    <h3>Ek Mulaqaat</h3>
                                </div>
                                <div class="song-info">
                                    <p>164,474,618</p>
                                </div>
                                <div class="duration"><img src="./assets/heart.svg" height="15px">
                                    <p>5:46</p>
                                </div>
                                <audio id="ekmulaqatAudio"
                                    src="./assets/songs/vishalmishra/Ek Mulaqaat.mp3"></audio>
                            </div>
                            <div class="row">
                            <div class="sno">
                            <p>3</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/jaanbangaye.png"
                            height="40px">
                            <h3>Jaan Ban Gaye</h3>
                            </div>
                            <div class="song-info">
                            <p>500,448,171</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                            <p>3:53</p>
                            </div>
                            <audio id="jaanbangayeAudio" src="./assets/songs/vishalmishra/Jaan Ban Gaye.mp3"></audio>
                            </div>
                            <div class="row">
                            <div class="sno">
                            <p>4</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/pehlebhimai.jpg"
                            height="40px">
                            <h3>Pehle Bhi Mai</h3>
                            </div>
                            <div class="song-info">
                            <p>272, 511, 011</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                            <p>3:14</p>
                            </div>
                            <audio id="pehlebhimaiAudio" src="./assets/songs/vishalmishra/Pehle Bhi Main.mp3"></audio>
                            </div>
                        <div class="row">
                            <div class="sno">
                                <p>5</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/zihaalemuskin.jpg"
                                    height="40px">
                                <h3>Zihal - E - Muskin</h3>
                            </div>
                            <div class="song-info">
                                <p>97,311,112</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="zihaleAudio"
                                src="./assets/songs/vishalmishra/Zihaal e Miskin.mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row

    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const audioElementId = this.getElementsByTagName("audio")[0].id;
        const audioElement = document.getElementById(audioElementId);
        const circleDiv = document.getElementById("circle");
        if (circleDiv) {
          audioElement.addEventListener("timeupdate", function () {
            const duration = audioElement.duration;
            const currentTime = audioElement.currentTime;
            const percentage = (currentTime / duration) * 100;
            circleDiv.style.left = `${percentage}%`;

            function formatTime(time) {
              const minutes = Math.floor(time / 60);
              const seconds = Math.floor(time % 60);
              return `${minutes}:${seconds.toString().padStart(2, "0")}`;
            }
            const timeInfoDiv = document.getElementById("time-info");
            timeInfoDiv.innerText = `${formatTime(currentTime)} / ${formatTime(
              duration
            )}`;
          });
        }

        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audioElement;
        audioElement.play();

        const songName = document.getElementById("info");
        let artist = "Vishal Mishra";
        songName.innerText = musicLibrary[artist][i];
      });
      controller();
    }
  } else if (lowerCaseArtist === "vishalshekhar") {
    const popularSongs = `<div class="song-list-3">           
        
        <div class="row">
            <div class="sno">
                <p>1</p>
                </div>
                <div class="songs-list" id="row1"><img
                    src="./assets/songs-img/besharamrang.jpg" height="40px">
                                <h3>Besharam Rang</h3>
                            </div>
                            <div class="song-info">
                                <p>272,727,219</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>4:21</p>
                            </div>
                            <audio id="besharamrangAudio" src="./assets/songs/vishalshekhar/Besharam Rang.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>2</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/ghungru.png"
                                    height="40px">
                                <h3>Ghungru</h3>
                            </div>
                            <div class="song-info">
                                <p>164,474,618</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>5:46</p>
                            </div>
                            <audio id="ghungruAudio"
                                src="./assets/songs/vishalshekhar/Ghungroo.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>3</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/jagghumeya.png"
                            height="40px">
                            <h3>Jag Ghumeya</h3>
                            </div>
                            <div class="song-info">
                                <p>272, 511, 011</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:14</p>
                            </div>
                            <audio id="jagghumeyaAudio" src="./assets/songs/vishalshekhar/Jag Ghoomeya.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>4</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/jhumejopathan.jpg"
                                    height="40px">
                                <h3>Jhoome Jo Pathaan</h3>
                            </div>
                            <div class="song-info">
                                <p>500,448,171</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="jhumehopathanAudio" src="./assets/songs/vishalshekhar/Jhoome Jo Pathaan.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>5</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/nashesichadgayi.png"
                                    height="40px">
                                <h3>Nashe Si Chad Gayi</h3>
                            </div>
                            <div class="song-info">
                                <p>97,311,112</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="nashesichadgayuAudio"
                                src="./assets/songs/vishalshekhar/Nashe Si Chadh Gayi.mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row

    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const audioElementId = this.getElementsByTagName("audio")[0].id;
        const audioElement = document.getElementById(audioElementId);
        const circleDiv = document.getElementById("circle");
        if (circleDiv) {
          audioElement.addEventListener("timeupdate", function () {
            const duration = audioElement.duration;
            const currentTime = audioElement.currentTime;
            const percentage = (currentTime / duration) * 100;
            circleDiv.style.left = `${percentage}%`;

            function formatTime(time) {
              const minutes = Math.floor(time / 60);
              const seconds = Math.floor(time % 60);
              return `${minutes}:${seconds.toString().padStart(2, "0")}`;
            }
            const timeInfoDiv = document.getElementById("time-info");
            timeInfoDiv.innerText = `${formatTime(currentTime)} / ${formatTime(
              duration
            )}`;
          });
        }

        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audioElement;
        audioElement.play();

        const songName = document.getElementById("info");
        let artist = "Vishal Shekhar";
        songName.innerText = musicLibrary[artist][i];
      });
      controller();
    }
  } else if (lowerCaseArtist === "pritam") {
    const popularSongs = `<div class="song-list-3">           
        
        
    
                            <div class="row">
                            <div class="sno">
                                <p>1</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/kesariya.jpg"
                                    height="40px">
                                <h3>Kesariya</h3>
                            </div>
                            <div class="song-info">
                                <p>500,448,171</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="kesariyaAudio" src="./assets/songs/pritam/Kesariya Tera Ishq Hai Piya.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>2</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/omahi.jpg"
                                    height="40px">
                                <h3>O Maahi</h3>
                            </div>
                            <div class="song-info">
                                <p>97,311,112</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="omahiAudio"
                                src="./assets/songs/pritam/O Mahi O Mahi.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>3</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/phiraurkyachahiye.jpg"
                                    height="40px">
                                <h3>Phir Aur Kya Chahiye</h3>
                            </div>
                            <div class="song-info">
                                <p>272, 511, 011</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:14</p>
                            </div>
                            <audio id="heeriyeAudio" src="./assets/songs/pritam/Phir Aur Kya Chahiye.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>4</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/shayad.png"
                                    height="40px">
                                <h3>Shayad</h3>
                            </div>
                            <div class="song-info">
                                <p>164,474,618</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>5:46</p>
                            </div>
                            <audio id="terehawaleAudio"
                                src="./assets/songs/pritam/Shayad.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                            <p>5</p>
                            </div>
                            <div class="songs-list" id="row1"><img
                                src="./assets/songs-img/vekamleya.jpg" height="40px">
                                <h3>Ve Kamleya</h3>
                            </div>
                            <div class="song-info">
                                <p>272,727,219</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>4:21</p>
                            </div>
                            <audio id="vekamleyaAudio" src="./assets/songs/pritam/Ve Kamleya.mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row

    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const audioElementId = this.getElementsByTagName("audio")[0].id;
        const audioElement = document.getElementById(audioElementId);
        const circleDiv = document.getElementById("circle");
        if (circleDiv) {
          audioElement.addEventListener("timeupdate", function () {
            const duration = audioElement.duration;
            const currentTime = audioElement.currentTime;
            const percentage = (currentTime / duration) * 100;
            circleDiv.style.left = `${percentage}%`;

            function formatTime(time) {
              const minutes = Math.floor(time / 60);
              const seconds = Math.floor(time % 60);
              return `${minutes}:${seconds.toString().padStart(2, "0")}`;
            }
            const timeInfoDiv = document.getElementById("time-info");
            timeInfoDiv.innerText = `${formatTime(currentTime)} / ${formatTime(
              duration
            )}`;
          });
        }

        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audioElement;
        audioElement.play();

        const songName = document.getElementById("info");
        let artist = "Pritam";
        songName.innerText = musicLibrary[artist][i];
      });
      controller();
    }
  } else if (lowerCaseArtist === "anirudh") {
    const popularSongs = `<div class="song-list-3">           
        
        <div class="row">
            <div class="sno">
                <p>1</p>
                </div>
                <div class="songs-list" id="row1"><img
                    src="./assets/songs-img/anbenum.jpg" height="40px">
                                <h3>Anbenum</h3>
                            </div>
                            <div class="song-info">
                                <p>272,727,219</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>4:21</p>
                            </div>
                            <audio id="anubemAudio" src="./assets/songs/anirudh/ANBENUM.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>2</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/badass.jpg"
                                    height="40px">
                                <h3>Badass</h3>
                            </div>
                            <div class="song-info">
                                <p>97,311,112</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="badassAudio"
                                src="./assets/songs/anirudh/Badass.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>3</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/bloodysweet.jpg"
                                    height="40px">
                                <h3>Bloody Sweet</h3>
                            </div>
                            <div class="song-info">
                                <p>272, 511, 011</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:14</p>
                            </div>
                            <audio id="bloodysweetAudio" src="./assets/songs/anirudh/Bloody Sweet.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>4</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/lokiverse.jpg"
                                    height="40px">
                                <h3>Lokiverse</h3>
                            </div>
                            <div class="song-info">
                                <p>500,448,171</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>3:53</p>
                            </div>
                            <audio id="lokiverseAudio" src="./assets/songs/anirudh/Lokiverse 2.0.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>5</p>
                            </div>
                            <div class="songs-list"><img src="./assets/songs-img/zindabanda.jpg"
                                    height="40px">
                                <h3>Tere Hawale</h3>
                            </div>
                            <div class="song-info">
                                <p>164,474,618</p>
                            </div>
                            <div class="duration"><img src="./assets/heart.svg" height="15px">
                                <p>5:46</p>
                            </div>
                            <audio id="zindabandaAudio"
                                src="./assets/songs/anirudh/Zinda Banda Remix.mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);
    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        const audioElementId = this.getElementsByTagName("audio")[0].id;
        const audioElement = document.getElementById(audioElementId);
        const circleDiv = document.getElementById("circle");
        if (circleDiv) {
          audioElement.addEventListener("timeupdate", function () {
            const duration = audioElement.duration;
            const currentTime = audioElement.currentTime;
            const percentage = (currentTime / duration) * 100;
            circleDiv.style.left = `${percentage}%`;

            function formatTime(time) {
              const minutes = Math.floor(time / 60);
              const seconds = Math.floor(time % 60);
              return `${minutes}:${seconds.toString().padStart(2, "0")}`;
            }
            const timeInfoDiv = document.getElementById("time-info");
            timeInfoDiv.innerText = `${formatTime(currentTime)} / ${formatTime(
              duration
            )}`;
          });
        }

        const songName = document.getElementById("info");
        let artist = "Anirudh";
        songName.innerText = musicLibrary[artist][i];

        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audioElement;
        audioElement.play();
        controller();
      });
    }
  }
}

let currentAudio = null;
playimg = document.getElementById("pl-img");
const pause = document.getElementById("play_pause-btn");
pause.addEventListener("click", () => {
  if (currentAudio.paused) {
    currentAudio.play();
    playimg.src = "./assets/pause.svg";
  } else {
    currentAudio.pause();
    playimg.src = "./assets/play.svg";
  }
});

const songLsDiv = document.getElementById("song-ls");
songLsDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("row")) {
    const audioElementId = event.target.getElementsByTagName("audio")[0].id;
    const audioElement = document.getElementById(audioElementId);

    if (currentAudio) {
      currentAudio.pause();
    }
    currentAudio = audioElement;
    audioElement.play();
  }
});

async function main() {
  let a = await fetch("/Spotify-Clone/assets/songs/arijit/");
  let response = await a.text();
}

function controller() {
  const forward = document.getElementById("forward");
  forward.addEventListener("click", () => {
    const index = Array.from(document.getElementsByClassName("row")).indexOf(
      currentAudio.closest(".row")
    );
    const nextSong = Array.from(document.getElementsByClassName("row"))[
      index + 1
    ];
    if (nextSong) {
      const nextAudio = nextSong.getElementsByTagName("audio")[0];
      currentAudio.pause();
      currentAudio = nextAudio;
      currentAudio.play();
    }
  });
  const backward = document.getElementById("backward");
  backward.addEventListener("click", () => {
    const index = Array.from(document.getElementsByClassName("row")).indexOf(
      currentAudio.closest(".row")
    );
    const nextSong = Array.from(document.getElementsByClassName("row"))[
      index - 1
    ];
    if (nextSong) {
      const nextAudio = nextSong.getElementsByTagName("audio")[0];
      playimg = document.getElementById("pl-img");
      currentAudio.pause();
      currentAudio = nextAudio;
      currentAudio.play();
    }
  });
}

function openSideBar() {
  let bar = document.getElementById("sidebar");
  bar.classList.toggle("active");
  bar.classList.toggle("sidebar");
}

function show() {
  const show = document.getElementById("show");
  const artists = document.getElementsByClassName("artist");
  if (show.innerText === "Show all") {
    show.innerText = "Show Less";
    for (let i = 0; i < artists.length; i++) {
      artists[i].style.flexWrap = "wrap";
    }
  } else {
    show.innerText = "Show all";
    for (let i = 0; i < artists.length; i++) {
      artists[i].style.flexWrap = "nowrap";
    }
  }
}
let musicLibrary = {
    "Arijit Singh": ["Apna Bana Le", "O Mahi O Mahi", "Heeriye - Arijit Singh", "Kesariya Tera Ishq Hai Piya", "Pal", "Tere Hawale"],
    "Aatif Aslam": ["Dekhte Dekhte", "Dil Diyan Gallan", "Tajdar E Haram", "Tera Hone Laga hu", "Tere Sang Yaara"],
    "Pritam": ["Kesariya Tera Ishq Hai Piya", "O Mahi O Mahi", "Phir Aur Kya Chahiye", "Shayad", "Ve Kamleya"],
    "Anirudh": ["ANBENUM", "Badass", "Bloody Sweet", "Lokiverse 2.0", "Zinda Banda Remix"],
    "ARRahman": ["Jai Ho", "Jashn E Bahaaraa", "Kun Faya Kun", "Luka Chuppi Bohut Hui", "Maa Tujhhe Salaam"],
    "Vishal Mishra": ["Aaj Bhi", "Ek Mulaqaat", "Jaan Ban Gaye", "Pehle Bhi Main", "Zihaal e Miskin"],
    "Vishal Shekhar": ["Besharam Rang", "Ghungroo", "Jag Ghoomeya", "Jhoome Jo Pathaan", "Nashe Si Chadh Gayi"],
    "Sonu Nigam": ["Abhi Mujhme Kahi", "Bhagwan Hai Kahan Re Tu", "Kal Ho Naa Ho", "Main Hoon Na", "Papa Meri Jaan"]
};

let artistsList = [
  "Arijit Singh",
  "Anirudh",
  "A.R. Rahman",
  "Pritam",
  "Sonu Nigam",
  "Vishal Shekhar",
  "Vishal Mishra",
  "Aatif Aslam",
];
let artists = [
  "arijit",
  "aatifaslam",
  "vishalmishra",
  "vishalshekhar",
  "sonunigam",
  "pritam",
  "arrahman",
  "anirudh",
];
let allSongNames = {};
let SongNames = [];

document.querySelector(".seekbar").addEventListener("click", (e) => {
  let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  document.querySelector(".circle").style.left = percent + "%";
  currentAudio.currentTime = (currentAudio.duration * percent) / 100;
});

document
  .querySelector(".range")
  .getElementsByTagName("input")[0]
  .addEventListener("change", (e) => {
    console.log("Setting volume to", e.target.value, "/ 100");
    currentAudio.volume = parseInt(e.target.value) / 100;
    if (currentAudio.volume > 0) {
      document.querySelector(".volume>img").src = document
        .querySelector(".volume>img")
        .src.replace("mute.svg", "volume.svg");
    }
  });

function showAll() {
  let allSongs = document.querySelector(".artist");
  allSongs.classList.toggle("showAll");
  document.getElementById("show").innerText = "Show Less";
}
