//set the title page to current day

var CurrentDate = moment().format('DD MMMM YYYY');
$("#currentDay").text(CurrentDate);

console.log(CurrentDate)

var time = moment().format('h')
console.log (time);

var timeblocks = $('.hour')
var Userinput = $('#textarea').text('textarea.innerText')
console.log(Userinput)
for (var item of timeblocks) 


    var hourEl = (item.innerText)
    var number = parseInt(hourEl, Number)
console.log(number)
    if (number === time) 
    {
        $('textarea').addClass('present')}

   if (number > time)
        {$('textarea').addClass('past')}
        
    if (number < time) {
         $('textarea').addClass('future')}

$('#saveBtn').click(function(){localStorage.getItem('text', Userinput)})
// var EachHour = parseInt("", Number)
//     //  This is why you run your condition
//     // ParseInt() - converts a string to a number
//     // item.attr('class', 'future')
// }

// console.log(EachHour)
// // while (hourEl < 18
// // if ($("#hour") === time);
// // )
// // time.add(1, 'hours');

// // while (time.hour()<18) {

// //     time.add(1, 'hours');}

// //  $('#container').text(time.format('ddd Do hh:mm a'))


// // create an event template that has three rows and eight columns
// // assign time to the first row
// //assign text area to the second row
// //assign save button to the third row
// localStorage.getItem("")