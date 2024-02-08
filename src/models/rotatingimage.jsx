import React, { useRef } from "react";
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, PlaneGeometry, MeshBasicMaterial } from 'three';
import myImage from "../assets/2d/rotatingimage.png"; // Make sure this path is correct

const RotatingImage = (props) => {
    const meshRef = useRef();
    const texture = useLoader(TextureLoader, myImage);
    const geometry = new PlaneGeometry(1.5, 1);
    const material = new MeshBasicMaterial({ map: texture, transparent: true });

    // Orbit radius
    const orbitRadius = 120; // Adjust as needed

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        const x = orbitRadius * Math.sin(time/2);
        const z = orbitRadius * Math.cos(time/2);
        if (meshRef.current) {
            meshRef.current.position.x = x;
            // Keep the y position as is or set it to any desired constant or dynamic value
            meshRef.current.position.z = z;
            meshRef.current.rotation.y = Math.sin(time/2);
        }
    });

    return (
        <mesh
            ref={meshRef}
            {...props}>
            <primitive attach="geometry" object={geometry} />
            <primitive attach="material" object={material} />
        </mesh>
    );
};

export default RotatingImage;