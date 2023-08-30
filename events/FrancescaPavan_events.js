class AsyncOperationManager {
    constructor() {
        this.queue = [];
    }

    simulateAsyncOperation(delay) {
        setTimeout(() => {
            console.log(`Async operation completed after ${delay}ms`);
        }, delay);
    }

    scheduleMicrotask() {
        process.nextTick(() => {
            console.log('Microtask executed');
        });
    }

    scheduleImmediate() {
        setImmediate(() => {
            console.log('Immediate task executed');
        });
    }
}

// Create an instance of AsyncOperationManager
const asyncManager = new AsyncOperationManager();

// Simulate asynchronous operations with different delay times
asyncManager.simulateAsyncOperation(100);
asyncManager.scheduleMicrotask(); // Schedule microtask after the first async operation
asyncManager.simulateAsyncOperation(0);
asyncManager.scheduleMicrotask(); // Schedule microtask after the second async operation
asyncManager.simulateAsyncOperation(50);
asyncManager.scheduleMicrotask(); // Schedule microtask after the third async operation

// Schedule an immediate task
asyncManager.scheduleImmediate();

// Output an initial message
console.log('Starting the event loop');

// Expected Execution Flow:
// 1. Initial message is logged.
// 2. First async operation with delay 100ms is scheduled.
// 3. Microtask is scheduled after the first async operation.
// 4. Second async operation with delay 0ms is scheduled.
// 5. Microtask is scheduled after the second async operation.
// 6. Third async operation with delay 50ms is scheduled.
// 7. Microtask is scheduled after the third async operation.
// 8. Event loop begins executing scheduled tasks.
// 9. First async operation completes (delay 100ms).
// 10. Microtask after the first async operation executes.
// 11. Second async operation completes (delay 0ms).
// 12. Microtask after the second async operation executes.
// 13. Third async operation completes (delay 50ms).
// 14. Microtask after the third async operation executes.
// 15. Immediate task is scheduled.
// 16. Immediate task executes.
