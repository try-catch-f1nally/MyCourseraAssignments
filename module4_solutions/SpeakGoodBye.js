(function () {
    let speakWord = "Good Bye";
    const byeSpeaker = {
        speak(name) {
            console.log(speakWord, name);
        }
    }
    window.byeSpeaker = byeSpeaker;
})();
