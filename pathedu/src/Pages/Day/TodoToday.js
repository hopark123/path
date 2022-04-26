import { Link, useParams } from "react-router-dom"
import { useAsync } from "react-async"
import todolist from "../../Data/todolist.json"

async function getTodo({ myaccessToken }) {

	return fetch('https://www.mecallapi.com/api/auth/user', {
		method: 'GET',
		headers: {
			"Authorization": 'Bearer ' + myaccessToken
		}
	})
		.then(data => data.json())
}

function TodoOne(props) {
	const { Todo } = props
	const id = Todo.id
	const content = Todo.content
	console.log(props)
	return (
		<>
			<div className="todo-card">
				<Link to={`/home/todo/${id}`}
					state={{
						task: {Todo} //TODO
					}}
					>
					<div className="info">
						<div className="cate">
							<span className="c-mi">미션</span>
							<span className="c-em">중요</span>
							<span className="c-li">LIVE</span>
						<span className="c-te">시험</span>

						</div>
						<div className="cnts">
							<p>[선택] [복습노트] 그래프와 활용 (1)</p>
							<p>[LIVE] 그래프와 활용 2강 - 삼차, 사차함수 그래프의 유형 및 중요한 특징</p>
						<em className="s-time">오후 7시 시작 예정</em>
						</div>
					</div>
					<div className="video-w">
					<img src="images/@photo.png" alt="" />
				</div>
				</Link>
				<br />
			</div>
		</>
	)
}

const TodoList = async () => {
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = await getTodo({myaccessToken})
	// console.log(todolist)
	return (
		<>
			<div className="todo-list">
				{todolist.map((item) => {
					return (<TodoOne Todo={item} key={item.id} />)
				})}
			</div>
		</>
	)
}
export function TodoToday(props) {
	const { data, error, isLoading } = useAsync({ promiseFn: TodoList })
	const { dayObj } = props
	// const today = useParams()
	// console.log(today)
	if (isLoading)
		return (
			"Loading..."
		)
	if (error) return `Something went wrong: ${error.message}`
	if (data)
		return (
			<>
				<div className='todo-box scroll'>
					<h3>오늘의 투두</h3>
					{data}
				</div>
			</>
		)
	return null
}
