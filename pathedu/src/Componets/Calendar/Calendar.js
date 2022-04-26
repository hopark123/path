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
	const today = new Date()
	let dayObj = useLocation().state
	if (!dayObj) {
		dayObj = { year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() }
	}
	if (dayObj&& !dayObj.year) {
		dayObj = { year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() }
	}

	return (
		<div className="date-cho">
			<Head />
			<Body />
			<br />
		</div>
	)
}