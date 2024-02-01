var numberofbtn=document.querySelectorAll(".white-key").length;
// make a variable and use querySelectorAll to selecter all the class's and using length method to count number of keys/button//
for(var i=0; i<numberofbtn; i++){
document.querySelectorAll(".white-key")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML; //jo bhi keys/button ka tag kay content diya hai wo capture hoga//
                                         //innerHTML use to capture the content of the tags//

    makeSound(buttonInnerHTML);         // makeSound is function name for sound //
    buttonAnimation(buttonInnerHTML);    // buttonAnimation is function name for animation// 
});
}
document.addEventListener("keypress",function (event) {
    makeSound(event.key);
 
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var piano1=new Audio('music/a(mn).mp3');
            piano1.play();   //play is a method//
            break;
    
       case "b":
        var piano2=new Audio('music/c.mp3')
        piano2.play();
        break;

        case "c":
        var piano3=new Audio('music/d.mp3')
        piano3.play();
        break;

        case "d":
        var piano4=new Audio('music/e.mp3')
        piano4.play();
        break;

        case "e":
        var piano5=new Audio('music/e(mn).mp3')
        piano5.play();
        break;

        case "f":
        var piano6=new Audio('music/f.mp3')
        piano6.play();
        break;

        default:console.log(key);

        
    }
}

function buttonAnimation(currentKey) {
    var activebutton=document.querySelector(".white-key"+currentKey);

    activebutton.classList.add("btnpress");

    setTimeout(function(){
        activebutton.classList.remove(".white-key"); 
    },100);

}


