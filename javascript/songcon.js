
audio = null;
function playsystem(musicsrc, songname, musicimg , artist) {

  let playbar = document.getElementById("playbar");

  let songscard = document.getElementById("songscard")

  songscard.src = musicimg;

  document.getElementById("songname").textContent = songname;

  document.getElementById("artist").textContent = artist;

  audio = new Audio(musicsrc);

  let isPlaying = false;

  playpush = document.getElementById("playpush");

  function playmusic() {
    playbar.classList.remove("disno");

    audio.play();
    playpush.src = "img/pause.svg";
    cardcontainer.style.maxHeight = "70vh";
    isPlaying = true;
    audio.currentTime = 0;
    isPlayin = true;
  }
  playmusic();

  isPlayin = false;

  function playpus() {
    if (isPlaying) {
      playpush.src = "img/play.svg";
      isPlaying = false;
      audio.pause();
    } else {
      playpush.src = "img/pause.svg";
      isPlaying = true;
      audio.play();
    }
  }


  playpush.addEventListener("click", playpus);

  document.addEventListener("keydown", (k) => {
    if (k.key == " " ) {
      
        playpus();
    }
   
  });

  
  audio.addEventListener("ended", () => {
    playpus();
  });

  const musictime = document.getElementById("musictime");
  const musicduration = document.getElementById("musicduration");
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  setInterval(() => {
    if (!audio.paused) {
      musictime.textContent = formatTime(audio.currentTime);
    }
    musicduration.textContent = formatTime(audio.duration);
  }, 1000);

  const progressBarContainer = document.getElementById("progress-container");

  const progressBar = document.getElementById("progress-bar");

  const progressThumb = document.getElementById("progress-thumb");


  audio.addEventListener("timeupdate", () => {
    const progressPercentage = (audio.currentTime / audio.duration) * 100;

    progressBar.style.width = `${progressPercentage}%`;
    progressThumb.style.left = `${progressPercentage}%`;
  });

  progressBarContainer.addEventListener("click", (e) => {
    const rect = progressBarContainer.getBoundingClientRect();

    const clickX = e.clientX - rect.left;

    const width = rect.width;

    const newTime = (clickX / width) * audio.duration;
    audio.currentTime = newTime;
  });

  let isDragging = false;

  progressThumb.addEventListener("mousedown", () => {
    isDragging = true;
    audio.pause();
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const rect = progressBarContainer.getBoundingClientRect();

      const moveX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const progressPercentage = (moveX / rect.width) * 100;

      const newTime = (moveX / rect.width) * audio.duration;
      progressBar.style.width = `${progressPercentage}%`;
      progressThumb.style.left = `${progressPercentage}%`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      const rect = progressBarContainer.getBoundingClientRect();
      const moveX = Math.min(
        Math.max(event.clientX - rect.left, 0),
        rect.width
      );
      const newTime = (moveX / rect.width) * audio.duration;
      audio.currentTime = newTime;
      audio.play();
    }
  });
}









