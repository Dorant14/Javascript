function printName(){
    console.log("ANdi");
    //Callback
    setTimeout(function() {console.log("Aniku")}, 3000);
    console.log("Olsa");
}

printName();