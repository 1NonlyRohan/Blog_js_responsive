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