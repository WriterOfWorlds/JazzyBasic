window.addEventListener('load', function () {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service.js').then(function (reg) {
      window.registration = reg;
    }).catch(function (err) {
      throw(err);
    });
  }
});