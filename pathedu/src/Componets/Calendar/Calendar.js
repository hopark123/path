import { useState, useEffect } from 'react';
import { Head } from "./Head"
import { Body } from './Body';

function setTodate(year, month, date) {
	var res = new Date(year, month, date)
	return (res)
}

export function Calendar() {
	const [today, setToday] = useState(new Date())
	var [year, setYear] = useState(today.getFullYear())
	var [mon, setMon] = useState(today.getMonth())
	var [date, setDate] = useState(today.getDate())

	const prevMon = (e) => {
		e.preventDefault();
		if (mon > 0) {
			setToday(setTodate(year, mon - 1, 1))
			setMon(mon - 1)
		}
		else {
			setYear(year - 1)
			setMon(11)
			setToday(setTodate(year - 1, 11, 1))
		}
		setDate(1)
	}

	const nextMon = (e) => {
		e.preventDefault();
		if (mon < 11) {
			setMon(mon + 1)
			setToday(setTodate(year, mon + 1, 1))
		}
		else {
			setYear(year + 1)
			setMon(0)
			setToday(setTodate(year + 1, 0, 1))
		}
		setDate(1)
	}

	useEffect(() => {
		console.log(today)
		setYear(today.getFullYear())
		setMon(today.getMonth())
		setDate(today.getDate())
	}, [today])
	return (
		<div className="date-cho">
			<Head today={today} setToday={setToday} prevMon={prevMon} nextMon={nextMon} />
			<Body today={today} setToday={setToday} year={year} mon={mon} date={date} />
			<br />
		</div>
	)
}