import React, { useEffect, useState } from 'react'

const Clock = () => {
	const [state, setUser] = useState({
		date: new Date(),
		age: 0,
		name: 'Example Name',
		surname: 'Example Surname'
	})
	useEffect(() => {
		let interval = null
		interval = setInterval(() => {
			actualiceUser()
		}, 1000)
		return () => clearInterval(interval)
	}, [state])
	
	const actualiceUser = () => {
		return setUser({
			date: new Date(),
			age: state.age + 1,
			name: state.name,
			surname: state.surname,
		})
	}

	return (
		<div>
			<h2>
            Hora Actual:
				{state.date.toLocaleTimeString()}
			</h2>
			<h3>{state.name} {state.surname}</h3>
			<h1>Edad: {state.age}</h1>
		</div>
	)
}

export default Clock
