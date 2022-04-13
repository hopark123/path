import { useState, useEffect } from 'react';
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
	const { today, setToday, day } = props;
	const onClick = (e) => {
		e.preventDefault();
		setToday(setDate(day[0], day[1], day[2]))
	}
	return (
		<>
			<td>
				{/* <a href="#" onClick={onClick}> {day[2]}</a> */}
				{day[2]}
			</td>
		</>
	)
}
function TodayMonth(props) {
	const { today, setToday, day } = props;

	const onClick = (e) => {
		e.preventDefault();
		setToday(setDate(day[0], day[1], day[2]))
	}

	return (
		<>
			<td>
				<a href="#" onClick={onClick} className='today' title="오늘 날짜"> {day[2]}</a>
			</td>
		</>
	)
}
function NextMonth(props) {
	const { today, setToday, day } = props;
	const onClick = (e) => {
		e.preventDefault();
		setToday(setDate(day[0], day[1], day[2]))
	}
	return (
		<>
			<td>
				{/* <a href="#" onClick={onClick}> {day[2]}</a> */}
				{day[2]}
			</td>
		</>
	)
}
function Nowday(props) {
	const { today, setToday, day } = props;
	const onClick = (e) => {
		e.preventDefault();
		setToday(setDate(day[0], day[1], day[2]))
	}
	if (today && today.getDate() == day[2])
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

function MakeBody(dates, today) {
	const year = today.getFullYear()
	const mon = today.getMonth()
	const prevLastDate = new Date(year, mon, 0).getDate();
	const startday = new Date(year, mon, 0).getDay();
	const lastdate = new Date(year, mon + 1, 0).getDate();
	const lastday = new Date(year, mon + 1, 0).getDay();

	for (var i = 0; i <= startday; ++i) {
		dates[0][startday - i] = [year, mon - 1, prevLastDate - i, -1];
	}
	for (var i = 1; i <= lastdate; ++i) {
		var k = parseInt((i + startday) / 7);
		var j = parseInt((i + startday) % 7);
		if (startday == 6)
			k--;
		dates[k][j] = [year, mon, i, 0]
	}
	for (var i = 1; i < 7 - lastday; ++i) {
		if (startday != 6 && startday + lastdate >= 35)
			dates[5][lastday + i] = [year, mon + 1, i, 1];
		else
			dates[4][lastday + i] = [year, mon + 1, i, 1];
	}
	checkToday(dates)
}

function ViewWeek(props) {
	const { week, setToday, today } = props;
	return (
		<>
			<tr>
				{week.map((day) => {
					if (day[3] == 0)
						return (<Nowday today={today} setToday={setToday} day={day} key={day} />)
					else if (day[3] == -1)
						return (<PrevMonth today={today} setToday={setToday} day={day} key={day} />)
					else if (day[3] == 1)
						return (<NextMonth today={today} setToday={setToday} day={day} key={day} />)
					else if (day[3] == 2)
						return (<TodayMonth today={today} setToday={setToday} day={day} key={day} />)
				})}
			</tr>
		</>
	)
}


export function Body(props) {
	const { today, setToday } = props;
	const navigate = useNavigate();
	let days = ["일", "월", "화", "수", "목", "금", "토"]
	let dates = new Array(6)
	for (var i = 0; i < dates.length; ++i) {
		dates[i] = new Array(7);
	}

	MakeBody(dates, today)
	useEffect(() => {
		MakeBody(dates, today)
		navigate(`/home/day/${today}`,
		{
			state : {
				year : today.getFullYear(),
				month : today.getMonth(),
				date : today.getDate(),
				day : today.getDay(),
			}
		}
		)
	}, [today])

	return (
		<>
			<div className="calendar">
				<table>
					<caption>강좌선택 달력</caption>
					<thead>
						<tr>
							{days.map((item) => {
								return (<WeekHead item={item} key={item} />)
							})}
						</tr>
					</thead>
					<tbody>
						{dates.map((week) => {
							return (<ViewWeek week={week} key={week} setToday={setToday} today={today} />)
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}
