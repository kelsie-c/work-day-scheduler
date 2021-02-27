// Variables
var currentDay = $('#currentDay');
var currentHour;
var workItems = [];
var allHours = $('.time-block');
console.log(allHours);
var targetDiv;

// Sets current day on page
currentDay.text(moment().format('[Today is] MMMM Do, YYYY'));
currentHour = moment().format('H');

setBkgrndColor();

// Checks current day and hour and updates textarea background colors once a minute
setInterval(function() {
    currentDay.text(moment().format('[Today is] MMMM Do, YYYY'));
    currentHour = moment().format('H');

    // update colors on page
    setBkgrndColor();
    
}, 60000);

// Set background colors based on time
function setBkgrndColor() {
    for (i = 0; i < allHours.length; i++) {
        
        var currentDiv = allHours[i].getAttribute("data-block");
        targetDiv = $(allHours[i]);

        console.log(currentDiv);
        console.log(targetDiv);

        // past
        if (currentDiv < currentHour) {
            // target each div and change classes
            targetDiv.children().eq(1).children().eq(0).addClass("past").removeClass("present future");
        }
        // present
        if (currentDiv == currentHour) {
            // target each div and change classes
            targetDiv.children().eq(1).children().eq(0).addClass("present").removeClass("past future");
        }
        // future
        if (currentDiv > currentHour) {
            // target each div and change classes
            targetDiv.children().eq(1).children().eq(0).addClass("future").removeClass("past present");
        }
    }
}