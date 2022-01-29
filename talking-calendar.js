const talkingCalendar = function(date) {
  let day = date[8] + date[9];
  day = day.replace('0', '');
  let month = date[5] + date[6];
  let year = date[0] + date[1] + date[2] + date[3];
  return numToMonth(month) + " " + day + daySuffix(day) + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

function daySuffix(day) {
  if (day === '1' || day === '21' || day === '31') {
    return 'st';
  } else if (day === '2' || day === '22') {
    return 'nd';
  } else if (day === '3' || day === '23') {
    return 'rd';
  } else {
    return 'th';
  }
}

function numToMonth(num) {
  switch(num) {
    case '01':
      return 'January';
    case '02':
      return 'Febuary';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
  }
}