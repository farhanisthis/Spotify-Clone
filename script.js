function changeImg() {
  const param = new URLSearchParams(window.location.search);
  const content = param.get("content");
  console.log(content);
  const album = document.createElement("img");
  const lowerCaseArtist = content.toLowerCase().replace(/\s/g, "");
  album.src = `./assets/images/${lowerCaseArtist}.jpg`;
  console.log("printing src", album.src);
  document.getElementById("album-art").appendChild(album);

  let artist_name = document.getElementById("art-name");
  artist_name.innerText = `${content}`;
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
                              <audio id="apnaBanaLeAudio" src="./assets/songs/Apna Bana Le - Arijit Singh.mp3"></audio>
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
                                        src="./assets/songs/O Mahi O Mahi(PagalWorld.com.sb).mp3"></audio>
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
                                    <audio id="heeriyeAudio" src="./assets/songs/Heeriye - Arijit Singh.mp3"></audio>
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
                                    <audio id="kesariyaAudio" src="./assets/songs/Kesariya Tera Ishq Hai Piya.mp3"></audio>
                                </div>
                                <div class="row">
                                    <div class="sno">
                                        <p>5</p>
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
                                        src="./assets/songs/Tere Hawaale(PagalWorld.com.sb).mp3"></audio>
                                </div>
                          <!-- Add more rows here -->
                          `;
                          
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row
    
    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", function() {
            const audioElementId = this.getElementsByTagName("audio")[0].id;
            const audioElement = document.getElementById(audioElementId);
        
            if (currentAudio) {
              currentAudio.pause();
            }
            currentAudio = audioElement;
            audioElement.play();
          });
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
                            <audio id="dekhteAudio" src="./assets/songs/aatifaslam/Dekhte Dekhte - Deep House Mix_320(PagalWorld.com.sb).mp3"></audio>
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
                                src="./assets/songs/aatifaslam/320kbps-TZH 2017 - Dil Diyan Gallan.mp3"></audio>
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
                            <audio id="tajdareharamAudio" src="./assets/songs/aatifaslam/Tajdar E Haram Naat-(PagalSongs.Com.IN).mp3"></audio>
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
                            <audio id="terahonelagahuAudio" src="./assets/songs/aatifaslam/Tera-Hone-Laga-Hoon_320(PagalWorldl).mp3"></audio>
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
                                src="./assets/songs/aatifaslam/Oo-Karam-Khudaya-Ha(PagalWorld).mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row
    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function() {
    const audioElementId = this.getElementsByTagName("audio")[0].id;
    const audioElement = document.getElementById(audioElementId);

    if (currentAudio) {
      currentAudio.pause();
    }
    currentAudio = audioElement;
    audioElement.play();
  });
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
                            <audio id="jaihoAudio" src="./assets/songs/arrahman/Jai Ho_320(PagalWorld.com.sb).mp3"></audio>
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
                                src="./assets/songs/arrahman/Jashn E Bahaaraa - Jodhaa Akbar 320 Kbps.mp3"></audio>
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
                            <audio id="kunfayaAudio" src="./assets/songs/arrahman/Kun-Faya-Kun_320(PagalWorldl).mp3"></audio>
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
                            <audio id="lukachupiAudio" src="./assets/songs/arrahman/Luka-Chuppi-Bohut-Hui(MrSong.In).mp3"></audio>
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
                                src="./assets/songs/arrahman/Maa Tujhhe Salaam_320(Ghantalele.com).mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);
                  
                        // Add event listener to each row
                        const rows = document.getElementsByClassName("row")
                        for (let i = 0; i < rows.length; i++) {
                            rows[i].addEventListener("click", function() {
                                const audioElementId = this.getElementsByTagName("audio")[0].id;
                                const audioElement = document.getElementById(audioElementId);
                            
                                if (currentAudio) {
                                  currentAudio.pause();
                                }
                                currentAudio = audioElement;
                                audioElement.play();
                              });
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
                            <audio id="aajbhiAudio" src="./assets/songs/vishalmishra/new-320-Aaj Bhi - Vishal Mishra.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>2</p>
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
                                src="./assets/songs/vishalmishra/Zihaal e Miskin_320(PagalWorld.com.sb).mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>3</p>
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
                            <audio id="pehlebhimaiAudio" src="./assets/songs/vishalmishra/Pehle Bhi Main Remix - DJ Chetas X DJ NYK_320(PagalWorld.com.sb).mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>4</p>
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
                            <audio id="jaanbangayeAudio" src="./assets/songs/vishalmishra/new-320-01 - Jaan Ban Gaye - Khuda Haafiz (2020).mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>5</p>
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
                                src="./assets/songs/vishalmishra/Ek Mulaqaat_320(PagalWorld.com.sb).mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

                  
                        // Add event listener to each row
                        const rows = document.getElementsByClassName("row")
                        for (let i = 0; i < rows.length; i++) {
                            rows[i].addEventListener("click", function() {
                                const audioElementId = this.getElementsByTagName("audio")[0].id;
                                const audioElement = document.getElementById(audioElementId);
                            
                                if (currentAudio) {
                                  currentAudio.pause();
                                }
                                currentAudio = audioElement;
                                audioElement.play();
                              });
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
                            <audio id="besharamrangAudio" src="./assets/songs/vishalshekhar/Besharam Rang_320(PagalWorld.com.sb).mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>2</p>
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
                                src="./assets/songs/vishalshekhar/bollywood-Befikre - Nashe Si Chadh Gayi.mp3"></audio>
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
                            <audio id="jagghumeyaAudio" src="./assets/songs/vishalshekhar/bollywood-Sultan - Jag Ghoomeya.mp3"></audio>
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
                            <audio id="jhumehopathanAudio" src="./assets/songs/vishalshekhar/Jhoome Jo Pathaan_320(PagalWorld.com.sb).mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>5</p>
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
                                src="./assets/songs/vishalshekhar/new-320-01 - Ghungroo - War (2019).mp3"></audio>
                        </div>
                        `;
                        const popularSongsDiv = document.getElementById("song-ls")
                        popularSongsDiv.insertAdjacentHTML('beforeend', popularSongs)
                  
                        // Add event listener to each row
                        const rows = document.getElementsByClassName("row")
                        for (let i = 0; i < rows.length; i++) {
                            rows[i].addEventListener("click", function() {
                                const audioElementId = this.getElementsByTagName("audio")[0].id;
                                const audioElement = document.getElementById(audioElementId);
                            
                                if (currentAudio) {
                                  currentAudio.pause();
                                }
                                currentAudio = audioElement;
                                audioElement.play();
                              });
                        }

  } else if (lowerCaseArtist === "pritam") {
    const popularSongs = `<div class="song-list-3">           
        
        <div class="row">
            <div class="sno">
                <p>1</p>
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
                            <audio id="vekamleyaAudio" src="./assets/songs/pritam/Ve Kamleya(PagalWorld.com.sb).mp3"></audio>
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
                                src="./assets/songs/O Mahi O Mahi(PagalWorld.com.sb).mp3"></audio>
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
                            <audio id="heeriyeAudio" src="./assets/songs/Heeriye - Arijit Singh.mp3"></audio>
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
                            <audio id="kesariyaAudio" src="./assets/songs/Kesariya Tera Ishq Hai Piya.mp3"></audio>
                        </div>
                        <div class="row">
                            <div class="sno">
                                <p>5</p>
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
                                src="./assets/songs/Tere Hawaale(PagalWorld.com.sb).mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);

    // Add event listener to each row
    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function() {
    const audioElementId = this.getElementsByTagName("audio")[0].id;
    const audioElement = document.getElementById(audioElementId);

    if (currentAudio) {
      currentAudio.pause();
    }
    currentAudio = audioElement;
    audioElement.play();
  });
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
                            <audio id="anubemAudio" src="./assets/songs/anirudh/Anbenum_320(PagalWorld.com.sb).mp3"></audio>
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
                                src="./assets/songs/anirudh/Badass_320(PagalWorld.com.sb).mp3"></audio>
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
                            <audio id="bloodysweetAudio" src="./assets/songs/anirudh/Bloody Sweet_320(PagalWorld.com.sb).mp3"></audio>
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
                            <audio id="lokiverseAudio" src="./assets/songs/anirudh/Lokiverse 2.0 (Leo)(PagalWorld.com.sb).mp3"></audio>
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
                                src="./assets/songs/anirudh/Zinda Banda Remix - DJ Wallston_320(PagalWorld.com.sb).mp3"></audio>
                        </div>
                        `;
    const popularSongsDiv = document.getElementById("song-ls");
    popularSongsDiv.insertAdjacentHTML("beforeend", popularSongs);
    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function() {
    const audioElementId = this.getElementsByTagName("audio")[0].id;
    const audioElement = document.getElementById(audioElementId);

    if (currentAudio) {
      currentAudio.pause();
    }
    currentAudio = audioElement;
    audioElement.play();
  });
    }
  }
}
let currentAudio = null;
playimg = document.getElementById("pl-img")
const pause = document.getElementById("play_pause-btn")
pause.addEventListener("click", ()=>{
    if (currentAudio.paused) {
        currentAudio.play();
        playimg.src = "./assets/pause.svg";
      }
      else {
        currentAudio.pause();
        playimg.src = "./assets/play.svg";
      }
}) 
