# A(sync)loop, Tiny, async looping in javascript

## Motivation
Have you ever written a back/front end function that needs to iterate over a large array, but you don't want to block the event loop?

Now you can:

## How to use

```ts
import aloop from "aloop";

async function foo() {
    // returns a Promise
    await aloop(
        // starting number
        0,
        // when to end, number,
        1000,
        // callback for each iteration with the count as param
        i => console.log(i)
    );

    // e.g loop a 1000 times 
    // and console log the current count
    aloop(0, 1000, (i) => {
        console.log(i);
    });
};
```

## Tests

```ts
(async () => {
    const million = 1000000;

    let count = 0;

    // we can use await here also !
    const first = aloop(0, million, i => {
        count += i;
    }).then(() => console.log("1 finish"));

    const second = aloop(0, million, i => {
        count += i;
    }).then(() => console.log("2 finish"));

    const third = aloop(0, million, i => {
        count += i;
    }).then(() => console.log("3 finish"));

    Promise.allSettled([first, second, third]).then(() => {
        console.log("We're finished", count);
    });

    console.log("I got called first !!! 🤯");

    // /$ ts-node test.ts
    // Starting
    // I got called first !!! 🤯
    // 1 finish
    // 2 finish
    // 3 finish
    // We're finished 1499998500000

})();
```