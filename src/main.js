import * as THREE from 'three';
import { plane, boundaryLeft, boundaryRight, boundaryBack, boundaryFront, snakeHead, snakeBody, snakeTail } from './meshes';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { currentDirection } from './coreLogic';

const scene = new THREE.Scene();
scene.background = new THREE.Color("#333");
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.1, 1.3);
camera.lookAt(0, 0, 0.23);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

scene.add(plane, boundaryLeft, boundaryRight, boundaryFront, boundaryBack);
scene.add(snakeHead, snakeBody, snakeTail);

function animate() {
    renderer.render(scene, camera);
}

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("keydown", (e) => {
	if (e.key === "ArrowUp")    if (currentDirection[1] != -1) nextDirection = [0, 1];
	if (e.key === "ArrowDown")  if (currentDirection[1] != 1) nextDirection = [0, -1];
	if (e.key === "ArrowLeft")  if (currentDirection[0] != 1) nextDirection = [-1, 0];
	if (e.key === "ArrowRight") if (currentDirection[0] != -1) nextDirection = [1, 0];
});