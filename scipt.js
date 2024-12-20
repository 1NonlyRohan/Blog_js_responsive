// Time setting...
var blogPostDate1 = "2024-11-30T20:30:00";
var blogPostDate2 = "2024-11-30T23:00:00";
var blogPostDate3 = "2024-11-30T23:30:00";
// Using DOM using different id's...
document.getElementById('time-ago').innerText = moment(blogPostDate1).fromNow();
document.getElementById('time-ago-2').innerText = moment(blogPostDate2).fromNow();
document.getElementById('time-ago-3').innerText = moment(blogPostDate3).fromNow();

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
