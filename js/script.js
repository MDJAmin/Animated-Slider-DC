"use strict"

const audio = document.querySelector("#background-music")
const playPauseButton = document.querySelector("#play-pause-button")
const playIcon = document.querySelector("#play-music")
const pauseIcon = document.querySelector("#pause-music")

letPlaying= false;

function togglePlayPause() {
    console.log("Toggle function called");
    if (isPlaying) {
      audio.pause();
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    } else {
      audio.play();
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
    }
    isPlaying = !isPlaying;
  }
  
  playPauseButton.addEventListener("click", togglePlayPause);

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  audio.play();
});

var swiper = new Swiper(".swiper", {
    grabCursor: true,
    initialSlide: 2,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1000,
    freeMode: false,
    mousewheel: {
      thresholdDelta: 30,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
      click(event) {
        swiper.slideTo(this.clickedIndex);
      },
    },
  });
  