var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


var today = new Date();
var hrs = today.getHours();
var dayOfWeek = weekday[today.getDay()];
var date = dayOfWeek+" " + today.getDate() + "/" +(today.getMonth()+1) +'/'+today.getFullYear()  ;

var greet;

if (hrs < 12)
    greet = 'GOOD  ';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon ';
else if (hrs >= 17 && hrs <= 24)
    greet = 'GOOD  ';

document.getElementById('lbl').innerHTML =
    greet+=`<div id="date"> It's ${date}</div>`;