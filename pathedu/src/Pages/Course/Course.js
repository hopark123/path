import { Link, Outlet } from "react-router-dom"
import { useAsync } from "react-async"
import course from "../../Data/course.json"

async function getcourse({ myaccessToken }) {

	return fetch('https://dev-api.path.how/classes', {
		method: 'GET',
		headers: {
			"Authorization": 'Bearer ' + myaccessToken
		}
	})
		.then(data => data.json())
}

function CourseThumNail(props) {
	const { course } = props
	const name = course.title
	const thumbnail = course.attachment.thumbnails[0].url
	// const url = props.course.attachments[0].fileinfo.url
	const count = course.lectureCount
	const courseid = course.id
	return (
		<>
			<li>
				<Link to={`${courseid}`}
					state={{
						course: course
					}}>
					<span className="new">NEW!</span>
					<div className="photo">
						<img src={`${thumbnail}`} alt="" />
						<div><i>강좌갯수</i><span>{count}</span></div>
					</div>
					<p>{name}</p>
				</Link>
			</li>
		</>
	)
}

const Courselist = async () => {
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = await getcourse({myaccessToken})
	return (
		<>
			<ul>
				{course.map((item) => {
					return (<CourseThumNail course={item} key={item.id} />)
				})}
			</ul>
		</>
	)
}


export function CoursePage() {
	const { data, error, isLoading } = useAsync({ promiseFn: Courselist })

	if (isLoading)
		return (
			"Loading..."
		)
	if (error) return `Something went wrong: ${error.message}`
	if (data)
		return (
			<>
				<main id="snContent" className="class-w">
					<div className="mtit">
						<h2>강좌</h2>
					</div>
					<div className="contents-w">
						<div className="conts-inner">
							<div className="vod-list">
								{data}
							</div>
						</div>
					</div>
				</main>
			</>
		)
	return null
}


