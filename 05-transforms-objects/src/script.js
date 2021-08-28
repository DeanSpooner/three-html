import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Lots of objects like parts of a house, car etc can be grouped together and have transforms applied together

/**
 * Objects
 */
const group = new THREE.Group();
group.position.z = 2;
group.scale.y = 2;
group.rotation.x = Math.PI / 2;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.set(1.5, -1.5, 0);

group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.set(-1.5, 1.5, 0);

group.add(cube3);

/* 
OLD WAY OF MAKING OBJECTS:
*/

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// Set Position of mesh object:

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
//mesh.position.set(0.7, -0.6, 1); Set XYZ positions in one go.

// Scale mesh object

// Also a Vector3 method, to change XYZ axes.

// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;

//mesh.scale.set(2, 0.5, 0.5);  Set XYZ scales in one go.

// Rotating mesh object: NOT Vector3 but Euler.
// Imagine putting a stick through an object to rotate around it - which axis does the stick go?
// Values are expressed in radians: half a rotation is 3.14159 aka Pi. Can use Math.PI

// When rotating, it can rotate other axes by accident, called gimbal lock.
// Order of rotation can be adjusted with reorder method
// mesh.rotation.reorder("YXZ");
// These can be written in any order, will be applied in reorder specified or default XYZ
// mesh.rotation.x = Math.PI / 4;
// mesh.rotation.y = Math.PI / 4;

// Quaternian - representation of rotation in more mathematical way.

// Axes helper - Red, green and blue lines representing xyz axes. Number changes length of lines.

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Changes vector length to 1 from center of scene.
// mesh.position.normalize();
// console.log(mesh.position.length());

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 3;
camera.position.y = 3;
camera.position.z = 7;
scene.add(camera);

//lookAt - sets point for object to orientate itself at/face. Can add new THREE.Vector3 or existing.

camera.lookAt(group.position);

//Find distance between two Object3Ds.
// console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
