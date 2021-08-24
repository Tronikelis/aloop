export default function (
    start: number,
    stop: number,
    fn: (i: number) => void,
) {
    return new Promise<void>((resolve, reject) => {
        // some safety checks
        if (!Number.isInteger(start + stop)) {
            reject("Integers only!");
            return;
        };
        if (start > stop) {
            reject("Starting number must be bigger!");
            return;
        };

        // try catch for safety
        try {
            // initiate the counter
            let count = start;
            const tick = () => {
                setImmediate(() => {
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
