import * as THREE from 'three';

// Plane where the snake will move on top of
export const planeGeometry = new THREE.PlaneGeometry(1.6, 1.6, 64, 64);
planeGeometry.rotateX(-Math.PI/2);

export const boundaryFenceGeometrylr = new THREE.BoxGeometry(0.025, 0.025, 1.65);
export const boundaryFenceGeometryfb = new THREE.BoxGeometry(1.6, 0.025, 0.025);