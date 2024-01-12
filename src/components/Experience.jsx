import { OrbitControls } from '@react-three/drei'
// import { Ball } from './Ball_my_site'
// import { Header } from './Header';
// import { Header } from './Header'
import { Ball1 } from 'components/ball/Ball_lite.jsx'
// import { Ava } from "./Ava.jsx";
// import { Ava1 } from './Ava1.jsx'

export const Experience = () => {
	return (
		<>
			<OrbitControls enableZoom={true} />
			{/* <Header/> */}
			<Ball1 />
			
		</>
	)
}
