console.log("hi module pattern")

const appModule =(function(){
      let counter =0;
      return{
          setCounter:function(newValue){
            counter = newValue;
          },

          incrementCounter : function(){
              return ++counter;
          },

          getCounter : function(){
            return counter;
          }
      }
})();

// Use our module

console.log(appModule.getCounter());
let newValue = appModule.incrementCounter();
console.log(newValue);
