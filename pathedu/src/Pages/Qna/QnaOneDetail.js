import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import qnaDetail from "../../Data/qnaDetail.json"
import { AttachImag, Attachment } from "../../Componets/Attachment"

async function getQnaDetail({classId, feedId}) {
	return fetch('https://www.mecallapi.com/api/auth/user', {
	  method: 'GET',
	  headers: {
		'Content-Type': 'application/json',
		'Country': 'KR',
		'Authorization' : 'Bearer xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx',
		'Reauthorization' : 'Bearer xxxxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx'
	  }
	})
	.then(data => data.json())
}


export function QnaOneDetail(props) {
	const [open, setOpen] = useState(true)
	const navigate = useNavigate();
	const params = useParams();
	console.log(params)

	const modalOpen = (e) => {
		e.preventDefault();
		setOpen(false)
		navigate("/home/qna");
	}
	// console.log(localStorage)
	console.log(qnaDetail)
	const comment = qnaDetail.content
	const attachments = qnaDetail.attachments
	return (
		<>
		<Modal isOpen={open} ariaHideApp={false} name="modal">
			<input type="button" value="X" onClick={modalOpen} name="x"/><br/>
			{params.id} <br/>
			{comment} <br/>
			<AttachImag attachments={attachments}/>
			<Attachment attachments={attachments}/>
		</Modal>
		</>
	)
}


/*

{
    "id": 1,
		"ownerId": 1,
    "content": "이거 어떻게 풀어요?",
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
}
*/