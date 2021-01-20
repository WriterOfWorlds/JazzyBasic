window.addEventListener('message', function (event) {
  var dt = event.data;
  if(dt.type === "notification") {
    parent.notify(dt.by, dt.content);
  } else if(dt.type === "window") {
    parent.custom_w(dt.url);
  } else if(dt === "isjzy") {
    document.querySelector('iframe').contentWindow.postMessage("jazzyos$", "*");
  } else if(dt.type === "title") {
    window.pTIT = dt.content;
  } else if(dt === "https:") {
    window.ptc = window.secure;
  } else if(dt === "http:") {
    window.ptc = window.unsecure;
  }
});