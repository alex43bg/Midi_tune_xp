import { OrbitControls } from '@react-three/drei'
// import { Ball } from './Ball/Ball_my_site'
// import { Ball1 } from './Ball/Ball_my_site'
// import { Ball_tx } from './ball/Ball_tx'
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
