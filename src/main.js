import * as THREE from 'three';
import { plane, boundaryLeft, boundaryRight, boundaryBack, boundaryFront } from './meshes';
// import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color("#333");
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.1, 1.3);
camera.lookAt(0, 0, 0.23);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

scene.add(plane, boundaryLeft, boundaryRight, boundaryFront, boundaryBack);

function animate() {
    renderer.render(scene, camera);
}

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
