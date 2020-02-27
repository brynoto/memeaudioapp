window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const bg = [
    "url(./img/bloody.JPG)",
    "url(./img/danger.JPG)",
    "url(./img/kups.JPG)",
    "url(./img/pacquiao.JPG)",
    "url(./img/missionimpossible.JPG)",
    "url(./img/san.JPG)"
  ];


  console.log(sounds);
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function(){
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);

    });
  });

  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundImage = bg[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    })
  };

});

