
const num1 = Number(prompt("Your chosen number is:"));
const numberTitle = document.getElementById('number-title');
const text = document.getElementById('details');

numberTitle.innerHTML = num1;

text.innerHTML += `Square root:<strong> ${Math.sqrt(num1)} </strong></br>`;
text.innerHTML += `<strong>${num1}</strong> is an integer? <strong>${Number.isInteger(num1)}</strong></br>`;
text.innerHTML += `Is NaN <strong>${Number.isNaN(num1)}</strong></br>`;
text.innerHTML += `Rounded down <strong>${Math.floor(num1)}</strong></br>`;
text.innerHTML += `Rounded up <strong>${Math.ceil(num1)}</strong></br>`;

text.innerHTML += `With two decimal places <strong>${aux1.toFixed(2)}</strong>`;
