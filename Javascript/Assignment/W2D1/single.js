'use strict';

function max1(a,b) {
     if(a>b){
         return a;
       }
       else {
         return b;
     }
}

function maxOfThree(a,b,c){
    if(a>b&&a>c){
       return a;
    }else if (b>a&&b>c) {
        return b;
    }else{
      return c;
    }
}

function isVowel(ch){
  var check = new Array("a","e","i","o","u");
  var i;
  for (i = 0; i < check.length; i++) {
    if(check[i]==ch)
      return true;
  }
      return false;
}

function sum(arrays){
   var s = 0;
   for(var i=0;i<arrays.length;i++){
     s=s+arrays[i];
   }
   return s;
 }

 function multiply(arrays){
   var s = 1;
   for(var i=0;i<arrays.length;i++){
     s=s*arrays[i];
   }
   return s;
 }

 function reverse(rev){
   var revchar="";
   for(var i=rev.length-1;i>=0;i--){
      revchar +=rev[i];
   }
   return revchar;
 }

 function findLongestWord(arrays){
   for(var i=0;i<arrays.length;i++){
     for(var j=0;j<arrays.length;j++){
          if(arrays[i].length>arrays[j].length){
               var max= arrays[i];
          }
     }
   }
      return max.length;
 }

 function filterLongWords(arrays,len){
   var a=arrays.sort();
   for (var i = 0; i < a.length; i++) {
      if(a[i].length<len){
          arrays.splice(i,1);
      }
   }
   return a;

 }
