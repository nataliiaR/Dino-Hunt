
  var hunter = "";
  var dino = "";
  var hunter_life;
  var dino_life = "";
  var isHunterSelected = false;
  var isDinoSelected = false;
  var dino;
  class Dino {
    constructor(life, speed,shield) {
        this.life = life;
        this.speed = speed;
        this.shield = shield
    }
}
const tyrannosaurus = new Dino(150,20,-20);
const rex = new Dino(300,40,-40);
const triceratops = new Dino(200,30,-10);


function resetDinoSelection(){
  console.log($(".dino-life",killedDino).text());
  isDinoSelected=false;
  $(".dino-name").css("background-color","grey");
  $(".dino-life").css("background-color","grey");

  if($(".dino-life",killedDino).text()==="KILLED"){
    $(".dino-name",killedDino).css("background-color","red");
    $(".dino-life",killedDino).css("background-color","red");
  }
  
}

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


  $('.dino-box').on('click', function (e) {
    console.log(isHunterSelected);
    var killed= $(".dino-life",this).text();

    if(isHunterSelected && !isDinoSelected && killed!=="KILLED")  {
    
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

 distanceToHunter=100+Math.floor(Math.random() * 50);

  function attackTheDino(dino){
    $(".hunter-life",hunterSelected).text("Distance to dino "+ distanceToHunter);
    dinoStep = dino.speed+Math.floor(Math.random() * 30);
    penetrate = 60+Math.floor(Math.random() * 70)+dino.shield;
    dino.life=dino.life-penetrate;
    $(".dino-life",selectedDino).text("Life remaining " +dino.life);

    if (distanceToHunter>0){

    distanceToHunter = distanceToHunter-dinoStep;
    console.log("distance to hunter "+distanceToHunter);
    }
    console.log("dinoStep "+ dinoStep);
    console.log("penetrate "+penetrate);
    if(dino.life<0){
      alert("dino got killed");
      $(".dino-life",selectedDino).text("KILLED");
          
      $(".dino-name",selectedDino).css("background-color","red");
      $(".dino-life",selectedDino).css("background-color","red");
      distanceToHunter=distanceToHunter+50+Math.floor(Math.random() * 100);
      killedDino=selectedDino;
      resetDinoSelection();

    }
    if (distanceToHunter<=0) {
      console.log("do I get here");
        //$(".hunter-life",hunterSelected).text(0);
      $(".hunter-life",hunterSelected).text("KILLED");     
      $(".hunter-name",hunterSelected).css("background-color","red");
      $(".hunter-life",hunterSelected).css("background-color","red");
    }
    
   
  }
  
 