/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: davidtsoenyane (https://sketchfab.com/davidtsoenyane)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/trauma-team-case-55abfbcb6ea84c5b88aeb5777ff59bd7
Title: Trauma Team Case
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import medicScene from "@assets/3d/trauma_team_case.glb";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
  };
  materials: {
    DefaultMaterial: THREE.MeshPhysicalMaterial;
  };
};

export function Medic(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(medicScene) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.DefaultMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.DefaultMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/trauma_team_case.glb");