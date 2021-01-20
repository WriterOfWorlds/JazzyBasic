function capture() {
  new Audio('drip.mp3').play();
  var number = 1;
  var notFound = true;
  var blob = takePhoto(video);
  que[0] = blob;
  var html = "<p>Save file as</p><p><input class='inp"+parent.ids+"' type='text' />.png</p><p><button onclick='document.querySelector(\"#wind"+windId+"\").querySelector(\"iframe\").contentWindow.saveCaptd(document.querySelector(\".inp"+parent.ids+"\").value); closeoff(\"wind"+parent.ids+"\"); closeoff(\"bar"+parent.ids+"\");'>Save</button> <button onclick='closeoff(\"wind"+parent.ids+"\"); closeoff(\"bar"+parent.ids+"\");'>Cancel</button></p>";
  parent.alert_b(html);
}
var windId = parent.ids - 1;
var que = [false];
function saveCaptd(text) {
  var blob = que[0];
  if(text === "") {
    return parent.$oofsie$("File names can't begin with a dot!");
  }
  fs.root.getDirectory('c', {}, function (dr) {
    createFileWErr(dr, text+".png", blob, function (err) {
      if(err.code === 12) {
        parent.$oofsie$("There is already a file with that name!");
      } else {
        parent.$oofsie$("An error occurred while taking you photo.");
      }
    });
  });
}