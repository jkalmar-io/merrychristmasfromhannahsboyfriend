import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import globeModel from "../assets/3d/untitled.glb";

const Globe = (props) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    meshRef.current.rotation.y += 0.005;
  });

  const { nodes, materials } = useGLTF(globeModel);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.globe.geometry}
        material={materials.DefaultMaterial}
      />
    </group>
  );
};

useGLTF.preload(globeModel);

export default Globe;
