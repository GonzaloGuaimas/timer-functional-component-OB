import logo from './logo.svg'
import './App.css'
import React from 'react'
import Clock2 from './Clock2'
import Clock from './Clock'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Clock2></Clock2>
				<Clock></Clock>
			</header>
			<body>
			
			</body>
		</div>
	)
}

export default App
