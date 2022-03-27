
function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var min  = date.getMinutes();
    var sec  = date.getSeconds();
    var section = "AM"

    if ( hour == 0 ) {
        hour = 12;
    }

    if ( hour > 12 ) {
        hour -= 12;
        section = "PM";
    }

    //variablename = (condition) ? value1:value2 

    hour = ( hour < 10 ) ? "0" + hour : hour;
    min  = ( min  < 10 ) ? "0" + min  : min;
    sec  = ( sec  < 10 ) ? "0" + sec  : sec;

    var time = hour + ":" + min + ":" + sec + " " + section;

    document.getElementById('myClock').innerText = time;

    document.getElementById('myClock').textContent = time;

    setTimeout(showTime, 1000);

}

showTime();