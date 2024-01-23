import { Children } from 'react'

const ScrollPageContainer = ({children}) => {
	return (
		<>
			<div className='w-screen h-screen relative flex flex-col justify-center  items-center bg-sky-500/5'>
				{children}
			</div>
		</>
	)
}
export default ScrollPageContainer