// Variables
var currentDay = $('#currentDay');
var currentHour;
var workItems = [];
var allHours = $('.time-block');
var clearBtn = $('.clearMyDay');
var targetDiv;
var storageDiv;

// Sets current day on page
currentDay.text(moment().format('[Today is] MMMM Do, YYYY'));
currentHour = moment().format('H');

setBkgrndColor();

// Clears Schedule
function clearStorage() {
    localStorage.clear();
    loadSchedule();
}

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
        // grabs data attribute and assigns to a local variable
        var currentDiv = allHours[i].getAttribute("data-block");
        targetDiv = $(allHours[i]);

        // console.log(currentDiv);
        // console.log(targetDiv);

        // past
        if (currentDiv < currentHour) {
            // target each div and change classes
            targetDiv.find("textarea").addClass("past").removeClass("present future");
        }
        // present
        if (currentDiv == currentHour) {
            // target each div and change classes
            targetDiv.find("textarea").addClass("present").removeClass("past future");
        }
        // future
        if (currentDiv > currentHour) {
            // target each div and change classes
            targetDiv.find("textarea").addClass("future").removeClass("past present");
        }
    }
}

// This function is called when any save button is clicked
$(".saveBtn").on("click", function(event) {
    // local variable grabs the user input as a string and logs it to the console
    var hourDiv = event.target.parentElement.children[0].value;
    console.log(hourDiv);
    // sends user input data to local storage with the data attribute as the key
    localStorage.setItem(event.target.parentElement.parentElement.getAttribute("data-block"), hourDiv);
});

// This function sets up the pulls from local storage to be displayed on load
function loadSchedule() {
    for (i = 0; i < allHours.length; i++) {
        // grabs data attribute and assigns to a local variable
        var currentDiv = allHours[i].getAttribute("data-block");
        storageDiv = $(allHours[i]);
        // pulls value from local storage depending on data attribute
        if (currentDiv === "09") {
            var currentTask = localStorage.getItem("09");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
        if (currentDiv === "10") {
            var currentTask = localStorage.getItem("10");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
        if (currentDiv === "11") {
            var currentTask = localStorage.getItem("11");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
        if (currentDiv === "12") {
            var currentTask = localStorage.getItem("12");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
        if (currentDiv === "13") {
            var currentTask = localStorage.getItem("13");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
        if (currentDiv === "14") {
            var currentTask = localStorage.getItem("14");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
        if (currentDiv === "15") {
            var currentTask = localStorage.getItem("15");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
        if (currentDiv === "16") {
            var currentTask = localStorage.getItem("16");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
        if (currentDiv === "17") {
            var currentTask = localStorage.getItem("17");
            console.log(currentTask);
            
            storageDiv.find("textarea").val(currentTask);
        }
    }
}

// Load local storage on load
loadSchedule();