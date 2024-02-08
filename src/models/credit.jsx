import React, { useRef } from "react";
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, PlaneGeometry, MeshBasicMaterial } from 'three';
import myImage from "../assets/2d/joecreditcard.png"; // Make sure this path is correct

const RotatingImage = (props) => {
    const meshRef = useRef();
    const texture = useLoader(TextureLoader, myImage);
    const geometry = new PlaneGeometry(.65, .4);
    const material = new MeshBasicMaterial({ map: texture, transparent: true });

    const maxDistance = 120; // Maximum distance towards and away from the screen

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        // Oscillate between -maxDistance and maxDistance over time
        // The division by a value slows down the speed of oscillation
        const z = maxDistance * Math.sin(time / 2); 

        if (meshRef.current) {
            // This line is to keep the plane moving in a straight line towards and away from the screen
            meshRef.current.position.z = z;

            // Optionally, rotate the plane on its Y-axis for a dynamic effect as it moves
            
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