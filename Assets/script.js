var currentDay = $('#currentDay');

setInterval(function() {
    currentDay.text(moment().format('[Today is] MMMM Do, YYYY hh:mm:ss'));

}, 1000);