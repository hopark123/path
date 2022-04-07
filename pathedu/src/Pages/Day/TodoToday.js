import { Link, Outlet } from "react-router-dom"
import { useAsync } from "react-async"
import todolist  from "../../Data/todolist.json"

async function getTodo({myaccessToken}) {

	return fetch('https://www.mecallapi.com/api/auth/user', {
	  method: 'GET',
	  headers: {
		"Authorization": 'Bearer ' + myaccessToken
	  }
	})
	.then(data => data.json())
}

function TodoOne(props){
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

const TodoList = async() => {
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = await getTodo({myaccessToken})
	// console.log(todolist)
	return (
	<>
		{todolist.map((item) => {
			return (<TodoOne Todo={item} key={item.id}/>)
		})}
	</>
	)
}
export function TodoToday() {
	const { data, error, isLoading } = useAsync({ promiseFn : TodoList})

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


/*
{
      "id": 1,
      "originId": 1,
      "userId": 1,
      "curriculumId": 1,
      "isEssential": true,
      "title": "배치고사",
      "content": "다함께 메타인지를 위해 시험을 쳐봅시다~"
      "date": "2022-01-25",
      "startTime": "10:00:00",
      "endTime": "12:00:00",
      "pushReserveAt": ["2022-01-25T09:00:00"],
      "order": 100,
      "isHide": false,
      "isCustom": false,
      "status": 0,
      "exam": {
          "id": 8,
          "title": "수학의 정석 함수 시험 시리즈 1",
	        "createdAt": "2020-11-16T09:49:25.214Z",
	        "updatedAt": "2020-11-23T05:05:58.374Z",
      },
      "createdAt": "2020-11-16T09:49:25.214Z",
      "updatedAt": "2020-11-23T05:05:58.374Z",
}
*/