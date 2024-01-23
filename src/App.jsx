import { ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { getProject, val } from '@theatre/core'
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f'
import './Styles/App.css'
import './components/Logo/Logo.css'
import { Experience } from './components/Experience'
import Ball_animation from './components/ball/Ball_animation.json'
// import { OrbitControls } from '@react-three/drei'
import { Html } from '@react-three/drei'
// import LogoSvg from './components/Logo/LogoSvg'
// import Button from './components/Button/button'
import React from 'react'
import { useAtom } from 'jotai'
import { currentPageAtom } from './GlobalState'
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function App() {
	const sheet = getProject('Fly Ball', { state: Ball_animation }).sheet('Scene')
	// const sheet = getProject('Fly Ball').sheet('Scene')

	return (
		<>
			<Canvas gl={{ preserveDrawingBuffer: true }}>
				<ambientLight intensity={0.8} />
				<directionalLight position={[10, 5, 5]} intensity={3} />
				<ScrollControls pages={10} damping={0.4} maxSpeed={0.05}>
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
	const [currentPage, setCurrentPage] = useAtom(currentPageAtom)
	const sequenceLength = val(sheet.sequence.pointer.length)
	sheet.sequence.position = scroll.offset * sequenceLength
	function logCurrentPageCallback(scroll, callback) {
		const currentPage = Math.floor(scroll.offset * scroll.pages) + 1
		console.log('CurrentPage', currentPage)
		callback(currentPage)
	}
	useFrame(() => {
		if (scroll) {
			logCurrentPageCallback(scroll, setCurrentPage)
			sheet.sequence.position = scroll.offset * sequenceLength
		}
	})

	return (
		<>
			<Experience />
			{/* ////////////////////////////////////////////////////////////////////////
			CAMERA_SETUP
			//////// */}
			<PerspectiveCamera
				theatreKey='Camera'
				makeDefault
				position={[5, 5, -5]}
				fov={75}
			/>
			{/* //////////////////////////////////////////////////////////////////////////////// */}
		</>
	)
}
