"use strict";
$(document).ready(function(){
   var start = $("#start");
   var maze = $("#maze");
   var end = $("#end");
   var boundary = $(".boundary");
   var gameStart = false;

   start.click(function(){

      gameStart = true;
      if(boundary.hasClass("lost")){
         boundary.removeClass("lost");
            $(".boundary").css("background-color","white");
            $("#status").text("Start Game Now");
      }
      boundary.mousemove(function(){ loss();})
   });

   end.mousemove(function(){
     if(gameStart == true) won();
     else if(gameStart && boundary.hasClass('youlose'))  loss();

    });

    function won(){
     alert("Hurry!!! you won");
     gameStart = false;
     $("#status").text("Hurry!!! you won! please collect your prize money.");
    }

function loss(){
  if(gameStart){
    gameStart=false;
   boundary.addClass("lost");
   $(".boundary").css("background-color","red");
   $("#status").text("You lost the game, Try Again");}

}

});
