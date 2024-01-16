import React, { useRef, useEffect, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { MeshLambertMaterial, Color } from 'three'
import { useFrame } from 'react-three-fiber'
import * as dat from 'dat.gui'
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function Ball_tx_lite(props) {
	const group = useRef()
	const { nodes, animations } = useGLTF('./models/ball_lite.glb')
	const { actions } = useAnimations(animations, group)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Використовуйте MeshLambertMaterial для матеріалів, які реагують на освітлення
	const customMaterial = new MeshLambertMaterial({
		color: new Color(0x45cc4),
	})
	////////////////////////////////////////////////////////////////////////////////
	// Використовуємо useMemo для створення інстансу dat.GUI та контролю кольору

	const memoizedGUI = useMemo(() => {
		const gui = new dat.GUI()
		const colorController = gui.addColor(
			{ color: customMaterial.color.getHex() },
			'color'
		)
		colorController.onChange(value => {
			customMaterial.color.setHex(value)
		})
		return gui
	}, [customMaterial.color])

	useEffect(() => {
		return () => {
			memoizedGUI.destroy() // Очищаємо dat.GUI при видаленні компонента
		}
	}, [memoizedGUI])

	useFrame((state, delta) => {
		group.current.rotation.x += 0.01 * delta
		group.current.rotation.y += 0 * delta
		group.current.rotation.z += 0 * delta
	})

	///////////////////////////////////////////////////////////////////////////////
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
