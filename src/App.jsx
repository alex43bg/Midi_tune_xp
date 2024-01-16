import { ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { getProject, val } from '@theatre/core'
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f'
import './Styles/App.css'
import { Experience } from './components/Experience'
import { OrbitControls } from '@react-three/drei'
import Ball_animation from './components/ball/Ball_animation.json'
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function App() {
	const sheet = getProject('Fly Ball',{state: Ball_animation}).sheet('Scene')
	// const sheet = getProject('Fly Ball').sheet('Scene')

	return (
		<>
			<Canvas gl={{ preserveDrawingBuffer: true }}>
				<ScrollControls pages={5} damping={1} maxSpeed={1}>
					<SheetProvider sheet={sheet}>
						<Scene />
					</SheetProvider>
				</ScrollControls>
			</Canvas>
		</>
	)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Scene() {
	const sheet = useCurrentSheet()
	const scroll = useScroll()

	useFrame(() => {
		// the length of our sequence
		const sequenceLength = val(sheet.sequence.pointer.length)
		// update the "position" of the playhead in the sequence, as a fraction of its whole length
		sheet.sequence.position = scroll.offset * sequenceLength
	})

	return (
		<>
			{/* <color attach='background' args={['black']} /> */}
			<OrbitControls enableZoom={false} />
			<ambientLight intensity={1} />
			{/* <spotLight position={[1,1,1,]}/> */}
			<directionalLight position={[5, 5, 5]} intensity={3} />

			<Experience />
			{/* //////////////////////////////////////////////////////////////////////////////// */}
			<PerspectiveCamera
				theatreKey='Camera'
				makeDefault
				near={1.7}
				far={100}
				fov={60}
				zoom={1}
				position={[3.217, 3.314, 0.138]}
				rotation={[1, 1, 1]}
				scale={[1, 1, 1]}
				
			/>
			{/* //////////////////////////////////////////////////////////////////////////////// */}
			{/* <Html> */}
			{/* <LogoSvg /> */}
			{/* <Button /> */}
			{/* </Html> */}
		</>
	)
}
