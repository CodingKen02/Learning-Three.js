import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Create our model
function loadGLTF() {
    let balloonLoader = new THREE.GLTFLoader();

    balloonLoader.load('./model/3Dme.gltf', (gltf) => {
        Mesh = gltf.scene;
        Mesh.scale.set(0.2,0.2,0.2);
        scene.add(Mesh);
        Mesh.position.x = 0;
        Mesh.position.y = 10;
        Mesh.position.z = 15;
    });
}

// Camera
const camera = new THREE.PerspectiveCamera(45, 800,600)
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl');
const render = new THREE.WebGLRenderer({canvas});
createRenderer.setSize(800, 600)
createRenderer.render(scene, camera);
