import aloop from "./index";

console.log("Starting");

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

    // yarn run v1.22.11
    // $ ts-node test.ts
    // Starting
    // I got called first !!! 🤯
    // 1 finish 1499998500000
    // 2 finish 1499998500000
    // 3 finish 1499998500000
    // Done in 1.37s.

})();
