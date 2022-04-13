import { useState } from 'react';

export function Head(props) {
	const { today, prevMon, nextMon, setToday } = props
	const year = today.getFullYear()
	const mon = today.getMonth()
	const date = today.getDate()
	
	const clickToday = (e) => {
		var today = new Date()
		e.preventDefault();
		setToday(today)
	}

	return (
		<>
			<div className="hgroup">
				<div className="tit">
					<h2>{mon + 1}월</h2>
					<a onClick={clickToday}>오늘</a>
				</div>
				<div className="controller">
					<button type="button" className="prev" onClick={prevMon}><span>이전 달</span></button>
					<button type="button" className="next" onClick={nextMon}><span>다음 달</span></button>
				</div>
			</div>
		</>
	)
}