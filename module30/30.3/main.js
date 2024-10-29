var wakeuptime;
var dstime;
var sleeptime;
var noon =12;


function showCurrentTime(){

    var clock = document.getElementById('clock')
    var currenTime = new Date();

    var hours = currenTime.getHours();
    var minutes = currenTime.getMinutes();
    var seconds = currenTime.getSeconds();

    var meridian = "AM"

    if (hours >= noon){
        meridian = "PM";
    }

    var clockTime = hours + ":" + minutes + seconds + " " + meridian;
    clock.innerText =clockTime;

}

setInterval(showCurrentTime, 1000);

function changeImage(){

    var time = new Date().getHours();

    var image = "ds_clock.png";
    var imageHTML = document.getElementById('timeImage');
    if(time == wakeuptime){
        image = "morning.gif";
    }
    else if(time == wakeuptime){
        image = "class.gif";
    }

    else if(time == wakeuptime){
        image = "night.gif";
    }

    imageHTML.scr = image;

}

function updateClock(){

    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

    wakeuptime = wakeUpTimeSelector.vakue;

    var dsTimeSelector = document.getElementById('wakeUpTimeSelector');

    dstime = dsTimeSelector.vakue
    ;
    var sleepUpTimeSelector = document.getElementById('wakeUpTimeSelector');

    wakeuptime = sleepUpTimeSelector
    .vakue;

}

var saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', updateClock);