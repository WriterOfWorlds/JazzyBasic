function takePhoto(v) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var ratio = v.videoWidth/v.videoHeight;
  var w = v.videoWidth-100;
  var h = parseInt(w/ratio,10);
  canvas.width = w;
  canvas.height = h;
  context.fillRect(0, 0, w, h);
  context.drawImage(v, 0, 0, w, h);
  var d = canvas.toDataURL('image/png');
  return dataURItoBlob(d);
}
/*
22
*/
function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

}