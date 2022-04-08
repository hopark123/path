import { Link, } from 'react-router-dom'

import { TodoToday } from "./TodoToday"
import { TodoDone } from "./TodoDone"
import { TodoRate } from "./TodoRate"


export function ClassDayPage() {

	return (
		<>
			<main id="snContent" className="class-w">
				<div className="mtit">
					<div className="class-top">
						<p><em>5</em>명이 함께 공부중</p>
						<div className="day-ctr">
							<strong>12월 14일</strong>
							<button type="button" className="prev"><span>어제</span></button>
							<button type="button" className="next"><span>내일</span></button>
						</div>
						<div className="cho-wd">
							<Link to="/home/day" className='selected'>
								일
							</Link>
							<Link to="/home/week">
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
