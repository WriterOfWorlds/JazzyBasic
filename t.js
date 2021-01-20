window.onload = function () {
  window.div = document.querySelector('#t');
  div.focus()
  window.area = document.getElementById('ins');
  div.addEventListener('keydown', function (e) {
    if(e.keyCode === 13) {
    terminate(this.value);
    this.value = "";
    }
  })
}

function terminate(txt) {
  area.innerText += txt;
  area.innerHTML += "<br>";
  var txt = txt.split("$")[0];
  txt = txt.toLowerCase();
  if(txt.split(' ')[0] === "echo") {
    var text = txt.slice(5);
    area.innerText += text;
  } else if(txt === "clear") {
    area.innerText = "";
  } else if(txt.split(' ')[0] === "ping") {
    var text = "";
    var spl = txt.split(' ');
    for(var i = 1; i < spl.length; i++) {
      text += spl[i];
    }
    function ping(data) {
      area.innerText += "ping data gotten...";
      area.innerHTML += "<br>";
      var ttt = data;
      if(data.length > 15) {
        ttt = data.slice(0, 16)+"...";
      }
      area.innerText += ttt;
      area.innerHTML += "<br>";
    }
    function errno() {
      area.innerText += "No ping gotten";
      area.innerHTML += "<br>"
    }
    $.ajax({
      url: text,
      type: "POST",
      success: ping,
      error: errno
    });
  } else if(txt === "programs -> minecraft") {
    if(localStorage.getItem('minecraft')) {
      area.innerText += "minecraft opening...";
        window.parent.mine_w();
    } else {
      area.innerText += "no program called 'minecraft'";
    }
  } else if(txt === "programs -> wikipedia") {
    if(localStorage.getItem('wiki')) {
      area.innerText += "wikipedia opening...";
        window.parent.wiki_w();
    } else {
      area.innerText += "no program called 'wikipedia'"
    }
  } else if(txt === "programs -> gecko") {
    if(localStorage.getItem('gecko')) {
      area.innerText += "gecko opening...";
      
        window.parent.gecko_w();
    } else {
      area.innerText += "no program called 'gecko'"
    }
  } else if(txt.slice(0, 11) === "programs ->") {
    var t2 = txt.slice(12);
    if(t2 === "contacts") {
      window.parent.pb_w();
      area.innerText+="contacts opening..."
    } else {
      area.innerText += "no program called '"+t2+"'";
    }
  } else if(txt === "pi") {
    area.innerText += Math.PI;
  } else {
    area.innerText += "Not a bash command"
  }
  area.innerHTML += "<br>"
}