/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/retro-computer-setup-free-82eaf2047e0447a1bfea22482f1d1404
Title: Retro Computer Setup (FREE)
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import computerScene from "@assets/3d/computer.glb";

type GLTFResult = GLTF & {
  nodes: {
    retro_computer_setup_retro_computer_setup_Mat_0: THREE.Mesh;
  };
  materials: {
    retro_computer_setup_Mat: THREE.MeshPhysicalMaterial;
  };
};

export function Computer(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(computerScene) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry
        }
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/retro_computer_setup_free.glb");