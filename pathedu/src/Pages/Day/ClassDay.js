import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useAsync } from "react-async"
import { TodoToday } from "./TodoToday"
import { TodoDone } from "./TodoDone"
import { TodoRate } from "./TodoRate"



export function ClassDayPage() {
	// const {days, loading} = useAsync({promiseFn : useLocation()})
	const kk = useLocation()
	const days = useLocation().state
	console.log(days)
	console.log(kk)

	const navigate = useNavigate()
	const prevDay = (e) => {
		e.preventDefault()
		const newDay = new Date(days.year, days.month, days.date - 1)
		navigate(`/home/day/${newDay}`,
		)
	}
	const nextDay = (e) => {
		e.preventDefault()
		const newDay = new Date(days.year, days.month, days.date + 1)
		navigate(`/home/day/${newDay}`,
		)
	}

	if (days) {
		return (
			<>
				<main id="snContent" className="class-w">
					<div className="mtit">
						<div className="class-top">
							<p><em>5</em>명이 함께 공부중</p>
							<div className="day-ctr">
								<strong>{days.month + 1}월 {days.date}일</strong>
								<Link to="/home/day/">
									<button type="button" className="prev" onClick={prevDay}><span>어제</span></button>
								</Link>
								<Link to="/home/day/">
								<button type="button" className="next" onClick={nextDay}><span>내일</span></button>
								</Link>
							</div>
							<div className="cho-wd">
								<Link to="/home/day/" className='selected'>
									일
								</Link>
								<Link to="/home/week/">
									주
								</Link>
							</div>
						</div>
					</div>
					<div className="class-inner">
						<div className='day-cnts'>
							<TodoToday />
							<TodoDone />
							<TodoRate />
						</div>
					</div>
				</main>
			</>
		)
	}
	else {
		console.log("loading")
		console.log(days)
		return (
			"Loading..."
		)
		}
}
