import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Import Three.js dynamically to prevent SSR issues
    import('three').then((THREE) => {
      const container = containerRef.current;
      if (!container) return;
      
      // Create scene
      const scene = new THREE.Scene();
      
      // Create camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      
      // Create renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      
      // Create geometry
      const geometry = new THREE.IcosahedronGeometry(2, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0x00F0FF,
        emissive: 0x00F0FF,
        emissiveIntensity: 0.2,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      
      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);
      
      const pointLight = new THREE.PointLight(0x9D00FF, 1);
      pointLight.position.set(10, 10, 10);
      scene.add(pointLight);
      
      const pointLight2 = new THREE.PointLight(0x00FF94, 1);
      pointLight2.position.set(-10, -10, -10);
      scene.add(pointLight2);
      
      // Handle resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Animation loop
      let frameId: number;
      const animate = () => {
        frameId = requestAnimationFrame(animate);
        
        // Rotate the mesh
        mesh.rotation.x += 0.002;
        mesh.rotation.y += 0.003;
        
        // Subtle morphing effect
        const time = Date.now() * 0.001;
        mesh.scale.x = 1 + 0.1 * Math.sin(time);
        mesh.scale.y = 1 + 0.1 * Math.cos(time);
        
        // Make the 3D shape respond to mouse position
        const mouseX = 0; // Would connect to mouse position in a full implementation
        const mouseY = 0;
        mesh.rotation.x += (mouseY * 0.01 - mesh.rotation.x) * 0.05;
        mesh.rotation.y += (mouseX * 0.01 - mesh.rotation.y) * 0.05;
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        if (container && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    });
  }, []);
  
  return <div ref={containerRef} className="absolute inset-0 pointer-events-none"></div>;
};