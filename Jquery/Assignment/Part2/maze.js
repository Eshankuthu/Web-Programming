// "use strict";
// $(document).ready(function(){
//    var start = $("#start");
//    var maze = $("#maze");
//    var end = $("#end");
//    var boundary = $(".boundary");
//    var gameStart = false;
//
//    start.click(function(){
//       gameStart = true;
//       if(boundary.hasClass("lost")){
//          boundary.removeClass("lost");
//             $(".boundary").css("background-color","white");
//             $("#status").text("Start Game Now");
//       }
//       boundary.mousemove(function(){ loss();})
//    });
//
//    end.mousemove(function(){
//      if(gameStart == true) won();
//      else if(gameStart && boundary.hasClass('youlose'))  loss();
//
//     });
//
//     function won(){
//      gameStart = false;
//      $("#status").text("Hurry!!! you won! please collect your prize money.");
//     }
//
// function loss(){
//   if(gameStart){
//     gameStart=false;
//    boundary.addClass("lost");
//    $(".boundary").css("background-color","red");
//    $("#status").text("You lost the game, Try Again");}
//
// }
//
// });

"use strict";

$(document).ready(function(){
 var start =  $("#start");
 var end = $("#end");
 var maze = $("#maze");
 var boundary = $(".boundary");
 var gameStart = false;
 maze.mouseleave(function(){ loss() });

 start.click(function(){
  $("#status").text('Start game move mouse from S to E');
  gameStart = true;
  if(boundary.hasClass('youlose')){
   boundary.removeClass('youlose');
  }
  boundary.mousemove(function(){ loss(); })
 });

 end.mousemove(function(){
  if(gameStart == true) won();
  else if(gameStart && boundary.hasClass('youlose'))  loss();

 });

 function won(){
  gameStart = false;
  $("#status").text("Congratulation You Win");
 }

 function loss(){
  if(gameStart){
   gameStart = false;
   boundary.addClass('youlose');
   $("#status").text('You lose, Try next time');
  }
 }


})
