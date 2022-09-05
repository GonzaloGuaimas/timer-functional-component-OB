import React, { useEffect } from 'react'

const Clock = () => {
	const state = {
		date: new Date(),
		age: 0,
		name: 'Example Name',
		surname: 'Example Surname'
	}
	const tick = () => {
		this.setState((prevState) => {
			let edad = prevState.edad +1
			return {
				...prevState,
				fecha: new Date(),
				edad
			}
		})
	}
	//componentDidMount
	useEffect(() => {
		this.timerID = setInterval (
			() => this.tick(), 1000
		)
	}, [])
	useEffect(() => {
		// componentWillUnmount
		return () => {
			clearInterval(this.timerID)
		}
	}, [tick])

	

	return (
		<div>
			<h2>
            Hora Actual:
				{state.fecha.toLocaleTimeString()}
			</h2>
			<h3>{state.nombre} {state.apellidos}</h3>
			<h1>Edad: {state.edad}</h1>
		</div>
	)
}

export default Clock
