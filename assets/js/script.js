
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
      
   }
   else{
    $("#hunter-1").hide();
      isHunterSelected =true;

      $('.hunter-name').css("background-color","darkgreen");
      $('.hunter-life').css("background-color","#556B2F");
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
        console.log($(".dino-name",this).text() + " dino "+ dino.life);
       
  }
  });



  $('#attack').on('click', function () {
      if(!isHunterSelected || !isDinoSelected){
     alert("no player or dino");
      }
      /*else{
        attackTheDino();
      }*/
  });

 