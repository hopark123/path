import { useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'

export function Head(props) {
	const navigate = useNavigate()
	const path = useLocation().pathname
	let dayObj = useLocation().state
	const today = new Date()
	if (!dayObj) {
		dayObj = { year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() }
	}
	if (dayObj&& !dayObj.year) {
		dayObj = { year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() }
	}

	const clickToday = (e) => {
		e.preventDefault();
		var today = new Date()
		navigate(path,
			{
				state: {
					year: today.getFullYear(),
					month: today.getMonth(),
					date: today.getDate(),
					day: today.getDay()
				}
			}
		)
	}
	const prevMon = () => {
		if (dayObj.month > 0) {
			dayObj.month -= 1
		}
		else {
			dayObj.year -= 1
			dayObj.month = 11
		}
		dayObj.date = 1
		const newDay = new Date(dayObj.year, dayObj.month, dayObj.date)

		navigate(path,
			{
				state: {
					year: newDay.getFullYear(),
					month: newDay.getMonth(),
					date: newDay.getDate(),
					day: newDay.getDay()
				}
			}
		)
	}
	const nextMon = () => {
		if (dayObj.month < 11) {
			dayObj.month += 1
		}
		else {
			dayObj.year += 1
			dayObj.month = 1
		}
		dayObj.date = 1
		const newDay = new Date(dayObj.year, dayObj.month, dayObj.date)
		navigate(path,
			{
				state: {
					year: newDay.getFullYear(),
					month: newDay.getMonth(),
					date: newDay.getDate(),
					day: newDay.getDay()
				}
			}
		)
	}
	return (
		<>
			<div className="hgroup">
				<div className="tit">
					<h2>{dayObj.month + 1}월</h2>
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