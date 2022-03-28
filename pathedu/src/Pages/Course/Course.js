import { Link, Outlet } from "react-router-dom"
import { useAsync } from "react-async"
import course  from "../../Data/course.json"

async function getcourse({myaccessToken}) {

	return fetch('https://www.mecallapi.com/api/auth/user', {
	  method: 'GET',
	  headers: {
		"Authorization": 'Bearer ' + myaccessToken
	  }
	})
	.then(data => data.json())
}

function CourseThumNail(props) {
	const name = props.course.content
	const thumbnail = props.course.attachments[0].fileinfo.filename
	const url = props.course.attachments[0].fileinfo.url
	const count = props.course.lectureCount
	const courseid = props.course.attachments[0].id
	
	return (
		<>
		/==============================\<br/>
		<Outlet/>
		<Link to = {{pathname:`${courseid}`,
					state : {
						course:`${props.course}`  ///수정 필요함
					}}}>
			<img src={`/images/${thumbnail}`} width="96" height="65"/><br/>
			{count}
		</Link>
		<div> {name} </div>
		\==============================/<br/>
		</>
	)
}

const Courselist = async() => {
	const myaccessToken = localStorage.getItem("accessToken");
	const response = await getcourse({myaccessToken})
	return (
	<>
		{course.resultData.map((item) => {
			return (<CourseThumNail course={item} key={item.id}/>)
		})}
		=================<br/>
		API test
		<pre>{JSON.stringify(response, null, 1)}</pre>
	</>
	)
}


export function CoursePage() {
	const { data, error, isLoading } = useAsync({ promiseFn : Courselist})

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


