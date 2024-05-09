import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function Car() {
  const mountRef = useRef(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    let scene, camera, renderer, controls;

    function initThree() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Ajustar la posición de la cámara para que el modelo se vea desde la posición deseada
      camera.position.set(10, 5, 10);
      camera.lookAt(new THREE.Vector3(5, 0, 0)); // Mirando hacia la derecha

      controls = new OrbitControls(camera, renderer.domElement);
      
      // Ajustar la velocidad de los controles orbitales
      controls.rotateSpeed = 0.5;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;
    }

    function loadModel() {
      if (!modelLoaded) {
        const loader = new OBJLoader();
        loader.load(
          '/3d/PorscheGT2.obj',
          function (object) {
            // Iterar sobre las partes del modelo y asignar el material según el nombre
            object.traverse(function (child) {
              if (child instanceof THREE.Mesh) {
                const material = getMaterialByPartName(child.name);
                child.material = material;
              }
            });
            scene.add(object);
            setModelLoaded(true); // Marcar el modelo como cargado
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

    function getMaterialByPartName(partName) {
      // Asignar materiales diferentes según el nombre de la parte del modelo
      if (partName.includes('wheel')) {
        return new THREE.MeshBasicMaterial({ color: 0x000000 }); // Ruedas en negro
      } else if (partName.includes('door')) {
        return new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Puertas en azul
      } else {
        return new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Otras partes en rojo
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    initThree();
    loadModel();
    animate();

    return () => {
      scene.remove(...scene.children);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
}

export default Car;
