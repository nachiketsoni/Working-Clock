var time= document.querySelector("#time");
function showTime(){
    var today = new Date()
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()


var AMPM;
if (hour < 12){
    AMPM = "AM"
}
else{
    AMPM = "PM"
}

hour = hour % 12 || 12;

time.innerHTML = `<h1 id="time" ><span>${addZero(hour)}</span> : <span>${addZero(min)}</span> : <span>${addZero(sec)}</span><span>${AMPM}</span></h1>`
 function addZero (n){
   return  (Math.floor(n, 10) <10 ? '0' : '') + n
    };
setTimeout(showTime, 1000);
}
showTime();

