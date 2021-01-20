window.onclick = function (event) {
uncontext();
uncontext2();
uncontext3();
try {
document.querySelector('.selectdapp').classList.remove('selected');
}
catch (err) {
null;
}
if(event.target.className === "dapp") {
  selectdapp(event.target);
} else if(event.target.className === "dimg" || event.target.className === "dip") {
  selectdapp(event.target.parentNode);
} else {
  selectdapp(null);
}
}
function opdapp() {
  tgt.ondblclick();
}
function del() {
  tgt.id = "onetodel";
  closeoff("onetodel");
}
function closeWnd() {
  var id = tgt.id;
  var id2 = (tgt.id).slice(4);
  closeoff(id);
  closeoff('bar'+id2);
}
var tgt = null;
window.oncontextmenu = context
function context(e) {
e.preventDefault();
var c = document.querySelector("#cont");
var c2 = document.querySelector("#cont2");
var c3 = document.querySelector('#cont3');
if(event.target.className === "dapp" || event.target.className === "dapp selectdapp" || event.target.className === "selectdapp dapp") {
uncontext();
uncontext3();
c2.style.top = event.clientY;
c2.style.left = event.clientX;
c2.style.display = 'block';
selectdapp(event.target);
tgt = event.target;
} else if(event.target.className === "window") {
  uncontext2();
  uncontext();
  c3.style.top = event.clientY;
  c3.style.left = event.clientX;
  c3.style.display = "block";
  tgt = event.target;
} else if(event.target.className === "headr") {
  uncontext2();
  uncontext();
  c3.style.top = event.clientY;
  c3.style.left = event.clientX;
  c3.style.display = "block";
  tgt = event.target.parentNode;
} else {
uncontext2();
uncontext3();
c.style.top = event.clientY;
c.style.left = event.clientX;
c.style.display = 'block';
selectdapp(null);
}
}
function uncontext() {
document.querySelector('#cont').style.display = 'none';
}
function uncontext2() {
document.querySelector('#cont2').style.display = 'none';
}
function uncontext3() {
document.querySelector('#cont3').style.display = 'none';
}