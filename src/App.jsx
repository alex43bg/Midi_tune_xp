import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './Styles/App.css'
import './components/Logo/LogoSvg.css'
import './components/Button/Button.css'
import Button from './components/Button/button'
import { Experience } from './components/Experience'
import LogoSvg from './components/Logo/LogoSvg'

export default function App() {
	return (
		<Canvas
			camera={{
				fov: 80,
				position: [2.3, 1, 2.3],
			}}
			gl={{ gammaOutput: true }} // Додаємо gammaOutput: true в об'єкт gl
			colorManagement
		>
			<Experience />
			<ambientLight intensity={0.2} />
			<Html>
				<LogoSvg />
				<Button />
			</Html>
		</Canvas>
	)
}
