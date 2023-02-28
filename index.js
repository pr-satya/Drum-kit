var numOfDrumButton=document.querySelectorAll(".drum").length;
   prompt("Holi kab hai🪣! kab hai Holi?");
   alert("Hoorah🥳🥳\nNow You Can Use Drum Kit🫡");
for(var i=0;i<numOfDrumButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

       this.style.color="red";

        var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);

  });

}

document.addEventListener("keypress",function(event){
      makesound(event.key);
});


function makesound(key){

     switch (key) {
       case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
       break;
       case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
       break;
       case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
       break;
       case "d":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
       break;
       case "j":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
       break;
       case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
       break;
       case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
       break;

       default:console.log(buttonInnerHtml);

     }
}
