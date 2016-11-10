const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

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