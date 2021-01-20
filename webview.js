function isJazzyOs() {
  window.Notification = function (title, data) {
    parent.postMessage({
      type: "notification",
      by: location.hostname,
      content: data.body
    }, "*");
  }
  var fs = (Element.prototype.requestFullscreen || Element.prototype.webkitRequestFullscreen);
  Element.prototype.jazzyRequestFullscreen = fs;
  Element.prototype.requestFullscreen = null;
  Element.prototype.webkitRequestFullscreen = null;
  if(window.attachEvent) {
    window.addEventListener = function (evt, func) {
      window.attachEvent("on"+evt, func);
    }
  }
  document.head.innerHTML += "<link rel='stylesheet' href='https://jazzyos--awesomecrater.repl.co/jzy.css' />";
  
  parent.postMessage({
    type:"title",
    content:document.title
  }, "*");
  parent.postMessage(location.protocol, "*");
  window.open = function (uri) {
    parent.postMessage({
      type: "window",
      url: uri
    }, "*");
  }
}
var hmmmmm = new URL(document.referrer).hostname;
if(hmmmmm === "jazzyos--awesomecrater.repl.co" || hmmmmm === "jazzyos.awesomecrater.repl.co" || sessionStorage.getItem('usingJazzyOs')) {
  isJazzyOs();
  sessionStorage.setItem('usingJazzyOs', true);
}