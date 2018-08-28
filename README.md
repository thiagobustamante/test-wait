# Test Wait

This is a simple library to help tests. 

## Installing

```
npm i -D test-wait;
```

## Usage:

### wait

The wait function receive the amount of miliseconds to wait:

```javascript
async function myFunction() {
    await wait(100);
    // do anything after 100 miliseconds
}
```

### wait until

The ```waitUntil``` function receive on function to test a condition and, optionaly, a timeout and interval amounts.

```javascript
async function myFunction() {
    let counter = 0;
    setInterval(() => counter++, 10);
    
    await waitUntil(() => counter === 10);
    // wait until counter === 10.
}
```

By default, ```waitUntil``` will check the ```condition``` function every 50 ms and will reject 
its promise, raising an Error, after one second.

But it is possible to inform the timeout and check interval:

```javascript
async function myFunction() {
    let counter = 0;
    setInterval(() => counter++, 10);
    const timeout = 10000; // 10 seconds
    const interval = 10; // Check every 10 miliseconds

    await waitUntil(() => counter === 10, timeout, interval);
    // wait until counter === 10.
}
```
