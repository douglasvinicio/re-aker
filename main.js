$(document).ready(function(){
    
    var lang;
    const utterance = new SpeechSynthesisUtterance();

    $('input:radio[name=language]').click(function() {
        lang =  $('input:checked[name=language]').val();
        utterance.lang = lang;
    });
    
    $("#speak").click(function(){
        if($("#text").val() == ""){
            alert("Please, enter some text first!");}
            else {
                utterance.text = $("#text").val();
                speechSynthesis.speak(utterance);
            } 
    });

    $("#pause").click(function(){
        speechSynthesis.pause(utterance);
    });

    $("#resume").click(function(){
        speechSynthesis.resume(utterance);
    });

    $("#stop").click(function(){
        speechSynthesis.cancel(utterance);
    });

    $("input:radio[name=speed]").click(function() {
        utterance.rate = $("input:checked").val();
    });
});