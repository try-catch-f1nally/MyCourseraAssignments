(function () {
    let speakWord = "Hello";
    const helloSpeaker = {
        speak(name) {
            console.log(speakWord, name);
        }
    }
    window.helloSpeaker = helloSpeaker;
})();
