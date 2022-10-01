var scene, camera,renderer,mesh;
var meshFloor;
var keyboard = {};
var Player = {height:1.8, speed:0.1,turnSpeed:Math.PI*0.01};
import * as THREE from 'three';
// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(1280,720);

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);
// const mesh = new THREE.Mesh(
// new THREE.BoxGeometry(1,1,1),
// new THREE.MeshBasicMaterial({color:0xff9999, wiretrame:true})
// );
// scene.add(mesh);
// animate();
// function animate(){
// requestAnimationFrame(animate);
// mesh.rotation.x += 0.01;
// mesh.rotation.y += 0.02;
// renderer.render( scene, camera);
// }
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
// 75,
// window.innerWidth / window.innerHeight,
// 0.1,
// 1000
// );
// const axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper);
// camera.position.z = 5;
// renderer.render(scene, camera);


function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);
    mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xff4444, wireframe:false})
);
scene.add(mesh);

meshFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(10,10,10,10),
    new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true})

);
meshFloor.rotation.x -= Math.PI / 2;
scene.add(meshFloor)

camera.position.set(0,Player.height,-5);
camera.lookAt(new THREE.Vector3(0,Player.height,0));

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
animate();
}
function animate(){
requestAnimationFrame(animate);
mesh.rotation.x += 0.01;
mesh.rotation.y += 0.02;
if (keyboard[87]){//w key
    camera.position.x -= Math.sin(camera.rotation.y) * Player.speed;
    camera.position.z -= -Math.cos(camera.rotation.y) * Player.speed;
}
if (keyboard[83]){//S key
    camera.position.x += Math.sin(camera.rotation.y)*Player.speed;
    camera.position.z += -Math.cos(camera.rotation.y)*Player.speed;
}
if (keyboard[65]){//A key
    camera.position.x += Math.sin(camera.rotation.y + Math.PI/2)*Player.speed;
    camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2)*Player.speed;
}

if (keyboard[68]){//D key
    camera.position.x += Math.sin(camera.rotation.y - Math.PI/2)*Player.speed;
    camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2)*Player.speed;
}


if (keyboard[37]){//move left
    camera.rotation.y -= Player.turnSpeed;
}
if (keyboard[39]){//move right
    camera.rotation.y +=  Player.turnSpeed;
}


renderer.render( scene, camera);
}
function KeyDown(event){
    keyboard[event.keyCode] = true;
}

function KeyUp(event){
    keyboard[event.keyCode] = false;
}

window.addEventListener('keydown',KeyDown);
window.addEventListener('keyup',KeyUp);

window.onload = init;
