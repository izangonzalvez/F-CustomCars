import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export function Car() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls;

    // Inicializar Three.js
    function initThree() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 1, 1);
      scene.add(directionalLight);

      camera.position.z = 5;
    }

    // Cargar modelo .obj
    function loadModel() {
      const loader = new OBJLoader();
      loader.load(
        '/3d/bugatti.obj',
        function (object) {
          scene.add(object);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
          console.error('Error loading model:', error);
        }
      );
    }

    // Renderizar la escena
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    // Inicializar Three.js y cargar el modelo al montar el componente
    initThree();
    loadModel();
    animate();

    // Limpiar Three.js al desmontar el componente
    return () => {
      scene.remove(...scene.children); // Eliminar todos los objetos de la escena
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
}

export default Car;
