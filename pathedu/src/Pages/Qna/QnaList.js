import qnalist from "../../Data/qnalist.json"
import { useState } from 'react';

async function getQna({myaccessToken}) {
	return fetch('https://www.mecallapi.com/api/auth/user', {
	  method: 'GET',
	  headers: {
		"Authorization": 'Bearer ' + myaccessToken
	  }
	})
	.then(data => data.json())
}

export function QnaListOne(props) {
	// console.log(props)
	const content = props.qna.content
	const [comments, setComment] = useState({newComment:"",});
	const onChangeComment = (e) => {
		setComment({
			...comments,
			[e.target.name]: e.target.value,
		});
	}
	const onComment = (e) => {
		e.preventDefault();
		console.log(comments);
	}
	return (
	<>
		{content} <br/>
		comments <br/>
		<input type="text" onChange={onChangeComment} name="newComment"/>
		<input type="button" onClick={onComment}/> <br/>
	</>
	)
}

export const QnaList = async() => {
	const myaccessToken = localStorage.getItem("accessToken");
	const response = await getQna({myaccessToken})
	// console.log(qnalist)
	return (
	<>
	{qnalist.map((item) => {
		return (<QnaListOne qna={item} key={item.id}/>)
	})}
	</>
	)
}

/*
[
      {
	        "id": 1,
					"ownerId": 1
	        "content": "내일 기말고사입니까?",
					"attachments": [
	            {
	                "id": 3,
	                "fileinfo": {
	                    "filename": "질문이미지1.jpeg",
	                    "url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
	                    "smallUrl": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/small.RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
	                    "size": 19044
	                },
	                "attachType": "image"
	            },
	            {
	                "id": 4,
	                "fileinfo": {
	                    "filename": "질문이미지2.jpeg",
	                    "url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
	                    "smallUrl": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/small.RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
	                    "size": 19044
	                },
	                "attachType": "image"
	            },
	            {
	                "id": 5,
	                "fileinfo": {
	                    "filename": "문제지.pdf",
	                    "url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/files/2022-03-08/Udap6VdkLAJg_US-03%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB_-_%E1%84%80%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%82%E1%85%B2%E1%84%89%E1%85%B3%E1%84%80%E1%85%AA%E1%86%AB%E1%84%89%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A1_%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1.pdf",
	                    "size": 2945030
	                },
	                "attachType": "file"
	            }
	        ],
					"createdAt": "2020-11-16T09:49:25.214Z",
          "updatedAt": "2020-11-23T05:05:58.374Z",
	    } , {
	        "id": 2,
					"ownerId": 1,
	        "content": "언제 시작해요?",
					"createdAt": "2020-11-16T09:49:25.214Z",
          "updatedAt": "2020-11-23T05:05:58.374Z",
	    }
 ] 
*/