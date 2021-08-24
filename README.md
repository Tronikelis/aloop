# Aloop

## Finally, tiny & async for looping in js

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