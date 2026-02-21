import * as THREE from 'three';
import { planeGeometry, boundaryFenceGeometrylr, boundaryFenceGeometryfb, snakeHeadGeometry, snakeBodyGeometry, snakeTailGeometry } from "./geometries";
import { planeMaterial, boundaryFenceMaterial, snakeMaterial } from "./materials";

export const plane = new THREE.Mesh(planeGeometry, planeMaterial);

export const boundaryLeft = new THREE.Mesh(boundaryFenceGeometrylr, boundaryFenceMaterial);
export const boundaryRight = new THREE.Mesh(boundaryFenceGeometrylr, boundaryFenceMaterial);

export const boundaryFront = new THREE.Mesh(boundaryFenceGeometryfb, boundaryFenceMaterial);
export const boundaryBack = new THREE.Mesh(boundaryFenceGeometryfb, boundaryFenceMaterial);

export const snakeHead = new THREE.Mesh(snakeHeadGeometry, snakeMaterial);

boundaryLeft.position.set(0.8125, 0.0125, 0);
boundaryRight.position.set(-0.8125, 0.0125, 0);
boundaryFront.position.set(0, 0.0125, 0.8125);
boundaryBack.position.set(0, 0.0125, -0.8125);