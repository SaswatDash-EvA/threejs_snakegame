export let movement = true;
function stopSnake() { movement = false; }

export function gameOver() {
    stopSnake();
}