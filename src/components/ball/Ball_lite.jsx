/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/ball_lite.glb 
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { MeshNormalMaterial } from 'three'

export function Ball1(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('./models/ball_lite.glb')
	const { actions } = useAnimations(animations, group)
	const customMaterial = new MeshNormalMaterial()

	useFrame((state, delta) => {
		// Rotate the entire model automatically
		group.current.rotation.x += 0 * delta // Adjust rotation speed along the X-axis
		group.current.rotation.y += 0.01 * delta // Adjust rotation speed along the Y-axis
		group.current.rotation.z += 0.01 * delta // Adjust rotation speed along the Z-axis
	})

	return (
		<group ref={group} {...props} dispose={null}>
			<group name='Scene'>
				<group name='Sketchfab_model' rotation={[Math.PI / 2, Math.PI / 2, 0]}>
					<group
						name='2cadeacdc25d4de996224c5744612329fbx'
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.05}
					>
						<group name='Object_2'>
							<group name='RootNode'>
								<group name='Plane' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
									<mesh
										name='Plane_Material001_0002'
										geometry={nodes.Plane_Material001_0002.geometry}
										material={customMaterial}
									/>
									<mesh
										name='Plane_Material001_0003'
										geometry={nodes.Plane_Material001_0003.geometry}
										material={customMaterial}
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
				<pointLight
					name='Light'
					intensity={54351.413}
					decay={2}
					position={[4.076, 5.904, -1.005]}
					rotation={[-1.839, 0.602, 1.932]}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('./models/ball_lite.glb')