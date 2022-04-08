import { useState } from 'react';
import commentList from "../../Data/commentList.json"
import 'moment/locale/ko'
import Moment from "react-moment"
import { CreateComment } from "./CreateComment" 
async function getComment({ feedId }) {
	return fetch('https://www.mecallapi.com/api/login', {
		method: 'GET',
		//   headers: {
		// 	'Content-Type': 'application/json',
		// 	'Authorization' : Bearer + 'xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx',
		// 	'Reauthorization' : Bearer + 'xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx'
		//   },
		body: JSON.stringify({ feedId })
	})
		.then(data => data.json())
}

function CommentOne(props) {
	const { comment } = props
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
			<li>
				<span className="photo"><img src="images/@photo.png" alt="" /></span>
				<div className="info">
					<em>{comment.id}
						<span><Moment format={form}>{createTime}</Moment></span>
					</em>
					<p>{comment.content}</p>
				</div>
			</li>
		</>
	)
}

export function CommentList() {
	const commentCnt = commentList.length
	return (
		<>
			<div className='comment-w'>
				<div className="cmt-count">
					<i>댓글</i><span>{commentCnt}</span>
				</div>
				<ul>
					{commentList.map((item) => {
						return (<CommentOne comment={item} key={item.id} />)
					})}
				</ul>
				<CreateComment />
			</div>
		</>
	)
}



/*
Response
[
	{
		"id": 1,
				"ownerId": 1,
		"content": "1등~",
				"attachments": [
			{
				"id": 3,
				"fileinfo": {
					"filename": "댓글이미지1.jpeg",
					"url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
					"smallUrl": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/small.RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
					"size": 19044
				},
				"attachType": "image"
			}
		],
				"createdAt": "2020-11-16T09:49:25.214Z",
		"updatedAt": "2020-11-23T05:05:58.374Z",
	} , {
		"id": 2,
				"ownerId": 1,
		"content": "2등~",
				"attachments": [
			{
				"id": 5,
				"fileinfo": {
					"filename": "댓글이미지2.jpeg",
					"url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
					"smallUrl": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/small.RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
					"size": 19044
				},
				"attachType": "image"
			}
		],
				"createdAt": "2020-11-16T09:49:25.214Z",
		"updatedAt": "2020-11-23T05:05:58.374Z",
	}
]
*/