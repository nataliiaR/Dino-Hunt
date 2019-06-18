$('[data-toggle="tooltip"]').tooltip();  

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
const tyrannosaurus = new Dino(200,20);
const herrerasaurus = new Dino(150,70);
const triceratops = new Dino(300,30);

var killedDinos=0;
var killedHunter=0;

function resetDinoSelection(){
  distanceToHunter=distanceToHunter+50+Math.floor(Math.random() * 100);
  isDinoSelected=false;
  $(".dino-header").text("Select another dino to hunt");
  }



  $('div.hunter').on('click', function () {
   if( $(this).attr('id')==="hunter-1"){
     $("#hunter-2").hide();
      isHunterSelected = true;
      $('.hunter-name').css("background-color","darkgreen");
      $('.hunter-life').css("background-color","#556B2F");
      hunterSelected =this;
      $(".hunter-header").text("Hunter 1 avatar will play for you")
      $(".dino-section").css("display","block")
   }
   else{
    $("#hunter-1").hide();
      isHunterSelected =true;
      $(".hunter-header").text("Hunter 2 avatar will play for you")
      $('.hunter-name').css("background-color","darkgreen");
      $('.hunter-life').css("background-color","#556B2F");
      hunterSelected = this;
      $(".dino-section").css("display","block")
    }
   

  });


  $('.dino-box').on('click', function (e) {
    var killed= $(".dino-life",this).text();

    if(isHunterSelected && !isDinoSelected && killed!=="KILLED")  {
    
        $(".dino-name",this).css("background-color","darkgreen");
        $(".dino-life",this).css("background-color","#556B2F");
        isDinoSelected=true;
        
        switch($(".dino-name",this).text()){
          
          case "Tyrannosaurus":
          dino=tyrannosaurus;
          break;

          case "Herrerasaurus":
          dino=herrerasaurus;
          break;


          case "Triceratops":

          dino=triceratops;
          break;
          

        }
        selectedDino=this;
        $('#attack').css("display","block");
       
  }
  });



  $('#attack').on('click', function () {
   if (distanceToHunter>0 && isDinoSelected===true) 
        attackTheDino(dino);
  
  });

 distanceToHunter=100+Math.floor(Math.random() * 50);

  function attackTheDino(dino){
    $(".hunter-life",hunterSelected).text("Distance to dino "+ distanceToHunter);
    dinoStep = dino.speed+Math.floor(Math.random() * 30);
    penetrate = 60+Math.floor(Math.random() * 70);
    dino.life=dino.life-penetrate;
    $(".dino-life",selectedDino).text("Life remaining " +dino.life);

    if (distanceToHunter>0){

    distanceToHunter = distanceToHunter-dinoStep;

    }

    if(dino.life<0){

      $(".dino-life",selectedDino).text("KILLED");
      $(".dino-name",selectedDino).css("background-color","red");
      $(".dino-life",selectedDino).css("background-color","red");
      $(".hunter-life",hunterSelected).text("");
      killedDinos=killedDinos+1;
      resetDinoSelection();
    }
    if (distanceToHunter<=0) {
      $(".hunter-life",hunterSelected).text("KILLED");     
      $(".hunter-name",hunterSelected).css("background-color","red");
      $(".hunter-life",hunterSelected).css("background-color","red");
      killedHunter++;
    }

    if(killedHunter===1){
      $(".gameIsOverLose").css("display","block");
    } 
    if(killedDinos===3){

      $(".gameIsOverWin").css("display","block");
    }
    
   
  }


  