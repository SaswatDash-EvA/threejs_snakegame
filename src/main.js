import * as THREE from 'three';
import { plane, boundaryLeft, boundaryRight, boundaryFront, boundaryBack, snakeHead } from './meshes';

import { snakeBodyArray, updateSnake, checkCollision, checkFruitCollision, currentDirection, setNextDirection, CELL_SIZE, HALF_BOARD } from './coreLogic';

let snakeMeshes = [];

const scene = new THREE.Scene();
scene.background = new THREE.Color("#333");

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 1.35, 0.8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

scene.add(
    plane,
    boundaryLeft,
    boundaryRight,
    boundaryFront,
    boundaryBack,
);

const clock = new THREE.Clock();
let accumulator = 0;
const TICK_RATE = 8;
const TICK_INTERVAL = 1 / TICK_RATE;

function gridToWorld(x, z) {
    return {
        x: -HALF_BOARD + (x * CELL_SIZE) + CELL_SIZE / 2,
        z: -HALF_BOARD + (z * CELL_SIZE) + CELL_SIZE / 2
    };
}

function syncSnakeMeshes() {
    while (snakeMeshes.length < snakeBodyArray.length) {
        const segment = snakeHead.clone();
        scene.add(segment);
        snakeMeshes.push(segment);
    }

    while (snakeMeshes.length > snakeBodyArray.length) {
        const removed = snakeMeshes.pop();
        scene.remove(removed);
    }

    for (let i = 0; i < snakeBodyArray.length; i++) {
        const pos = gridToWorld(
            snakeBodyArray[i][0],
            snakeBodyArray[i][1]
        );

        snakeMeshes[i].position.set(pos.x, 0, pos.z);
    }
}

function animate() {
    const delta = clock.getDelta();
    accumulator += delta;

    while (accumulator >= TICK_INTERVAL) {
        updateSnake();
        checkCollision();
        checkFruitCollision();
        accumulator -= TICK_INTERVAL;
    }

    syncSnakeMeshes();
    renderer.render(scene, camera);
}

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && currentDirection[1] !== -1) {
        setNextDirection([0, -1]);
    }
    else if (e.key === "ArrowDown" && currentDirection[1] !== 1) {
        setNextDirection([0, 1]);
    }
    else if (e.key === "ArrowLeft" && currentDirection[0] !== 1) {
        setNextDirection([-1, 0]);
    }
    else if (e.key === "ArrowRight" && currentDirection[0] !== -1) {
        setNextDirection([1, 0]);
    }
});

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});