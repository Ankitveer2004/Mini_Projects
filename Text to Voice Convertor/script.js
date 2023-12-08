let speak = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");


voiceSelect.disabled = true;

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        speak.voice = voices[0];
        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
        
        
        voiceSelect.disabled = false;
    }
};

voiceSelect.addEventListener("change", () => {
    speak.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speak.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speak);
});
