const date =document.querySelector("#date");
const month =document.querySelector("#month");          
const year =document.querySelector("#year");
const day =document.querySelector("#day");

const today = new Date();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekdays[today.getDay()]; 
month.innerHTML = allMonths[today.getMonth()]; 
year.innerHTML = today.getFullYear(); // 1-31