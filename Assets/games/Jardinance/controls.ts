export const Move = {
    x: 0,
    y: 0,
}

// handle movement 
window.addEventListener('keydown', (e) => {
    e.preventDefault()
    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            Move.y = 1
            break
        case 'a':
        case 'ArrowLeft':
            Move.x = 1
            break
        case 's':
        case 'ArrowDown':
            Move.y = -1
            break
        case 'd':
        case 'ArrowRight':
            Move.x = -1
            break
        default:
            console.log(e.key)
    }
})

window.addEventListener('keyup', (e) => {
    e.preventDefault()

    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            Move.y = 0
            break
        case 'a':
        case 'ArrowLeft':
            Move.x = 0
            break
        case 's':
        case 'ArrowDown':
            Move.y = 0
            break
        case 'd':
        case 'ArrowRight':
            Move.x = 0
            break
        default:
            console.log(e.key)
    }
})

// touch input testing

const swipeArea = document.getElementById('main')!;

let touchStartX = 0;
let touchEndX = 0;

swipeArea.addEventListener('touchstart', handleTouchStart, false);
swipeArea.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event: TouchEvent) {
    touchEndX = event.touches[0].clientX;
}

swipeArea.addEventListener('touchend', handleSwipe, false);

function handleSwipe(event: TouchEvent) {
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 10) {
        // 'Swiped right'
        Move.x = 1
    } else if (deltaX < -10) {
        // 'Swiped left'
        Move.x = -1
    } else {
        Move.x = 0
    }
}