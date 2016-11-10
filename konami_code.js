const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// function init() {
//   // your code here
//   var keys = [];
//   document.body.addEventListener('keydown', function(e) {
//     keys.push(e.detail || e.which);
//     console.log(keys.length);
//     if(keys.length === code.length){
//       var result = testCode(keys, code);
//       if(result === code.length){
//         alert("You have entered the Konami code!");
//       } else {
//         keys = [];
//       }
//     } 
//   })
// }

// function testCode(arr1, arr2){
//   console.log('testing')
//   var counter = 0
//   for (var i = 0; i< arr2.length; i++){
//     arr1[i] === arr2[i] ? counter++ : null
//   }
//   return counter
// }

// init()


function init(){

  var keys = [];

  document.body.addEventListener('keydown', function(e) {
    keys.push(e.detail || e.which);
    if (keys.length === code.length && keys.toString() === code.toString()){
      alert("You have entered the Konami code!");
      keys = [];
    } else if (keys.length === code.length){
      keys = [];
    }
  })

}

init()