// moment.js
var AbhiKaTime = moment().format('MMMM Do, YYYY, h:mm:ss a');
document.getElementById('current-date').textContent = AbhiKaTime;
document.getElementById('current-date-2').textContent = AbhiKaTime;
document.getElementById('current-date-3').textContent = AbhiKaTime;

// Update every seconds....
setInterval(function () {
    AbhiKaTime = moment().format('MMMM Do, YYYY, h:mm:ss a');
    document.getElementById('current-date').textContent = AbhiKaTime;
    document.getElementById('current-date-2').textContent = AbhiKaTime;
    document.getElementById('current-date-3').textContent = AbhiKaTime;
}, 1000);

// Type.js
var typed = new Typed('#container-h1', {
    strings: ['My Blog'],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
});

var typed = new Typed('#footer', {
    strings: ['© 2024 My Blog. All rights reserved.'],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
});
