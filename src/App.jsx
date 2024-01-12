import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'
import { MySvgComponent } from './components/MySvgComponent'
import { Button } from './components/button'

function App() {
	return (
		<Canvas
			camera={{
				fov: 80,
				position: [2.3, 1, 2.3],
			}}
		>
			<Experience />
			<Html>
				<MySvgComponent />
				<Button />
			</Html>
		</Canvas>
	)
}

export default App
