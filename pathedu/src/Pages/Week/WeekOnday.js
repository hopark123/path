
function WeekOneDayTodo(props) {
	const { todo } = props
	return (
		<>
			<div className="w-card no-achi">
				<a href="#">
					<div className="cate ctype2">
						<span className="c-mi">미션</span>
						<span className="c-em">중요</span>
						<span className="c-li">LIVE</span>
						<span className="c-te">시험</span>
						<span className="c-cl">강의</span>
					</div>
					<p>[선택] [복습노트] 그래프와 활용 (1)</p>
					<em className="no-achi">미달성</em>
					{/* <em className="achi">달성!</em> */}
				</a>
			</div>
			<div className="w-card">
				<a href="#">
					<div className="cate ctype2">
						<span className="c-li">LIVE</span>
					</div>
					<p>[선택] [복습노트] 그래프와 활용 (1)</p>
					<em className="achi">달성!</em>
				</a>
			</div>
			<div className="w-card">
				<a href="#">
					<div className="cate ctype2">
						<span className="c-cl">강의</span>
					</div>
					<p>비문학 독해 - 심화 (1)</p>
				</a>
			</div>
		</>

	)
}

export function WeekOneDay(props) {
	const { week, index, startDate, today } = props
	let checkDay = false
	if (startDate.getFullYear() == today.getFullYear() &&
		startDate.getMonth() == today.getMonth() &&
		startDate.getDate() + index == today.getDate()) {
		checkDay = true
	}
	const weekend = ["일", "월", "화", "수", "목", "금", "토"]
	return (
		<>
			<div className="week-box">
				<div className="w-day">
					<span>{weekend[index]}</span>
					{checkDay && <strong>{startDate.getDate() + index}</strong>}
					{!checkDay && <em>{startDate.getDate() + index}</em>}
				</div>
				<div className="w-list">
					{week.map((item, index) => {
						return (<WeekOneDayTodo todo={item} key={index}/>)
					})}
				</div>
			</div>
		</>

	)
}