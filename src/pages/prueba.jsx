import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function Car() {
  const mountRef = useRef(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    let scene, camera, renderer, controls, brakeModel;

    function initThree() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff); // Fondo blanco
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
          '/3d/lambo.obj',
          function (object) {
            object.traverse(function (child) {
              if (child instanceof THREE.Mesh) {
                const material = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Color negro
                child.material = material;
              }
            });
            brakeModel = object; // Guardamos una referencia al modelo de freno
            brakeModel.position.set(-4, 1, 0); // Ajustamos la posición del modelo para moverlo a la izquierda
            brakeModel.scale.set(2, 2, 2); // Ajusta el tamaño del modelo (aumentado)
            scene.add(brakeModel);
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
      if (brakeModel) {
        // Rotamos el modelo de freno sobre su eje Y
        brakeModel.rotation.y += 0.01; // Ajusta la velocidad de rotación según sea necesario
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

export default Car;
