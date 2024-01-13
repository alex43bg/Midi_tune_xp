import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// MeshBasicMaterial
import { MeshLambertMaterial, TextureLoader} from "three";
import { useFrame } from "react-three-fiber";

export function Ball_tx(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF("./models/Ball_tx.glb");
  const { actions } = useAnimations(animations, group);

  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("./red-db68f5b4.png");
  

  const customMaterial = new MeshLambertMaterial({ map: texture });

  useFrame((state, delta) => {
    group.current.rotation.x += 0.01 * delta;
    group.current.rotation.y += 0.01 * delta;
    group.current.rotation.z += 0.01 * delta;
  });

  return (
    <group name="Scene" castShadow receiveShadow>
      <pointLight position={[10, 10, 10]} castShadow />

      <group ref={group} {...props} dispose={null}>
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
                  castShadow
                >
                  <mesh
                    name="Plane_Material001_0"
                    geometry={nodes.Plane_Material001_0.geometry}
                    material={customMaterial}
                    position={[-0.017, 0.011, -0.196]}
                    castShadow
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

useGLTF.preload("./models/Ball_tx.glb");
