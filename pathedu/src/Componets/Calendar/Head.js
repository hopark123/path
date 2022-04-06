import { useState } from 'react';



export function Head(props) {
	const { today, prevMon, nextMon } = props
	const year = today.getFullYear()
	const mon = today.getMonth()
	return (
		<>
			{year}년
			{mon + 1}월
			<input type="button" onClick={prevMon} value="<"/>
			<input type="button" onClick={nextMon} value=">"/> <br/>
		</>
	)
}