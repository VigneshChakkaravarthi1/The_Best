
for( i =0; i<document.querySelectorAll(".drum").length; i++)
{
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{
    var button= this.innerHTML;
    playSound(button);
    buttonAnimation(button);
   

});
}
document.addEventListener("keypress",function(event){
playSound(event.key);
buttonAnimation(event.key);
})

function playSound(key)
{
    switch (key) 
    {
        case "Y":
            var audio=new Audio("YImportant.mp3");
            audio.play();
            break;
        case "O":
            var audio=new Audio("Oh.mp3");
            audio.play();
    
            break;
        case "H":
            var audio=new Audio("h.mp3");
            audio.play();
            
            break;
             
        case "N":
            var audio=new Audio("Never.mp3");
            audio.play();
            
            break;
        case "A":
            var audio=new Audio("Arent.mp3");
            audio.play();
            
            break;
           
        default:
    
            break;
    }
    
}
function buttonAnimation(button)
{
    var activeButton=document.querySelector("."+button);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {activeButton.classList.remove("pressed");

    },100);
}