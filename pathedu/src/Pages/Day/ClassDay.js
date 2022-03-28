import { TodoToday } from "./TodoToday"
import { TodoDone } from "./TodoDone"
import { TodoRate } from "./TodoRate"


export function ClassDayPage() {

	return (
	<div style={{ display: 'flex', flexDirection: 'row' }}>
		<TodoToday/>
		<TodoDone/>
		<TodoRate/>
	</div>
	)
}
