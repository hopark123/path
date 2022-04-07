import { Link, } from 'react-router-dom'

export function ClassWeekPage() {
	return (
		<>
		<Link to="/home/day">
		<input type="button" name="일" value="일" />
		</Link>
		<Link to="/home/week">
			<input type="button" name="주" value="주" /><br/>
		</Link>
		<form name="classWeek">
			ClassWeek
		</form>
		</>
	)
}
