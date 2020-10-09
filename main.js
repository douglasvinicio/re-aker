$(document).ready(function(){

    const utterance = new SpeechSynthesisUtterance();
    

    $("#speak").click(function(){
        if($("#text").val() == ""){
            alert("Please, enter some text first!");}

            else {
                utterance.text = $("#text").val();
                speechSynthesis.speak(utterance);
                var amISpeaking = utterance.speaking;
                if(amISpeaking == true){
                    $("h3").html("<i>Results for  tags: </i>");
                }
            } 
    })

    $("#pause").click(function(){
        speechSynthesis.pause(utterance);
    })

    $("#resume").click(function(){
        speechSynthesis.resume(utterance);
    })

    $("#stop").click(function(){
        speechSynthesis.cancel(utterance);
    })

    $("input").on( "click", function() {
        utterance.rate = $( "input:checked" ).val();
    });
})