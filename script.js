function PlayMusic() {
    var audio = new Audio("/Spotify-Clone/assets/songs/Apna Bana Le - Arijit Singh.mp3");
    audio.play();
  }
  
  let songs = document.querySelectorAll(".songs-list");
  
  songs.forEach(song => {
    song.addEventListener("click", function() {
      console.log("clicked");
      PlayMusic();
    });
  });

