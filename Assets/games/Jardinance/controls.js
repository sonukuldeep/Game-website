export const Move = {
    x: 0,
    y: 0,
};
window.addEventListener('keydown', (e) => {
    e.preventDefault();
    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            Move.y = 1;
            break;
        case 'a':
        case 'ArrowLeft':
            Move.x = 1;
            break;
        case 's':
        case 'ArrowDown':
            Move.y = -1;
            break;
        case 'd':
        case 'ArrowRight':
            Move.x = -1;
            break;
        default:
            console.log(e.key);
    }
});
window.addEventListener('keyup', (e) => {
    e.preventDefault();
    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            Move.y = 0;
            break;
        case 'a':
        case 'ArrowLeft':
            Move.x = 0;
            break;
        case 's':
        case 'ArrowDown':
            Move.y = 0;
            break;
        case 'd':
        case 'ArrowRight':
            Move.x = 0;
            break;
        default:
            console.log(e.key);
    }
});
const swipeArea = document.querySelector('main');
let touchStartX = 0;
let touchEndX = 0;
swipeArea.addEventListener('touchstart', handleTouchStart, false);
swipeArea.addEventListener('touchmove', handleTouchMove, false);
function handleTouchStart(event) {
    event.preventDefault();
    touchStartX = event.touches[0].clientX;
}
function handleTouchMove(event) {
    event.preventDefault();
    touchEndX = event.touches[0].clientX;
}
swipeArea.addEventListener('touchend', handleSwipe, false);
function handleSwipe(event) {
    event.preventDefault();
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 10) {
        Move.x = 1;
    }
    else if (deltaX < -10) {
        Move.x = -1;
    }
    else {
        Move.x = 0;
    }
}
