setInterval(function () {
  var timebox = document.querySelector('.timebox');
  var ampm = document.querySelector('.ampm');
  var date = new Date();
  var min = date.getMinutes();
  var hour = date.getHours();
  var isAm = true;
  if(hour > 11) {
    isAm = false;
  }
  if(hour > 12) {
    hour -= 12;
  }
  if(hour === 0) {
    hour = 12;
  }
  if(min < 10) {
    min = "0"+min;
  }
  var amPmStat = isAm ? "am" : "pm";
  var timeStat = hour+":"+min;
  timebox.innerHTML = timeStat;
  ampm.innerHTML = amPmStat;
});
window.oncontextmenu = function(e) {
  e.preventDefault();
}