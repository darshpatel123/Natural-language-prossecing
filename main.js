var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    speak();
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data=document.getElementById("textbox").Value;
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
}
Webcam.set({
    width:320,
   height:240,
   image_format:'jpeg',
   jpeg_quality:98
})
camera=document.getElementById("webcam");