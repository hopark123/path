import { useState, useEffect } from 'react';

function setDate(year, month, date) {
	var res = new Date(year, month, date)
	return (res)
}

function WeekHead(props) {
	return (
		<>
			{props.item}
		</>
	)
}

function Prevday(props) {
	const {today, setToday, day} = props;
	const onClick = (e) => {
		e.preventDefault();
		setToday(setDate(day[0],day[1],day[2]))
	}
	return (
	<>
		<input type="button" style={{"width":"32px"}} value={`${day[2]}`} onClick={onClick}/>
	</>
	)
}
function Today(props) {
	var day = props.day[2]
	return (
	<>
		<input type="button"   style={{"width":"32px", "color":"green"}} value={`${day}`}/>
	</>
	)
}
function Nextday(props) {
	const {today, setToday, day} = props;
	const onClick = (e) => {
		e.preventDefault();
		setToday(setDate(day[0],day[1],day[2]))
	}
	return (
	<>
		<input type="button" style={{"width":"32px"}} value={`${day[2]}`} onClick={onClick}/>
	</>
	)
}
function Nowday(props) {
	const {today, setToday, day} = props;
	const onClick = (e) => {
		e.preventDefault();
		setToday(setDate(day[0],day[1],day[2]))
	}
	if (today && today.getDate() == day[2])
		return (
			<>
			<input type="button" style={{"width":"32px" ,"color":"red"}} value={`${day[2]}`} onClick={onClick}/>
			</>
		)
	else
		return (
		<>
			<input type="button" style={{"width":"32px"}} value={`${day[2]}`} onClick={onClick}/>
		</>
		)
}

function checkToday(dates) {
	const now = new Date();
	let year = now.getFullYear()
	let mon  = now.getMonth()
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

function makeBody(dates, today) {
	const year = today.getFullYear()
	const mon = today.getMonth()
	const prevLastDate = new Date(year , mon, 0).getDate();
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
	{week.map((day) => {
		if (day[3] == 0)
			return (<Nowday today={today} setToday={setToday} day={day} key={day}/>)
		else if (day[3] == -1)
			return (<Prevday today={today} setToday={setToday} day={day} key={day}/>)
		else if (day[3] == 1)
			return (<Nextday today={today} setToday={setToday} day={day} key={day}/>)
		else if (day[3] == 2)
			return (<Today today={today} setToday={setToday} day={day} key={day}/>)
		
	})}
	<br/>
	</>
	)
}



export function Body(props) {
	const { today, setToday } = props;
	
	let days = ["일", "월", "화", "수", "목", "금", "토"]
	let dates = new Array(6)
	for (var i = 0; i < dates.length; ++i) {
		dates[i] = new Array(7);
	}
	makeBody(dates, today)
	useEffect(() => {
		makeBody(dates, today)
	},[today])
	return (
	<>
		{days.map((item) => {
			return (<WeekHead item = {item} key={item}/>)
		})}
		<br/>
		{dates.map((week) => {
			return (<ViewWeek week={week} key={week} setToday={setToday} today={today}/>)
		})}
	</>
	)
}
