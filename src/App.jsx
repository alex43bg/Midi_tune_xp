import { Html, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { getProject, val } from '@theatre/core'
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f'
import './Styles/App.css'
import './components/Button/Button.css'
import './components/Logo/LogoSvg.css'
// import Button from './components/Button/button'
import { Experience } from './components/Experience'
// import LogoSvg from './components/Logo/LogoSvg'

export default function App() {
	const sheet = getProject('Fly Through').sheet('Scene')

	return (
		<Canvas gl={{ preserveDrawingBuffer: true }}>
			<ScrollControls pages={5}>
				<SheetProvider sheet={sheet}>
					<Scene />
				</SheetProvider>
			</ScrollControls>
		</Canvas>
	)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Scene() {
	const sheet = useCurrentSheet()
	const scroll = useScroll()

	useFrame(() => {
		const sequenceLength = val(sheet.sequence.pointer.length)
		sheet.sequence.position = scroll.offset * sequenceLength
	})
	return (
		<>
			<ambientLight intensity={0.2} />
			<Experience />
			<PerspectiveCamera
				theatreKey='Camera'
				makeDefault
				position={[0, 0, 0]}
				fov={80}
				near={0.1}
				far={70}
			/>
			<Html>
				{/* <LogoSvg /> */}
				{/* <Button /> */}
			</Html>
		</>
	)
}
