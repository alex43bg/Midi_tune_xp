import { OrbitControls } from '@react-three/drei'
import { Ball_tx_lite } from './ball/Ball_tx_lite'

export const Experience = () => {
	return (
		<>
			<OrbitControls enableZoom={true} />
			{/* <Header/> */}
			<Ball_tx_lite />
		</>
	)
}
