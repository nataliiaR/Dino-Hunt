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
const tyrannosaurus = new Dino(300,35);
const herrerasaurus = new Dino(250,70);
const triceratops = new Dino(300,30);

var killedDinos=0;
var killedHunter=0;

var gunAudio = new Audio("assets/audio/Skorpion-Kibblesbob.mp3");
var arrowAudio = new Audio("assets/audio/Throw_Knife.mp3")
var rexAudio = new Audio("assets/audio/Tyrannosaurus Rex -SoundBible.mp3");
var triceratopsAudio = new Audio("assets/audio/Roar-SoundBible.mp3");


function resetDinoSelection(){
  distanceToHunter=distanceToHunter+50+Math.floor(Math.random() * 100);
  isDinoSelected=false;
  $(".dino-header").text("Select another dino to hunt");
  $(".hunter-life",hunterSelected).css("color","white")
  }

  $('div.hunter').on('click', function () {
   if( $(this).attr('id')==="hunter-1"){
     $("#hunter-2").hide();
      isHunterSelected = true;
      $('.hunter-name').css("background-color","darkgreen");
      $('.hunter-life').css("background-color","#556B2F");
      hunterSelected =this;
      $(".hunter-header").text("Hunter 1 avatar will play for you");
      $(".dino-section").css("display","block");
      huntAudio=arrowAudio;
   }
   else{
    $("#hunter-1").hide();
      isHunterSelected =true;
      $(".hunter-header").text("Hunter 2 avatar will play for you")
      $('.hunter-name').css("background-color","darkgreen");
      $('.hunter-life').css("background-color","#556B2F");
      hunterSelected = this;
      $(".dino-section").css("display","block");
      huntAudio=gunAudio;
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
          dinoAudio=rexAudio;
          break;

          case "Herrerasaurus":
          dino=herrerasaurus;
          dinoAudio=rexAudio;
          break;


          case "Triceratops":

          dino=triceratops;
          dinoAudio=triceratopsAudio;
          break;
          

        }
        selectedDino=this;
        $('#attack').css("display","block");
        $(".dino-life",this).text("Dino's life " +dino.life);
        $(".hunter-life",hunterSelected).text("Distance to dino "+ distanceToHunter);
       
  }
  });



  $('#attack').on('click', function () {
   if (distanceToHunter>0 && isDinoSelected===true) 
        attackTheDino(dino);
        huntAudio.load();
        huntAudio.play();
  
  });

 distanceToHunter=200+Math.floor(Math.random() * 100);

  function attackTheDino(dino){
    $(".hunter-life",hunterSelected).text("Distance to dino "+ distanceToHunter);
    dinoStep = dino.speed+Math.floor(Math.random() * 30);
    penetrate = 60+Math.floor(Math.random() * 70);
    dino.life=dino.life-penetrate;
    $(".dino-life",selectedDino).text("Life remaining " +dino.life);
    dinoAudio.load();
    setTimeout(function() {
      dinoAudio.play();
    }, 1000);

    if (distanceToHunter>0){

    distanceToHunter = distanceToHunter-dinoStep;
    

    }
    if (distanceToHunter<=50){
      $(".hunter-life",hunterSelected).css("color","orange");
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
      $(".hunter-life",hunterSelected).css("color","white");
      $(".hunter-life",hunterSelected).text("KILLED");     
      $(".hunter-name",hunterSelected).css("background-color","red");
      $(".hunter-life",hunterSelected).css("background-color","red");
      killedHunter++;
    }

    if(killedHunter===1){
      $(".gameIsOverLose").css("display","block");
      $('#attack').text("PLAY");
      $('#attack').attr("class","reset");
      $('.reset').on('click', function () {
        console.log("do i get here");
        location.reload();
       
       });
    
    } 
    if(killedDinos===3){

      $(".gameIsOverWin").css("display","block");
      $('#attack').text("PLAY");
      $('#attack').attr("reset","reset");
      $('.reset').on('click', function () {
        console.log("do i get here");
        location.reload();
       
       });
    
    }
    
   
  }



  