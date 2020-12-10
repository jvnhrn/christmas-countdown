function realTimeCountdown() {

    // Set up Variables 
    var today = new Date();
    var newToday = today.toDateString();
    var christmas = new Date(2020,11,24);
    // var christmasEve = christmas.toDateString();

    console.log(today);
    console.log(christmas);

    var diff = (today.getDate() - christmas.getDate()) * (-1);

    console.log(diff);


    //display the clock 
    document.getElementById('clock').innerHTML = diff + " Days";
    document.getElementById('today').innerHTML = "TODAY: " + newToday;
    // document.getElementById('christmas').innerHTML = "CHRITSMAS EVE: " + christmasEve;
    var t = setTimeout(realTimeCountdown, 500);

}