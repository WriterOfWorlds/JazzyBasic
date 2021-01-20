try {
  navigator.getBattery().then(function (battery) {
    updateLevel(battery.level * 100)
    battery.addEventListener('levelchange', function () {
        updateLevel(battery.level * 100);
    })
  })
} catch(e) {
  null;
}