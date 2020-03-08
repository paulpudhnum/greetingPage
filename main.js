// DOM Elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// Set AM or PM
  const amPM = hour >= 12 ? 'PM' : "AM";

// 12 Hour format
  hour = hour % 12 || 12;

// Output Time
time.innerHTML = `${hour}<span>:</span>${addZeros(min)}<span>:</span>${addZeros(sec)} ${showAmPm ? amPM : ''}`;

setTimeout(showTime, 1000);
}

// Add Time Zeros
function addZeros(n) {
  return(parseInt(n,10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if(hour<12) {
    // Morning
    document.body.style.background = "url('../img/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.background = "url('../img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    // Evening
    document.body.style.background = "url('../img/evening.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = '#333333';
  }

}

// Get Name
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if(e.type === 'keypress') {
    // Make sure enter is pressed
    if(e.which == 13 || e.keyCode ==13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setfocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setfocus);
focus.addEventListener('blur', setfocus)

// Run
showTime();
setBgGreet();focus
getName();
getFocus();


