import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { MeshLambertMaterial, Color } from 'three'

export function Ball1(props) {
	const group = useRef()
	const { nodes, animations } = useGLTF('./models/ball_lite.glb')
	const { actions } = useAnimations(animations, group)

	// Використовуйте MeshLambertMaterial для матеріалів, які реагують на освітлення
	const customMaterial = new MeshLambertMaterial({
		color: new Color(0x0016CAF4),
	})

	useFrame((state, delta) => {
		group.current.rotation.x += 0 * delta
		group.current.rotation.y += 0.01 * delta
		group.current.rotation.z += 0.01 * delta
	})

	return (
		<group name='Scene' castShadow receiveShadow>
			<pointLight intensity={1} position={[4.076, 5.904, -1.005]} castShadow />

			<group ref={group} {...props} dispose={null}>
				<group name='Sketchfab_model' rotation={[Math.PI / 2, Math.PI / 2, 0]}>
					<group
						name='2cadeacdc25d4de996224c5744612329fbx'
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.05}
					>
						<group name='Object_2'>
							<group name='RootNode'>
								<group
									name='Plane'
									rotation={[-Math.PI / 2, 0, 0]}
									scale={100}
									castShadow
								>
									<mesh
										name='Plane_Material001_0002'
										geometry={nodes.Plane_Material001_0002.geometry}
										material={customMaterial}
										castShadow
									/>
									<mesh
										name='Plane_Material001_0003'
										geometry={nodes.Plane_Material001_0003.geometry}
										material={customMaterial}
										castShadow
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('./models/ball_lite.glb')
