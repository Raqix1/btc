// WebWorker.js

self.onmessage = function() {
    // Periodically enforce the backfaceVisibility style
    setInterval(() => {
        const elements = self.document.querySelectorAll('.element');
        elements.forEach(el => {
            el.style.backfaceVisibility = 'hidden';
        });
    }, 4000); // every 10 seconds
}
