import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Mesh } from 'three';
import React from 'react';

export default function ThreeJS3DText() {
    React.useEffect(() => {
        
        const canvas = document.querySelector('.webgl');

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        // Resizing
        window.addEventListener('resize', () => {
            // Update Sizes
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            // Update Camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Update Renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // This is to prevent distortion when user changes screen size
        });

        // Fullscreen Control - Need changes for Safari
        window.addEventListener('dblclick', () => {
            document.fullscreenElement ? document.exitFullscreen() : document.querySelector('.webgl').requestFullscreen();
        });

        // Asset Loaders
        const loadingManager = new THREE.LoadingManager();
        loadingManager.onStart = () => {
            console.log('loading started');
        }
        loadingManager.onProgress = () => {
            console.log('loading in progress');
        }
        loadingManager.onLoad = () => {
            console.log('loaded assets');
        }
        loadingManager.onError = (e) => {
            console.error('failed to load assets. check error below:');
            console.error(e);
        }

        const textureLoader = new THREE.TextureLoader(loadingManager);
        const matcapTexture = textureLoader.load('/textures/matcaps/8.png');

        const fontLoader = new THREE.FontLoader(loadingManager);
        fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
            const textGeometry = new THREE.TextBufferGeometry(
                'Hey Isha !!!\nWish you\nAll the best\nYou are\nAWESOME !!!', {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
            );
            // textGeometry.computeBoundingBox();
            // textGeometry.translate(
            //     - (textGeometry.boundingBox.max.x - textGeometry.parameters.options.bevelSize) * 0.5,
            //     - (textGeometry.boundingBox.max.y - textGeometry.parameters.options.bevelSize) * 0.5,
            //     - (textGeometry.boundingBox.max.z - textGeometry.parameters.options.bevelThickness) * 0.5
            // );
            textGeometry.center();
            const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
            const text = new THREE.Mesh(textGeometry, material);
            scene.add(text);

            const donutGeometry = new THREE.TorusBufferGeometry(0.3, 0.2, 20, 45);
            console.time('donut');
            for (let i = 0; i < 1000; i++) {
                const donut = new Mesh(donutGeometry, material);

                donut.position.x = (Math.random() - 0.5) * 100;
                donut.position.y = (Math.random() - 0.5) * 100;
                donut.position.z = (Math.random() - 0.5) * 100;

                donut.rotation.x = Math.random() * Math.PI;
                donut.rotation.y = Math.random() * Math.PI;

                const scale = Math.random();
                donut.scale.set(scale, scale, scale);

                donut.name = 'donut';

                scene.add(donut);
            }
            console.timeEnd('donut');
        });


        // Create Scene
        const scene = new THREE.Scene();

        // Axes Helper
        // const axesHelper = new THREE.AxesHelper();
        // scene.add(axesHelper);

        // Create Objects
        // const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), new MeshBasicMaterial());
        // scene.add(cube);

        // Create Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera.position.z = 50;
        scene.add(camera);

        // Set Controls
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.update();

        // Create Renderer
        const renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Get All Donuts
        let donuts = [];

        // Animate
        const tick = () => {
            // transformation commands
            controls.update();
            if (donuts.length === 0)
                donuts = scene.children.filter(child => child.name === 'donut');

            donuts.forEach(donut => { donut.rotation.x += Math.PI / 16 });

            // request animation frame
            window.requestAnimationFrame(tick);

            // render the scene
            renderer.render(scene, camera);
        }

        tick();
    }, []);

    return (
        <canvas className="webgl"></canvas>
    )
}
