window.speechquery = [];





window.command = "alert('Emoji Selected: '+window.emoji);";

window.textCommand = "window.speechquery += [window.what];";

window.endCommand = "alert('Text Recived as: '+window.what);";































window.recognition = new SpeechRecognition();
window.speechRecognitionList = new SpeechGrammarList();







window.words = ['call', 'open', 'store', 'hello', 'google', 'world', 'fash', 'player', 'antivirus', 'emoji', 'selector', 'bleh', 'music', 'songs', 'messages', 'texts', 'what', 'do', 'you', 'call', 'a', 'three', 'humped', 'camel', 'blob', 'new', 'play', 'jazzy', 'os', 'delete', 'securly', 'banana', 'phone', 'voice', 'search', 'knock', 'who', 'there', 'mine', 'craft', 'oof', 'to', 'do', 'list', 'harry', 'potter', 'spell', 'wand', 'baby', 'yoda', 'gif', 'pee', 'en', 'gee', 'jay', 'carlos', 'mal', 'evie', 'now', 'shut', 'down', 'up', 'right', 'left', 'buy', 'bankrupt', 'become', 'wow', 'mom', 'dad', 'shark', 'does', 'the', 'fox', 'say', 'speak', 'well', 'good', 'great', 'awesome', 'day', 'bad', 'night', 'opera', 'noob', 'cacky', 'cold', 'cool', 'hot', 'warm', 'big', 'huge', 'medium', 'low', 'high', 'sock', 'shoes', 'honey', 'where', 'are', 'my', 'pants', 'tiny', 'small', 'fast', 'slow', 'jaug','run', 'walk', 'track', 'computer', 'database', 'cloud', 'files', 'settings', 'boo', 'flip', 'side', 'turn', 'rotate', 'break', download', 'a', 'the', 'that', 'virus', 'my', 'his', 'her', 'home', 'app', 'text', 'to', 'one', 'two', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million', 'billion', 'bit', 'byte', 'megabyte', 'gigabyte', 'terabyte', 'micro', 'you', 'es', 'bee', 'bob', 'the', 'builder', 'hour', 'hours', 'minute', 'minutes', 'second', 'seconds', 'dictionary', 'definition', 'period', 'question', 'mark', 'point', 'why', 'when', 'how', 'stinky', 'like', 'unlike', 'dislike', 'favorite', 'follow', 'unfollow'];
window.grammar = '#JSGF V1.0; grammar words; public <word> = ' + words.join(' | ') + ' ;'















window.speechRecognitionList.addFromString(window.grammar, 1);
window.recognition.lang = 'en-US';
window.recognition.interimResults = false;
window.recognition.maxAlternatives = 1;




window.recognition.onresult = function(event) {
  window.last = event.results.length - 1;
  window.what = event.results[last][0].transcript;
  console.log(window.what) {
  eval(window.textCommand);
}

window.recognition.onspeechend = function() {
  window.recognition.stop();
}


function startSpeech(funcz){
  if(funcz) {
    window.endCommand = funcz;
  } else {
    console.log("Same function!!");
  }
  window.speechquery = [];
  window.recognition.start();
}
