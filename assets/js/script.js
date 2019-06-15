
  var hunter = "";
  var dino = "";
  var hunter_life;
  var dino_life = "";
  var isHunterSelected = false;
  var isDinoSelected = false;
  var dino;
  class Dino {
    constructor(life, speed) {
        this.life = life;
        this.speed = speed;
    }
}
const tyrannosaurus = new Dino(150,20);
const rex = new Dino(300,50);
const triceratops = new Dino(200,30);

  $('div.hunter').on('click', function () {
  console.log($(this).attr('id'));
   if( $(this).attr('id')==="hunter-1"){
     $("#hunter-2").hide();
      isHunterSelected = true;
      $('.hunter-name').css("background-color","darkgreen");
      $('.hunter-life').css("background-color","#556B2F");
      hunterSelected =this;
   }
   else{
    $("#hunter-1").hide();
      isHunterSelected =true;

      $('.hunter-name').css("background-color","darkgreen");
      $('.hunter-life').css("background-color","#556B2F");
      hunterSelected = this;
    }
   

  });


  $('.dino-box').on('click', function () {
    console.log(isHunterSelected);

    if(isHunterSelected && !isDinoSelected) {
    
        $(".dino-name",this).css("background-color","darkgreen");
        $(".dino-life",this).css("background-color","#556B2F");
        isDinoSelected=true;
        
        switch($(".dino-name",this).text()){
          
          case "Tyrannosaurus":
          dino=tyrannosaurus;
          break;

          case "Rex":
          dino=rex;
          break;


          case "Triceratops":

          dino=triceratops;
          break;
          

        }
        selectedDino=this;
        console.log($(".dino-name",this).text() + " dino "+ dino.life);
       
  }
  });



  $('#attack').on('click', function () {
      if(!isHunterSelected || !isDinoSelected){
     alert("no player or dino");
      }
      else if (distanceToHunter>0)
        attackTheDino(dino);
  
  });


var distanceToHunter=200;

  function attackTheDino(dino){
    dinoStep = dino.speed+Math.floor(Math.random() * 30);
    penetrate = 60+Math.floor(Math.random() * 10);
    dino.life=dino.life-penetrate;
    $(".dino-life",selectedDino).text(dino.life);

    if (distanceToHunter>0){

    distanceToHunter = distanceToHunter-dinoStep;
    console.log("distance to hunter "+distanceToHunter);

    }
    if(dino.life<0){
      alert("dino got killed");
    }
    if (distanceToHunter<0) {
      console.log("do I get here");
        //$(".hunter-life",hunterSelected).text(0);
         alert("Hunter got eaten " + $(".hunter-life",hunterSelected).text());
    }
    
   
  }
  
 