function notify (by, content) {
  var div = document.querySelector(".nbox");
  /* <div class="notifier"><span style="text-align:right;" onclick="this.parentNode.style.display = 'none';">x</span><p id="from" style="color:blue;"></p>
  <p id="content"></p>
  </div> */
  var node = document.createElement("DIV");
  node.className = "notifier";
  node.innerHTML = "<span onclick='this.parentNode.style.display = \"none\";'>x</span><p style='color:blue;'>"+by+"</p><p>"+content+"</p>";
  div.appendChild(node);
}