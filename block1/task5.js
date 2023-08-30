function throttle(func, interval) {
    let lastExecutionTime = 0;
    let timeout;

    return function (...args) {
        const context = this;
        const currentTime = Date.now();

        if (currentTime - lastExecutionTime >= interval) {
            func.apply(context, args);
            lastExecutionTime = currentTime;
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
                lastExecutionTime = Date.now();
            }, interval - (currentTime - lastExecutionTime));
        }
    };
}

function onScroll(event) {
    // Handle scroll event
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

onScroll("no throttle");
onScroll("no throttle");
onScroll("no throttle");
onScroll("no throttle");
onScroll("no throttle");
throttledScrollHandler("throttle");
timer = setTimeout(() => {
    throttledScrollHandler("test1")}, 300);
timer = setTimeout(() => {
    throttledScrollHandler("test2")}, 300);
timer = setTimeout(() => {
    throttledScrollHandler("test3")}, 300);
timer = setTimeout(() => {
    throttledScrollHandler("test4")}, 300);
// window.addEventListener("scroll", throttledScrollHandler);
