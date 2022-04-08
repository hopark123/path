import { Link, Outlet } from "react-router-dom"
import { useAsync } from "react-async"
import todolist from "../../Data/todolist.json"

async function getTodoDone({ myaccessToken }) {

	return fetch('https://www.mecallapi.com/api/auth/user', {
		method: 'GET',
		headers: {
			"Authorization": 'Bearer ' + myaccessToken
		}
	})
		.then(data => data.json())
}

function TodoDoneOne(props) {
	const id = props.Todo.id
	const content = props.Todo.content
	return (
		<>
			<div className="todo-card end-todo">

				<Link to={{
					pathname: `${id}`,
					state: {
						todo: "a" //TODO
					}
				}}>
					<div className="info">
						<div className="cate">
							<span className="c-te">시험</span>
						</div>
						<div className="cnts">
							<p>2022학년도 전국연합학력평가 시행 일정</p>
							<em className="end-time">총 풀이시간 25분</em>
						</div>
					</div>
				</Link>
			</div>
		</>
	)
}

const TodoDoneList = async () => {
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = await getTodo({myaccessToken})
	// console.log(todolist)
	return (
		<>
			<div className="todo-list">

				{todolist.map((item) => {
					return (<TodoDoneOne Todo={item} key={item.id} />)
				})}
			</div>
		</>
	)
}

export function TodoDone() {
	const { data, error, isLoading } = useAsync({ promiseFn: TodoDoneList })

	if (isLoading)
		return (
			"Loading..."
		)
	if (error) return `Something went wrong: ${error.message}`
	if (data)
		return (
			<>
				<div className="todo-box">
					<h3>달성한 투두</h3>
					{data}
				</div>
			</>
		)
	return null
}