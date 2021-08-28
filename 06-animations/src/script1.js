import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations
// requestAnimationFrame is to call the function provided on the next frame.
// Could be faster on faster computers, so needs to adapt to computer and its time.
// deltaTime used to compare computer's timestamps.
// deltaTime allows each frame to be rendered at a constant rate.

// Time
// let time = Date.now();

// const tick = () => {
//   // Time
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;
//   console.log(deltaTime);

//   // Update objects
//   mesh.position.x += 0.001 * deltaTime;
//   mesh.rotation.y += 0.001 * deltaTime;

//   // Render
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// Three.js has a built-in solution too called Clock.

// Clock

// const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 0.5, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 0.5, delay: 1.5, x: 0 });
gsap.to(mesh.position, { duration: 0.5, delay: 2, y: 2 });
gsap.to(mesh.position, { duration: 0.5, delay: 2.5, y: 0 });
gsap.to(mesh.position, { duration: 0.5, delay: 3, x: -2 });
gsap.to(mesh.position, { duration: 0.5, delay: 3.5, x: 0 });
gsap.to(mesh.position, { duration: 0.5, delay: 4, y: -2 });
gsap.to(mesh.position, { duration: 0.5, delay: 4.5, y: 0 });

const tick = () => {
  // Clock
  // const elapsedTime = clock.getElapsedTime();
  // console.log(elapsedTime);

  // Update objects
  //   mesh.rotation.y = elapsedTime * Math.PI * 2;

  // Using sin/cos/tan for different, un-uniform effects - can be used on camera or cube:
  // camera.position.x = 3 * Math.sin(elapsedTime);
  // camera.position.y = 2 * Math.cos(elapsedTime);
  // camera.position.z = 3 * Math.cos(elapsedTime);

  // camera.lookAt(mesh.position);

  //   mesh.scale.x = Math.sin(elapsedTime);
  //   mesh.position.x = Math.cos(elapsedTime); // Creates a wave effect.
  //   mesh.position.y = Math.sin(elapsedTime); // Combine with above to make circular effect.

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
