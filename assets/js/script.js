
  var hunter = "";
  var dino = "";
  var hunter_life;
  var dino_life = "";
  var isHunterSelected = false;
  var isDinoSelected = false;


  $('.hunter').on('click', function () {


  });


  $('.dino').on('click', function () {
    if(!isHunterSelected){
        alert("select the hunter first");
    }
  });

  $('#attack').on('click', function () {
      if(!isHunterSelected || !isDinoSelected){
     alert("no player or dino");
      }
  });
