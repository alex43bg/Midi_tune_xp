import { OrbitControls } from '@react-three/drei'
// import { Ball } from './Ball/Ball_my_site'
// import { Ball1 } from './Ball/Ball_my_site'
import { Ball_tx } from './ball/Ball_tx'

export const Experience = () => {
	return (
		<>
			<OrbitControls enableZoom={true} />
			{/* <Header/> */}
			<Ball_tx />
		</>
	)
}
