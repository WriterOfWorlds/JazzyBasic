window.onload = function (){
  window.video = document.querySelector("video");
  window.play = document.querySelector('#pp');
  window.timer = document.querySelector('#time');
  window.muteb = document.querySelector('#mute')
  video.addEventListener('play', function (e) {
    window.play.src = 'pause.png';
  });
  video.addEventListener('pause', function (e) {
    window.play.src = 'play.png';
  });
  video.addEventListener('timeupdate', function (e) {
    window.timer.value = this.currentTime;
  });
  video.addEventListener('end', function (e) {
    window.play.src = 'replay.png';
  });
  timer.addEventListener('change', function (e) {
    window.video.currentTime = String(this.value);
  });
  timer.addEventListener('mousedown', function () {
        window.isp = video.paused;
if(!window.isp) {
    video.pause();
}
  });
  timer.addEventListener('mouseup', function () {
    if(!window.isp) {
    video.play();
    }
  });
  document.addEventListener('fullscreenchange', function (e) {
    window.fsed = !window.fsed;
    document.querySelector('#fs').src = "full"+window.fsed+".png";
  });
  window.oncontextmenu = function (e) {
    e.preventDefault();
    var c = document.querySelector('.context');
    c.style.display = "block";
    c.style.top = event.clientY;
    c.style.left = event.clientX;
  }
  window.onclick = function (e){
    document.querySelector('.context').style.display = "none";
  }
}
window.fsed = false;
function ppvideo() {
  if(window.video.paused) {
    window.video.play();
  } else {
    window.video.pause();
  }
  window.timer.max = window.video.duration;
}
function fsvideo() {
  if(window.fsed) {
   document.exitFullscreen()
  } else {
    if(document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if(document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    } else if(document.documentElement.jazzyRequestFullscreen) {
      document.documentElement.jazzyRequestFullscreen();
    }
  }
}
function mute() {
  window.video.muted = !window.video.muted;
  window.muteb.src = "mute"+window.video.muted+".png";
}
setInterval(function () {
  if(video.loop) {
    document.querySelector('#looped').style.display = "inline-block";
  } else {
    document.querySelector('#looped').style.display = "none";
  }
});
function about() {
  open('about.html');
}



function toggleCps() {
  var thing = document.querySelector('.caps');
  thing.style.display = (thing.style.display === "block" ? "none" : "block");
}

function rwvideo() {
  if(video.currentTime < 16) {
    video.currentTime = 0.0;
  } else {
    video.currentTime -= 15;
  }
}

function ffvideo() {
  if(video.currentTime > (video.duration - 16)) {
    video.currentTime = video.duration;
  } else {
    video.currentTime += 15;
  }
}
function airplay() {
  video.webkitShowPlaybackTargetPicker();
}

window.onmessage = function (m) {
  if(m.data.html = "<source>") {
    video.src = m.data.src
  }
}