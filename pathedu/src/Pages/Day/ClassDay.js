import { useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useAsync } from "react-async"
import { TodoToday } from "./TodoToday"
import { TodoDone } from "./TodoDone"
import { TodoRate } from "./TodoRate"



export function ClassDayPage() {
	// const {dayObj, loading} = useAsync({promiseFn : useLocation()})
	let dayObj = useLocation().state
	const navigate = useNavigate()
	const today = new Date()
	if (!dayObj) {
		console.log("no dayObj")
		dayObj = { year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() }
	}
	let days = new Date(dayObj.year, dayObj.month, dayObj.date)
	
	const prevDay = (e) => {
		e.preventDefault()
		const newDay = new Date(dayObj.year, dayObj.month, dayObj.date - 1)
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
	const nextDay = (e) => {
		e.preventDefault()
		const newDay = new Date(dayObj.year, dayObj.month, dayObj.date + 1)
		navigate(`/home/day/`,
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

	if (dayObj) {
		return (
			<>
				<main id="snContent" className="class-w">
					<div className="mtit">
						<div className="class-top">
							<p><em>5</em>명이 함께 공부중</p>
							<div className="day-ctr">
								<strong>{dayObj.month + 1}월 {dayObj.date}일</strong>
								<button type="button" className="prev" onClick={prevDay}><span>어제</span></button>
								<button type="button" className="next" onClick={nextDay}><span>내일</span></button>
							</div>
							<div className="cho-wd">
								<Link to={`/home/day`}
									state={{
										year: dayObj.year,
										month: dayObj.month,
										date: dayObj.date,
										day: dayObj.day
									}}
									className='selected'
								>
									일
								</Link>
								<Link to={`/home/week`}
									state={{
										year: dayObj.year,
										month: dayObj.month,
										date: dayObj.date,
										day: dayObj.day
									}}
								>
									주
								</Link>
							</div>
						</div>
					</div>
					<div className="class-inner">
						<div className='day-cnts'>
							<TodoToday dayObj={dayObj}/>
							<TodoDone dayObj={dayObj}/>
							<TodoRate dayObj={dayObj}/>
						</div>
					</div>
				</main>
			</>
		)
	}
	else {
		console.log("loading")
		return (
			"Loading..."
		)
	}
}
