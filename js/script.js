function realTimeCountdown() {

    // Set up Variables 
    var today = new Date();
    var newToday = today.toDateString();
    var christmas = new Date();
   
    christmas.setDate(24);
    christmas.setMonth(11);

    // var christmasEve = christmas.toDateString();

    console.log(today);
    console.log(christmas);
    //(1,2,3,..., 31)
    // var Difference_In_Time = date2.getTime() - date1.getTime();  
    var diff = (christmas.getTime() - today.getTime());

    if (diff < 0){
        christmas.setFullYear(christmas.getFullYear() + 1);
        diff = (christmas.getTime() - today.getTime()); 
    }

    var diffInDays = parseInt(diff / (1000 * 3600 * 24));


    //display the clock 
    document.getElementById('clock').innerHTML = diffInDays + " Days";
    document.getElementById('today').innerHTML = "TODAY: " + newToday;
    // document.getElementById('christmas').innerHTML = "CHRITSMAS EVE: " + christmasEve;
    var t = setTimeout(realTimeCountdown, 500);

}