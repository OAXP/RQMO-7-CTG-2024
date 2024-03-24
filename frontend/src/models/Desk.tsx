/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ArchViz (https://sketchfab.com/Archivz)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/desk-c3ac11f22b6542c7a9205d93f38cf683
Title: Desk
*/
import * as THREE from "three";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import deskScene from "@assets/3d/desk.glb";

export function Desk(props: any) {
  const { nodes, materials } = useGLTF(deskScene);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.defaultMaterial as THREE.Mesh).geometry}
            material={materials["1001"]}
            position={[-11.475, -1.808, 6.633]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.873, 1, 1]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/desk.glb");
