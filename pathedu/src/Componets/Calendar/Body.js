import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function setDate(year, month, date) {
	var res = new Date(year, month, date)
	return (res)
}

function WeekHead(props) {
	return (
		<>
			<th scope="col">{props.item}</th>
		</>
	)
}

function PrevMonth(props) {
	const { dayObj, day } = props;
	return (
		<>
			<td>
				{day[2]}
			</td>
		</>
	)
}
function Today(props) {
	const { dayObj, day } = props;
	return (
		<>
			<td>
				<a href="#" className='today' title="오늘 날짜"> {day[2]}</a>
			</td>
		</>
	)
}
function NextMonth(props) {
	const { dayObj, day } = props;
	
	return (
		<>
			<td>
				{day[2]}
			</td>
		</>
	)
}
function NowMonth(props) {
	const { dayObj, day } = props;
	const path = useLocation().pathname
	const navigate = useNavigate();
	
	const onClick = (e) => {
		e.preventDefault();
		// setToday(setDate(day[0], day[1], day[2]))
		const newDay = new Date(day[0], day[1], day[2])
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
	if (dayObj && dayObj.date == day[2])
		return (
			<>
				<td>
					<a onClick={onClick} className="selected" title="선택한 날짜"> {day[2]}</a>
				</td>
			</>
		)
	else
		return (
			<>
				<td>
					<a onClick={onClick}> {day[2]}</a>
				</td>
			</>
		)
}

function checkToday(dates) {
	const now = new Date();
	let year = now.getFullYear()
	let mon = now.getMonth()
	let date = now.getDate()
	for (let i = 0; i < 6; ++i) {
		for (let j = 0; j < 7; ++j) {
			if (dates[i][j] && dates[i][j][0] == year &&
				dates[i][j][1] == mon &&
				dates[i][j][2] == date)
				dates[i][j][3] = 2;
		}
	}
}

function MakeBody(dates, dayObj) {
	const { year, month, day} = dayObj
	const prevLastDate = new Date(year, month, 0).getDate();
	const startday = new Date(year, month, 0).getDay();
	const lastdate = new Date(year, month + 1, 0).getDate();
	const lastday = new Date(year, month + 1, 0).getDay();

	for (var i = 0; i <= startday; ++i) {
		dates[0][startday - i] = [year, month - 1, prevLastDate - i, -1];
	}
	for (var i = 1; i <= lastdate; ++i) {
		var k = parseInt((i + startday) / 7);
		var j = parseInt((i + startday) % 7);
		if (startday == 6)
			k--;
		dates[k][j] = [year, month, i, 0]
	}
	for (var i = 1; i < 7 - lastday; ++i) {
		if (startday != 6 && startday + lastdate >= 35)
			dates[5][lastday + i] = [year, month + 1, i, 1];
		else
			dates[4][lastday + i] = [year, month + 1, i, 1];
	}
	checkToday(dates)
}

function ViewWeek(props) {
	const { dayObj, week } = props;

	return (
		<>
			<tr>
				{week.map((day) => {
					if (day[3] == 0)
						return (<NowMonth dayObj={dayObj} day={day} key={day} />)
					else if (day[3] == -1)
						return (<PrevMonth dayObj={dayObj} day={day} key={day} />)
					else if (day[3] == 1)
						return (<NextMonth dayObj={dayObj} day={day} key={day} />)
					else if (day[3] == 2)
						return (<Today dayObj={dayObj} day={day} key={day} />)
				})}
			</tr>
		</>
	)
}


export function Body(props) {
	let dayObj = useLocation().state
	const today = new Date()
	if (!dayObj) {
		dayObj = { year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() }
	}
	if (dayObj && !dayObj.year) {
		console.log(dayObj)
		dayObj = { year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() }
	}
	let days = ["일", "월", "화", "수", "목", "금", "토"]
	let dates = new Array(6)
	for (var i = 0; i < dates.length; ++i) {
		dates[i] = new Array(7);
	}
	MakeBody(dates, dayObj)

	return (
		<>
			<div className="calendar">
				<table>
					<caption>강좌선택 달력</caption>
					<thead>
						<tr>
							{days.map((item) => {
								return (<WeekHead item={item} key={item} dayObj={dayObj} />)
							})}
						</tr>
					</thead>
					<tbody>
						{dates.map((week) => {
							return (<ViewWeek week={week} key={week} dayObj={dayObj}/>)
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}
