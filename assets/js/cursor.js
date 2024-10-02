document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.createElement('div');
    cursor.classList.add('circle-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.backgroundColor = 'rgba(100, 100, 100, 0.8)';
            cursor.style.width = '30px'; // 50% bigger
            cursor.style.height = '30px'; // 50% bigger
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.backgroundColor = 'rgba(200, 200, 200, 0.8)';
            cursor.style.width = '20px'; // Original size
            cursor.style.height = '20px'; // Original size
        });
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Apply both translate and scale
    });

    document.addEventListener('mouseup', (e) => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'; // Reset to default size

        const ring = document.createElement('div');
        ring.classList.add('ring');

        // Calculate the ring's position relative to the cursor
        const cursorRect = cursor.getBoundingClientRect();
        ring.style.left = cursorRect.left + 'px';
        ring.style.top  = cursorRect.top + 'px';
        ring.style.borderColor = cursor.style.backgroundColor;

        document.body.appendChild(ring);

        ring.addEventListener('animationend', () => {
            ring.remove(); // Remove the ring after the animation ends
        });
    });
});