// Basic Service Worker to enable PWA installation
self.addEventListener('fetch', (event) => {
    // Standard fetch event listener
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('Network error occurred');
        })
    );
});
