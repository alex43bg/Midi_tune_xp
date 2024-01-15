import { ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { getProject, val } from '@theatre/core'
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f'
import './Styles/App.css'
import { Experience } from './components/Experience'
import { OrbitControls } from '@react-three/drei'
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function App() {
	const sheet = getProject('Fly Ball').sheet('Scene')

	return (
		<>
			<Canvas gl={{ preserveDrawingBuffer: true }}>
				<ScrollControls pages={5}>
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
			<OrbitControls enableZoom={false}/>
			<ambientLight intensity={1} />
			<directionalLight position={[5, 5, 5]} intensity={10} />



			<Experience />
			{/* //////////////////////////////////////////////////////////////////////////////// */}
			<PerspectiveCamera
				theatreKey='Camera'
				makeDefault
				position={[0, 0, 0]}
				fov={60}
				near={1.7}
				far={100}
			/>
			{/* //////////////////////////////////////////////////////////////////////////////// */}
			{/* <Html> */}
			{/* <LogoSvg /> */}
			{/* <Button /> */}
			{/* </Html> */}
		</>
	)
}
