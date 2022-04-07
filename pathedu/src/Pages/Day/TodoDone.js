import { Link, Outlet } from "react-router-dom"
import { useAsync } from "react-async"
import todolist  from "../../Data/todolist.json"

async function getTodoDone({myaccessToken}) {

	return fetch('https://www.mecallapi.com/api/auth/user', {
	  method: 'GET',
	  headers: {
		"Authorization": 'Bearer ' + myaccessToken
	  }
	})
	.then(data => data.json())
}

function TodoDoneOne(props){
	const id = props.Todo.id
	const content = props.Todo.content
	return (
		<>
		<Outlet/>
		<Link to = {{
			pathname:`${id}`,
			state : {
				todo: "a" //TODO
			}}}>
		id : {id}<br/>
		content : {content}<br/>
		</Link>
		<br/>
		</>
	)
}

const TodoDoneList = async() => {
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = await getTodo({myaccessToken})
	// console.log(todolist)
	return (
	<>
		{todolist.map((item) => {
			return (<TodoDoneOne Todo={item} key={item.id}/>)
		})}
	</>
	)
}

export function TodoDone() {
	const { data, error, isLoading } = useAsync({ promiseFn : TodoDoneList})

	if (isLoading)
		return (
			"Loading..."
		)
	if (error) return `Something went wrong: ${error.message}`
	if (data)
		return (
		<div>
			{data}
		</div>
		)
	return null
}