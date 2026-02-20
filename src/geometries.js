import * as THREE from 'three';

// Plane where the snake will move on top of
export const planeGeometry = new THREE.PlaneGeometry(1.6, 1.6, 16, 16);
planeGeometry.rotateX(-Math.PI/2);

// Boundary Fences
export const boundaryFenceGeometrylr = new THREE.BoxGeometry(0.025, 0.025, 1.65);
export const boundaryFenceGeometryfb = new THREE.BoxGeometry(1.6, 0.025, 0.025);

// Snake geometry
export const snakeHeadGeometry = new THREE.CapsuleGeometry(0.05, 0.08, 32, 64);
snakeHeadGeometry.rotateX(Math.PI/2);
snakeHeadGeometry.translate(0, 0.05, 0);