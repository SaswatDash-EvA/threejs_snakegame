import { gameOver } from "./ui-update";

let snakeBodyArray = [[8, 8], [8, 9], [8, 10]];
let fruitPosition = [9, 12];
let score = 0;
export let currentDirection = [0, 1];
export let nextDirection = [0, 1];

function spawnFruit() {

}

export function updateSnakePositions() {
    for (let i = 1; i < snakeBodyArray.length; i++) {
        snakeBodyArray[i][0] = snakeBodyArray[i-1][0];
        snakeBodyArray[i][1] = snakeBodyArray[i-1][1];
    }
    if (nextDirection[0] === 0) snakeBodyArray[0][0] += nextDirection[0];
    else snakeBodyArray[0][1] += nextDirection[1];
}

export function checkCollision() {
    if (snakeBodyArray[0][0] > 15 || snakeBodyArray[0][0] < 0 || snakeBodyArray[0][1] > 15 || snakeBodyArray[0][1] < 0) {
        gameOver();
    }
    else {
        snakeBodyArray.forEach(bodyPart => {
            if (snakeBodyArray[0][0] === bodyPart[0] && snakeBodyArray[0][1] === bodyPart[1])
                gameOver();
        });
    }
}

export function checkFruitCollision() {
    if (snakeBodyArray[0][0] === fruitPosition[0] || snakeBodyArray[0][1] === fruitPosition[1]) {
        score++;
        spawnFruit();
    }
}


export const GRID_SIZE = 16
let TICK_RATE = 10;
let TICK_INTERVAL = 1 / TICK_RATE;