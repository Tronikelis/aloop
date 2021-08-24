import aloop from "..";

declare module aloop {
    function aloop(
        start: number,
        stop: number,
        fn: (i: number) => void
    );
    export default aloop;
};