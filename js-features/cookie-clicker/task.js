'use strict';

const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const speed = document.getElementById('speed');

cookie.onclick = function () {
    counter.innerText++;
    const num = counter.innerText;
    if (num % 2 === 0) {
        cookie.width /= 2;
    } else {
        cookie.width *= 2;
    }
    const curTime = Date.now();
    speed.textContent = (1 / ((curTime - lastTime) / 1000)).toFixed(2);
    lastTime = curTime;
};