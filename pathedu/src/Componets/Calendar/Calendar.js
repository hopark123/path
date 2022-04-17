import { useState, useEffect } from 'react'
import { Head } from "./Head"
import { Body } from './Body'
import validator from 'validator'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'

function setTodate(year, month, date) {
	var res = new Date(year, month, date)
	return (res)
}

export function Calendar() {
	const [today, setToday] = useState(new Date())
	var [year, setYear] = useState(today.getFullYear())
	var [mon, setMon] = useState(today.getMonth())
	var [date, setDate] = useState(today.getDate())
	const navigate = useNavigate()

	let dayObj = useLocation().state
	console.log(useLocation())
	if (!dayObj) {
		console.log("no dayObj")
		dayObj = { year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() }
	}
	console.log(dayObj)
	// const urlDay = useParams().dayid
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
		const newDay = new Date(year, today, 1)
		console.log(newDay)
		navigate(`/home/day`,
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

	const nextDay = (e) => {
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
	// useEffect(() => {
	// 	const newDays = new Date(dayObj.year, dayObj.month, dayObj.date)
	// 	setToday(newDays)
	// 	setYear(dayObj.year)
	// 	setMon(dayObj.month)
	// 	setDate(dayObj.date)
	// }, [dayObj])

	// useEffect(() => {
	// 	// const urlDays = new Date(urlDay)
	// 	// console.log(urlDays)
	// 	console.log("canlendar UseEffect")
	// 	const newDays = new Date(dayObj.year, dayObj.month, dayObj.date)
	// 	// if (validator.isDate(urlDays)) {
	// 		setToday(newDays)
	// 		setYear(dayObj.year)
	// 		setMon(dayObj.month)
	// 		setDate(dayObj.date)
	// },[dayObj])

	// useEffect(() => {
	// 	setYear(today.getFullYear())
	// 	setMon(today.getMonth())
	// 	setDate(today.getDate())
	// 	console.log(today)
	// }, [today])

	return (
		<div className="date-cho">
			<Head today={today} setToday={setToday} prevMon={prevMon} nextMon={nextMon} />
			<Body today={today} setToday={setToday} year={year} mon={mon} date={date} />
			<br />
		</div>
	)
}