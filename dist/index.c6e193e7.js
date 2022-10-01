var scene, camera, renderer, mesh;
// import * as THREE from 'three';
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth,window.innerHeight);
// document.body.appendChild(renderer.domElement);
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
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 1000);
    mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
        color: 0xff9999,
        wiretrame: true
    }));
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1280, 720);
    document.body.appendChild(renderer.domElement);
    animate();
}
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render(scene, camera);
}
window.onload = init;

//# sourceMappingURL=index.c6e193e7.js.map
