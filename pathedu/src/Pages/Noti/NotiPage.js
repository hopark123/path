import noticelist from "../../Data/noticelist.json"
import { Link, Outlet } from "react-router-dom"
import { useAsync } from "react-async"
import { useState } from 'react';
import { CommentList, CreateComment } from "../../Componets/Comment"
import { Attachment, AttachImag } from "../../Componets/Attachment"
import { NotiListOne } from "./NotiListOne"
async function NotiListGet({ myaccessToken }) {
	return fetch('https://www.mecallapi.com/api/auth/user', {
		method: 'GET',
		headers: {
			"Authorization": 'Bearer ' + myaccessToken,
			"Reauthorization": 'Bearer ' + myaccessToken
		}
	})
		.then(data => data.json())
}


function NotiAttach(props) {
	// console.log (props.notidetaillist)
	const filename = props.notidetaillist.fileinfo.filename
	const fileid = props.notidetaillist.id
	const [comments, setComment] = useState({ newComment: "", });

	return (
		<>
			{fileid} : {filename}<br />
		</>
	)
}


const NotiList = async () => {
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = await NotiListGet({myaccessToken})
	// console.log (noticelist)
	return (
		<>
			{noticelist.map((item) => {
				return (<NotiListOne noti={item} key={item.id} />)
			})}
		</>
	)
}

export function NotiPage() {
	const { data, error, isLoading } = useAsync({ promiseFn: NotiList })

	if (isLoading)
		return (
			"Noti Loading..."
		)
	if (error) return `Something went wrong: ${error.message}`
	if (data)
		return (
			<>
				<main id="snContent" className="class-w">
					<div className="mtit">
						<h2>공지</h2>
					</div>
					<div className="contents-w">
						<div className="conts-inner type2">
							<div className="box-wrap">
								{data}
							</div>
						</div>
					</div>
				</main>
			</>
		)
	return null
}

