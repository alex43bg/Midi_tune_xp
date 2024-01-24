import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.css'
import LogoSvg from './components/Logo/LogoSvg'
////////////////////////////////////////////////////////////////////////////////
//Animation scroll setup
////////////////////////////////////////////////////////////////////////////////

// import studio from '@theatre/studio'
// import extension  from '@theatre/r3f/dist/extension'
// studio.extend(extension)
// studio.initialize()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={null}>
			<App />
		</Suspense>
	</React.StrictMode>
)
