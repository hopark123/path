import { Link, } from 'react-router-dom'

import { TodoToday } from "./TodoToday"
import { TodoDone } from "./TodoDone"
import { TodoRate } from "./TodoRate"


export function ClassDayPage() {

	return (
	<>
		<Link to="/home/day">
		<input type="button" name="일" value="일" />
		</Link>
		<Link to="/home/week">
			<input type="button" name="주" value="주" /><br/>
		</Link>
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<TodoToday/>
			<TodoDone/>
			<TodoRate/>
		</div>
		</>
	)
}
