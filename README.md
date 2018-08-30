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

The ```waitUntil``` function receive:
  - condition: a function to test a condition
  - timeout (optional): The maximun amount of time (in miliseconds) to wait for condition be true
  - interval (optional): The interval (in miliseconds) between checks of condition

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
