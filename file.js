function isFile(query111) {
var q = query111;
var c = q[0]+q[1]+q[2]+q[3];
if(c === "c://") {
return true;
} else {
return false;
}
}

function c() {
return localStorage.getItem('f://c');
}
if(c() === null) {
localStorage.setItem('f://c', "");
}

function add_f(fn, data) {
localStorage.setItem('c://'+fn, data);
localStorage.setItem('f://c', c()+"<div class='filz' ondblclick='openf(this.id);' id='c://"+fn+"'><p>"+fn+"</p></div>");
}