import { Link, Outlet } from "react-router-dom"
import { useState } from 'react';
import { useAsync } from "react-async"
import course  from "../Data/course.json"
import coursedetail  from "../Data/coursedetail.json"
import Modal from 'react-modal';

async function getVod({myaccessToken}) {

	return fetch('https://www.mecallapi.com/api/auth/user', {
	  method: 'GET',
	  headers: {
		"Authorization": 'Bearer ' + myaccessToken
	  }
	})
	.then(data => data.json())
}

function VodListDetailVod(props) {
	const name = props.vod.title
	const day = props.vod.updatedAt
	return (
		<>
			<div>Images</div>
			<div> {name} </div>
			<div> {day}</div>
			<br/>
			<br/>
		</>
	)

}

//강좌 인증, 받아오는거 만들어줘야함
export function VodListDetailList(props) {
	const vods = coursedetail.resultData.lectures
	const [open, setOpen] = useState(true)

	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
	}
	return (
		<>
		<Outlet/>
		<Modal isOpen={open} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
			{ vods &&
			vods.map((item) => {
			return (<VodListDetailVod vod={item} key={item.id}/>)})}
		</Modal>
		</>
	)
}

function VodThumNail(props) {
	const name = props.vod.content
	const thumbnail = props.vod.attachments[0].fileinfo.filename
	const url = props.vod.attachments[0].fileinfo.url
	const count = props.vod.lectureCount
	const vodid = props.vod.attachments[0].id
	
	return (
		<>
		/==============================\<br/>
		<Link to = {{pathname:`${vodid}`,
					state : {
						vod:`${props.vod}`  ///수정 필요함
					}}}>
			<img src={`/images/${thumbnail}`} width="96" height="65"/><br/>
			{count}
		</Link>
		<div> {name} </div>
		\==============================/<br/>
		</>
	)
}

const Vodlist = async() => {
	const myaccessToken = localStorage.getItem("accessToken");
	const response = await getVod({myaccessToken})
	return (
	<>
		{course.resultData.map((item) => {
			return (<VodThumNail vod={item} key={item.id}/>)
		})}

		API test
		<pre>{JSON.stringify(response, null, 1)}</pre>
	</>
	)
}


export function CoursePage() {
	const { data, error, isLoading } = useAsync({ promiseFn : Vodlist})

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


