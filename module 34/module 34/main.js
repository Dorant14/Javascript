function printName(){
    console.log("ANdi");
    //Callback
    setTimeout(function() {console.log("Aniku")}, 3000);
    console.log("Olsa");
}

var colors = ["blue", "red", "green", "purple"];

function changeBgColor(){
    document.querySelector('body').style.background =  colot[Math.floor(Math.random()*coolors.length)];
}

var names = ["Dorant", "Olsa", "Daris", "Anik", "Eden", "Shpat", "Blin"]

function changeName(){
    document.querySelector('p').innerHTML = names[Math.round(Math.random() * (names.length-1))];
}

setIntervalt(changeBgColor, 500);
setIntervalt(changeName, 500);