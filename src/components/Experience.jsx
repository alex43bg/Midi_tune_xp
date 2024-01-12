import { OrbitControls } from '@react-three/drei'
// import { Ball } from './Ball/Ball_my_site'
import { Ball1 } from './Ball/Ball_lite'

export const Experience = () => {
	return (
		<>
			<OrbitControls enableZoom={true} />
			{/* <Header/> */}
			<Ball1 />
		</>
	)
}
