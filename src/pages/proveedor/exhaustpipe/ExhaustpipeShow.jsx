import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function ExhaustpipeShow() {
  const mountRef = useRef(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    let scene, camera, renderer, controls, exhaustModel;

    function initThree() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      camera.position.set(10, 5, 10);
      camera.lookAt(new THREE.Vector3(5, 0, 0));

      controls = new OrbitControls(camera, renderer.domElement);
      controls.rotateSpeed = 0.5;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;
    }

    function loadModel() {
      if (!modelLoaded) {
        const loader = new OBJLoader();
        loader.load(
          '/3d/Exhaust.obj',
          function (object) {
            object.traverse(function (child) {
              if (child instanceof THREE.Mesh) {
                const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Color blanco
                child.material = material;
              }
            });
            exhaustModel = object; // Guardamos una referencia al modelo del tubo de escape
            exhaustModel.position.set(0, 1, 0); // Ajustamos la posición del modelo (ahora está 1 unidad más arriba)
            scene.add(exhaustModel);
            setModelLoaded(true);
          },
          function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
          },
          function (error) {
            console.error('Error loading model:', error);
          }
        );
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      if (exhaustModel) {
        // Rotamos el modelo del tubo de escape sobre su eje Y
        exhaustModel.rotation.y += 0.01; // Ajusta la velocidad de rotación según sea necesario
      }
      renderer.render(scene, camera);
    }

    initThree();
    loadModel();
    animate();

    return () => {
      scene.remove(...scene.children);
      renderer.dispose();
    };
  }, [modelLoaded]); // Agregamos modelLoaded como dependencia para que se ejecute solo cuando cambie

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '60vh', overflow: 'hidden' }}
    />
  );
}

export default ExhaustpipeShow;
