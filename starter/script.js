//set the title page to current day

var CurrentDate =  moment().format('DD MMMM YYYY');
$("#currentDay").text(CurrentDate);

var time = moment('09', 'HH');

time.add(1, 'hours');

while (time.hour()<18) {
    console.log(time.format('ddd Do hh:mm a'));

    time.add(1, 'hours');}

// create an event template that has three rows and eight columns
// assign time to the first row
//assign text area to the second row
//assign save button to the third row