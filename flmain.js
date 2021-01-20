function createTextFile(dir, fn, text) {
  dir.getFile(fn,{create: true}, function (fileEntry) {
  fileEntry.createWriter(function(fileWriter) {
      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      var blob = new Blob([text], {type: "text/plain"})
      
      fileWriter.write(blob);
    }, alert);

  }, alert);
}
function createFile(dir, fn, blob) {
  dir.getFile(fn,{create: true}, function (fileEntry) {
  fileEntry.createWriter(function(fileWriter) {
      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      
      fileWriter.write(blob);
    }, alert);

  }, alert);
}
function createFileWErr(dir, fn, blob, errcb, excl) {
  dir.getFile(fn,{create: true, exclusive: Boolean(excl)}, function (fileEntry) {
  fileEntry.createWriter(function(fileWriter) {
      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      
      fileWriter.write(blob);
    }, errcb);

  }, errcb);
}

function createHTMLFile(dir, fn, text) {
  dir.getFile(fn,{create: true}, function (fileEntry) {
  fileEntry.createWriter(function(fileWriter) {
      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      var blob = new Blob([text], {type: "text/html"})
      
      fileWriter.write(blob);
    }, alert);

  }, alert);
}

function scanDirectory(dirPath){
  var fileList = [];
fs.root.getDirectory(dirPath, {}, function(dirEntry){
  var dirReader = dirEntry.createReader();
  dirReader.readEntries(function(entries) {
    for(var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var obj = {
        item: entry,
      };
      if (entry.isDirectory){
        obj.type = "folder";
      }
      else if (entry.isFile){
        obj.type = "file";
      }
      fileList[i] = obj;
    }

  }, alert);
}, alert);
return fileList;
}


function readFile(entry) {
  return entry.toURL();
}