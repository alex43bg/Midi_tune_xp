import React, { useRef, useEffect, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { MeshLambertMaterial, Color } from 'three'
import { useFrame } from 'react-three-fiber'
import * as dat from 'dat.gui'

export function Ball_tx(props) {
  const group = useRef()
  const { nodes, animations } = useGLTF('./models/Ball_my_site.glb')
  const { actions } = useAnimations(animations, group)

  const customMaterial = new MeshLambertMaterial({ color: new Color(0xc0c63e) })

  // Використовуємо useRef для динамічного об'єкта dat.GUI
  const guiRef = useRef(null)

  useEffect(() => {
    const gui = new dat.GUI()

    const colorController = gui.addColor(
      { color: customMaterial.color.getHex() },
      'color'
    )
    colorController.onChange(value => {
      customMaterial.color.setHex(value)
    })

    // Призначте вказівник на dat.GUI до ref
    guiRef.current = gui

    // Поверніть функцію очищення, щоб очистити dat.GUI при видаленні компонента
    return () => {
      gui.destroy()
    }
  }, [customMaterial.color])

  useFrame((state, delta) => {
    group.current.rotation.x += 0.01 * delta
    group.current.rotation.y += 0.01 * delta
    group.current.rotation.z += 0.01 * delta
  })

  return (
		<group name='Scene' castShadow receiveShadow>
			{/* Додаємо світло та налаштування тіней для світла */}
			<pointLight position={[15, 10, 10]} castShadow />

			<group ref={group} {...props} dispose={null}>
				<group name='Sketchfab_model' position={[0, 0.01, 0]}>
					<group
						name='2cadeacdc25d4de996224c5744612329fbx'
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.025}
					>
						<group name='Object_2'>
							<group name='RootNode'>
								<group
									name='Plane'
									position={[1.926, 19.497, -1.284]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={100}
									castShadow
								>
									<mesh
										name='Plane_Material001_0'
										geometry={nodes.Plane_Material001_0.geometry}
										material={customMaterial}
										position={[-0.017, 0.011, -0.196]}
										castShadow
									/>
									<mesh
										name='Plane_Material001_0001'
										geometry={nodes.Plane_Material001_0001.geometry}
										material={customMaterial}
										position={[-0.017, 0.011, -0.196]}
										castShadow
									/>
									<mesh
										name='Plane_Material001_0002'
										geometry={nodes.Plane_Material001_0002.geometry}
										material={customMaterial}
										position={[-0.017, 0.011, -0.196]}
										castShadow
									/>
									<mesh
										name='Plane_Material001_0003'
										geometry={nodes.Plane_Material001_0003.geometry}
										material={customMaterial}
										position={[-0.017, 0.011, -0.196]}
										castShadow
									/>
									<mesh
										name='Plane_Material001_0004'
										geometry={nodes.Plane_Material001_0004.geometry}
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
	)
}

// useGLTF.preload тепер викликається за межами компонента
useGLTF.preload('./models/Ball_my_site.glb')
