'use strict';

const wait = ms => new Promise((r, j) => setTimeout(r, ms));
const waitUntil = (condition, timeout, ms) => {
    const DEFAULT_INTERVAL = 50;
    const DEFAULT_TIMEOUT = 1000;
    new Promise((resolve, reject) => {
        const timeoutTimer = setTimeout(() => {
            reject(new Error('waitUntil timeout. Condition does not happened.'));
        }, timeout || DEFAULT_TIMEOUT);

        const timer = setInterval(() => {
            if (condition()) {
                clearTimeout(timeoutTimer);
                clearInterval(timer);
                resolve();
            }
        }, ms || DEFAULT_INTERVAL);
    });
};


module.exports = {
    wait,
    waitUntil
};