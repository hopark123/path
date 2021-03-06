import createComment from "../../Data/createComment.json"
import { useState } from 'react';
import { AddAttachment } from "../Attachment"
async function getComment({ feedId }) {
	return fetch('https://www.mecallapi.com/api/login', {
		method: 'POST',
		//   headers: {
		// 'Country: KR',
		// 	'Content-Type': 'application/json',
		// 	'Authorization' : Bearer + 'xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx',
		// 	'Reauthorization' : Bearer + 'xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx'
		//   },
		body: {
			// "content":"1등~",
			// "attachments":"@/Users/jk_st/Downloads/댓글이미지1.png",
			// "attachTypes":"image"
		}.JSON.stringify({ feedId })
	})
		.then(data => data.json())
}

export function CreateCommentAttach() {
	const [comments, setComment] = useState({ newComment: "", });
	const onChangeComment = (e) => {
		setComment({
			...comments,
			[e.target.name]: e.target.value,
		});
	}
	const onComment = (e) => {
		e.preventDefault();
		console.log(comments)
	}
	return (
		<>
			<input type="file" accept="image/*" />
			<input type="text" onChange={onChangeComment} name="newComment" />
			<input type="button" onClick={onComment} /> <br />
		</>
	)
}

export function CreateComment() {
	const [comments, setComment] = useState({ newComment: "", });
	const onChangeComment = (e) => {
		setComment({
			...comments,
			[e.target.name]: e.target.value,
		});
	}
	const onComment = (e) => {
		e.preventDefault();
		console.log(comments)
	}
	return (
		<>
			<fieldset className="cmt-input">
				<AddAttachment />
				<legend>댓글 쓰기</legend>
				<textarea title="댓글 입력" onChange={onChangeComment} name="newComment"></textarea>
				<button type="submit" onClick={onComment}><span>게시</span></button>
			</fieldset>
		</>
	)
}

/*
Response
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
}
*/