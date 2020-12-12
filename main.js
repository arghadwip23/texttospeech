console.log('Hello World!');
var title ="A message from  Creator";
var message = "Hey it's Arghadwip here, It's my project to learn JavaScript.Here you have to write some text then select the preferred language & go to play it. Please enjoy it & support me ";
function playsound(lan,tex,rat,pit) {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = lan;
    speech.text = tex;
    speech.volume = 1;
    speech.rate = rat;
    speech.pitch = pit;
    
    window.speechSynthesis.speak(speech);
}
$(document).ready(function (){
   /* swal({
        title: title,
        text : message,
        confirmButtonClass: "btn-danger"
    });*/
    $('#ran-rate').html($('#rate').val());
    $('#ran-pitch').html($('#pitch').val());
 $('#rate').change(function(){
     $('#ran-rate').html($('#rate').val());
 })
 $('#pitch').change(function() {
     $('#ran-pitch').html($('#pitch').val());
 })
$('#play').click(function(){
    text = $('#text').val();
    rate = $('#rate').val();
    pitch = $('#pitch').val();
    lang = $('#lang').val();
    playsound(lang,text,rate,pitch);
})


})