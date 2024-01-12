import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { MeshNormalMaterial } from "three";
import { useFrame } from "react-three-fiber";
import { gsap } from "gsap";

export function Ball(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF("./models/Ball_my_site.glb");
  const { actions } = useAnimations(animations, group);

  const customMaterial = new MeshNormalMaterial();

  useFrame((state, delta) => {
    // Rotate the entire model automatically
    group.current.rotation.x += 0.01 * delta; // Adjust rotation speed along the X-axis
    group.current.rotation.y += 0.01 * delta; // Adjust rotation speed along the Y-axis
    group.current.rotation.z += 0.01 * delta; // Adjust rotation speed along the Z-axis
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0, 0.01, 0]}>
          <group
            name="2cadeacdc25d4de996224c5744612329fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane"
                  position={[1.926, 19.497, -1.284]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Plane_Material001_0"
                    geometry={nodes.Plane_Material001_0.geometry}
                    material={customMaterial}
                    position={[-0.017, 0.011, -0.196]}
                  />
                  <mesh
                    name="Plane_Material001_0001"
                    geometry={nodes.Plane_Material001_0001.geometry}
                    material={customMaterial}
                    position={[-0.017, 0.011, -0.196]}
                  />
                  <mesh
                    name="Plane_Material001_0002"
                    geometry={nodes.Plane_Material001_0002.geometry}
                    material={customMaterial}
                    position={[-0.017, 0.011, -0.196]}
                  />
                  <mesh
                    name="Plane_Material001_0003"
                    geometry={nodes.Plane_Material001_0003.geometry}
                    material={customMaterial}
                    position={[-0.017, 0.011, -0.196]}
                  />
                  <mesh
                    name="Plane_Material001_0004"
                    geometry={nodes.Plane_Material001_0004.geometry}
                    material={customMaterial}
                    position={[-0.017, 0.011, -0.196]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/Ball_my_site.glb");
