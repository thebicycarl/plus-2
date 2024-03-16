const day = document.getElementById('day');
const theDate = document.getElementById('date');
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const currentDate = new Date();

let dateNumber = currentDate.getDate();
let dateDay = days[currentDate.getDay() - 1];
let dateMonth = months[currentDate.getMonth() - 1];

day.innerText = dateDay;
theDate.innerText = `${dateNumber} ${dateMonth}`;

//Display weekly, monthly stats, and a graph above the calendar?