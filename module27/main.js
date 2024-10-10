console.log('digital school')

var a = 2
var r = 9
var d = 4
var e = 3

console.log( r < a && r > t )
console.log( r <= a && r > t )
console.log( r < a && r > t )
console.log( r < a && r > t )

var school = "Digital School"

console.log('My schools nname is ${school}')

console.log("My schools nname is" + school)


function showMessage() {
    alert("This message is inside a function");
}

showMessage();

function sum(number1, number2){   
    return number1 + number2
}

console.log(sum(25, 5));

function toCelcius(f){
    return(5/9) * (f - 32);
 }
 console.log("54 fahrenhite is equal to "+toCelcius(54)+" celsius")


var result = toCelcius(54);
console.log("54 fahrenhite is equal to "+result+" celsius")

var arrowFunction = () => alert("HEllo Wordl");
arrowFunction();

var arrowFunction = name => alert('Hello World ${name}');
arrowFunction("John Doe");

function dsFunction(){
    var localVar = "Digital School"
    alert(localVar);
}

// aletr(localVar)
function toSeconds(minutes){
    return minutes * 60;
}
console.log(toSeconds(60));

function triangelArea(baselenth, height){
    return 0.5 * baseLength * height
}
console.log(triangelArea(5, 7));

// Object

var car ={
    name: "Mercedes",
    color: "red" ,
    year: 2020,
    kilometers: 0,
    startEngline : function() {
        alert("Vroooom!!!!!!!")
    },
    get getkilometers() {
        return this.kilometers;
    },
    set setKilometers(km) {
        this.kilometers = km;
    }
};

console.log(cra.getkilometers);
car.setKilometers= 245;
console.log(car.getkilometers);

var school = {
    name: "Digital school",
    subject: "prograning",
    students: 1500,
    year: 2024
};

alert(car.name);
alert(car['color']);
car.startEngine ();

var computer = new Object();
computer.name = "lenovo";
computer.CPU = "Intel Core i7";
computer.RAM = "16Gb";
computer.Gpu = "GeForce GT730 2GB Dual Dp Hp";

computer.type = function() {
    return this.name + ", " + this.CPU + "," + this.RAM + ", " + this.GPU;
};

alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);

function Computer(name, CPU, RAM, GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("MacBook pro", "M1 8-core", "8GB", "5600M GPU");
var computer1 = new Computer("Acer", "Intel Core i3", "4GB", "Intergrated");


