function timer() {
    var clock = document.getElementById('clock');
    var time = document.getElementById('time');
    var date = document.getElementById('date');

    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var abc = new Date();

    time.textContent = padding(abc.getHours(), 2) + ':' + padding(abc.getMinutes(), 2) + ':' + padding(abc.getSeconds(), 2);
    date.textContent = padding(abc.getFullYear(), 4) + '-' + padding(abc.getMonth() + 1, 2) + '-' + padding(abc.getDate(), 2) + ' ' + week[abc.getDay()];
}

function padding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

setInterval(timer, 1000);
timer();

