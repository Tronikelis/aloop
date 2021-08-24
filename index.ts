export default function (
    start: number,
    stop: number,
    fn: (i: number) => void,
) {
    return new Promise<void>((resolve, reject) => {
        // try catch for safety
        try {
            // initiate the counter
            let count = start;
            const tick = () => {
                process.nextTick(() => {
                    // callback
                    fn(count);
                    count++;
                    // logic if we should continue
                    if (count < stop) tick();
                    else resolve();
                });
            };
            // start
            tick();
        } catch (err) {
            reject(err);
        };
    });
};
