/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lowpoly-people-waldo-9ec7a14729aa490fa712e51c217db0f5
Title: Lowpoly People + Waldo
*/

import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import peopleScene from "@assets/3d/people.glb";

//
// node : 282_person__0 to 282_person__0

export function Person({ personNumber, ...props }: any) {
  const colors = [
    new THREE.Color("pink"),
    new THREE.Color("lightgreen"),
    new THREE.Color("yellow"),
    new THREE.Color("skyblue"),
  ];

  let color = colors[personNumber % colors.length];

  const { nodes, materials } = useGLTF(peopleScene);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.054}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Plane_Material_0 as THREE.Mesh).geometry}
            material={materials.Material}
            position={[-200, 0, -100]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes[`${personNumber}_person__0`] as THREE.Mesh).geometry
            }
            material={materials["273_person__0"]}
            position={[0, 0, 70]}
            rotation={[-Math.PI / 2, 0, 2 * Math.PI]}
            scale={80}
          >
            <meshStandardMaterial color={color} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lowpoly_people__waldo.glb");
