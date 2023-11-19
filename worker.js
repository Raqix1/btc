// worker.js
onmessage = function(e) {
    console.log('Worker: Message received from main script');
    let value = e.data;
    let counter = 0;
    while (true) {
        counter += Math.sqrt(value); // Heavy computation
        if (counter > 1000000000) {
            counter = 0; // Reset counter to avoid overflow
        }
    }
}
