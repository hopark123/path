import { useState } from 'react';

function setDate(year, month, date) {
	var res = new Date(year, month, date)
	return (res)
}

export function Head(props) {
	const { today, prevMon, nextMon, setToday } = props
	const year = today.getFullYear()
	const mon = today.getMonth()
	const date = today.getDate()
	
	const onClick = (e) => {
		e.preventDefault();
		setToday(setDate(year, mon, date))
	}

	return (
		<>
			<div className="hgroup">
				<div className="tit">
					<h2>{mon + 1}월</h2>
					<a href="#">오늘</a>
				</div>
				<div className="controller">
					<button type="button" className="prev" onClick={prevMon}><span>이전 달</span></button>
					<button type="button" className="next" onClick={nextMon}><span>다음 달</span></button>
				</div>
			</div>
		</>
	)
}