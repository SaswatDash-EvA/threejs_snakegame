import { gameOver } from "./ui-update";

export const GRID_SIZE = 16;
export const CELL_SIZE = 1.6 / GRID_SIZE;
export const HALF_BOARD = 0.8;

export let snakeBodyArray = [
    [8, 8],
    [8, 9],
    [8, 10]
];

export let fruitPosition = [5, 5];

let score = 0;

export let currentDirection = [0, -1];
let nextDirection = [0, -1];

export function setNextDirection(dir) {
    nextDirection = dir;
}

function spawnFruit() {
    fruitPosition = [
        Math.floor(Math.random() * GRID_SIZE),
        Math.floor(Math.random() * GRID_SIZE)
    ];
}

export function updateSnake() {
    currentDirection[0] = nextDirection[0];
    currentDirection[1] = nextDirection[1];

    const newHead = [
        snakeBodyArray[0][0] + currentDirection[0],
        snakeBodyArray[0][1] + currentDirection[1]
    ];

    snakeBodyArray.unshift(newHead);
    snakeBodyArray.pop();
}

export function checkCollision() {
    const head = snakeBodyArray[0];

    if (
        head[0] < 0 || head[0] >= GRID_SIZE ||
        head[1] < 0 || head[1] >= GRID_SIZE
    ) {
        gameOver();
    }

    for (let i = 1; i < snakeBodyArray.length; i++) {
        if (
            head[0] === snakeBodyArray[i][0] &&
            head[1] === snakeBodyArray[i][1]
        ) {
            gameOver();
        }
    }
}

export function checkFruitCollision() {
    const head = snakeBodyArray[0];

    if (
        head[0] === fruitPosition[0] &&
        head[1] === fruitPosition[1]
    ) {
        score++;
        snakeBodyArray.push([...snakeBodyArray[snakeBodyArray.length - 1]]);
        spawnFruit();
    }
}