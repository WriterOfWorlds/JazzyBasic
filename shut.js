function shutdown() {
  var nav = document.querySelector("#myNavbar");
  var dapp = document.querySelector('.desktop');
  clearnotifs();
  closeall();
  nav.style.display = "none";
  dapp.style.display = "none";
  setTimeout(function () {
    location.href = "shut.html";
  }, 2000);
}
function reboot() {
  location.reload();
}
function shutpop() {
  alert_b("Shutdown?<br><button onclick='reboot();'>Reboot</button> <button onclick='shutdown();'>Shutdown</button>");
}