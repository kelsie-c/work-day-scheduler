# Work Day Scheduler

In this project, I was tasked with creating a workday scheduler that followed certain parameters. It must:

- Show the current date and time at the top of the calendar using moment.js
- Use time blocks to show the business hours
- Color-code each time block to show if it is in the past, present, or future
- Have a user input field in each time block
- Save the user input into local storage
- Keep the user input on the page after a refresh

The colors and overall wireframe layout were provided. The javascript and HTML for the timeblocks is my work.

See the deployed project [here](https://kelsie-c.github.io/work-day-scheduler/)

## Skills Used

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap
- Moment.js
- Font Awesome Icons
- Google Fonts

## Preview the App

[A user demonstrates the app functionality](./Assets/Images/Work-Day-Scheduler.gif)

## Final Thoughts

This project consisted of 3 main pieces: 

1. Finding the best Bootstrap elements to use to meet the UI requirements
2. Using JavaScript and Moment.js together to initiate and maintain the functionality of the scheduler
3. Storing and Retreiving user input to and from local storage

The biggest challenge for me was the third piece - working with local storage to make the user input appear. While the application functions exactly as it should, I think the route I took to get there can probably be simplified. This requires further study in order to correct. 

To take this project a step further, I could implement a datepicker and store user input across days/weeks/months/years.