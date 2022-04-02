import { useState } from 'react';
import commentList from "../../Data/commentList.json"
import 'moment/locale/ko'
import Moment from "react-moment"

async function getComment({feedId}) {
	return fetch('https://www.mecallapi.com/api/login', {
	  method: 'GET',
	//   headers: {
	// 	'Content-Type': 'application/json',
	// 	'Authorization' : Bearer + 'xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx',
	// 	'Reauthorization' : Bearer + 'xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx'
	//   },
	  body: JSON.stringify({feedId})
	})
	.then(data => data.json())
}

function CommentOne (props) {
	const comment = props.comment
	const [seconds, setSeconds] = useState(Date.now());
	const createTime = new Date(comment.createdAt);
	const nowTime = new Date(seconds);
	let form;

	if (parseInt(createTime - nowTime) > -60000)
		form = "방금 전"
	else if (parseInt(createTime - nowTime) < -86400000)
		form = "M월 D일"

	return (
	<>
		{comment.id} : {comment.content} &nbsp;
		<Moment format={form}>{createTime}</Moment> <br/>
	</>
	)
}

export function ModalComment () {
	const commentCnt = commentList.length	
	return (
	<>
	댓글 수 : {commentCnt}<br/>
	{commentList.map((item) => {
		return (<CommentOne comment={item} key={item.id}/>)
	})}
	</>
	)
}	

