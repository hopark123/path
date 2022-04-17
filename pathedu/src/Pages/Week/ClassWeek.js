import { useState } from 'react'
import { WeekOneDay } from "./WeekOnday"
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import weekTodo from "../../Data/weekTodo.json"

async function GetWeekList({ myaccessToken }) {
	return fetch('https://www.mecallapi.com/api/auth/user', {
		method: 'GET',
		headers: {
			"Authorization": 'Bearer ' + myaccessToken,
			"Reauthorization": 'Bearer ' + myaccessToken
		}
	})
		.then(data => data.json())
}

function sunWeek(days) {
	const res = new Date(days.getFullYear(), days.getMonth(), days.getDate() - days.getDay())
	return (res)
}

function satWeek(days) {
	const res = new Date(days.getFullYear(), days.getMonth(), days.getDate() - days.getDay() + 6)
	return (res)
}

export function ClassWeekPage() {
	let dayObj = useLocation().state
	const today = new Date()
	if (!dayObj)
		dayObj= { year : today.getFullYear(), month : today.getMonth(), date : today.getDate(), day : today.getDay()}
	let days = new Date(dayObj.year, dayObj.month, dayObj.date)
	const sunDay = sunWeek(days)
	const satDay = satWeek(days)
	const navigate = useNavigate()
	const prevWeek = (e) => {
		e.preventDefault()
		const newDay = new Date(dayObj.year, dayObj.month, dayObj.date -7)
		navigate(`/home/week/${newDay}`,
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
	const nextWeek = (e) => {
		e.preventDefault()
		const newDay = new Date(dayObj.year, dayObj.month, dayObj.date + 7)
		console.log("click")
		navigate(`/home/week/${newDay}`,
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
			<main id="snContent" className="class-w">
				<div className="mtit">
					<div className="class-top">
						<p><em>5</em>명이 함께 공부중</p>
						<div className="day-ctr">
							<strong>{sunDay.getMonth() + 1}월 {sunDay.getDate()}일 - {satDay.getMonth() + 1}월 {satDay.getDate()}일</strong>
							<button type="button" className="prev" onClick={prevWeek}><span>어제</span></button>
							<button type="button" className="next" onClick={nextWeek} ><span>내일</span></button>
						</div>
						<div className="cho-wd">
							<Link to={`/home/day/${days}`}
								state={{
									year: dayObj.year,
									month: dayObj.month,
									date: dayObj.date,
									day: dayObj.day
								}}
							>
								일
							</Link>
							<Link to={`/home/week/${days}`}
								state={{
									year: dayObj.year,
									month: dayObj.month,
									date: dayObj.date,
									day: dayObj.day,
								}}
								className='selected'
							>
							주
							</Link>
						</div>
					</div>
				</div>
				<div className="class-inner">
					<div className="week-cnts">
						<div className="viewport">
							{weekTodo.map((item, index) => {
								return (<WeekOneDay startDate={sunDay} today={days} week={item} index={index} key={index} />)
							})}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
/*
		<Link to="/home/day">
		<input type="button" name="일" value="일" />
		</Link>
		<Link to="/home/week">
			<input type="button" name="주" value="주" /><br/>
		</Link>
		<form name="classWeek">
			ClassWeek
		</form>
	*/