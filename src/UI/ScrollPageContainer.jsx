import { Children } from 'react'

const ScrollPageContainer = ({ children, customJustify, customMargin }) => {
	return (
		<>
			<div
				className={`
				w-screen 
				h-screen 
				z-10 
				relative 
				flex 
				flex-col 
				justify-center  
				items-center 
				${(customJustify, customMargin)}`}
			>
				{children}
			</div>
		</>
	)
}
export default ScrollPageContainer
