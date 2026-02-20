import * as THREE from 'three';
import { planeGeometry, boundaryFenceGeometrylr, boundaryFenceGeometryfb } from "./geometries";
import { planeMaterial, boundaryFenceMaterial } from "./materials";

export const plane = new THREE.Mesh(planeGeometry, planeMaterial);

export const boundaryLeft = new THREE.Mesh(boundaryFenceGeometrylr, boundaryFenceMaterial);
export const boundaryRight = new THREE.Mesh(boundaryFenceGeometrylr, boundaryFenceMaterial);

export const boundaryFront = new THREE.Mesh(boundaryFenceGeometryfb, boundaryFenceMaterial);
export const boundaryBack = new THREE.Mesh(boundaryFenceGeometryfb, boundaryFenceMaterial);

boundaryLeft.position.set(0.8125, 0.0125, 0);
boundaryRight.position.set(-0.8125, 0.0125, 0);
boundaryFront.position.set(0, 0.0125, 0.8125);
boundaryBack.position.set(0, 0.0125, -0.8125);