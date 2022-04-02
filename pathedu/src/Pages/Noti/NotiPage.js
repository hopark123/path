import { Link, Outlet } from "react-router-dom"
import noticelist from "../../Data/noticelist.json"
import { useAsync } from "react-async"
import { useState } from 'react';
import { CommentList, CreateComment} from "../../Componets/Comment"

async function NotiListGet({myaccessToken}) {
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
	const [comments, setComment] = useState({newComment:"",});

	return (
		<>
			{fileid} : {filename}<br/>
		</>
	)
}

function NotiOne(props) {
	const head = props.noti.content
	const [comments, setComment] = useState({newComment:"",});
	const notiId = props.noti.id
	
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
		/=====================\<br/>
			head : {head} <br/>
			{props.noti.attachments && props.noti.attachments.map((item) => {
				return (<NotiAttach notidetaillist={item} key={item.id}/>)
			})}
			<Link to ={{pathname : `${notiId}`,
			state : {
				notiId: `${notiId}`
			}}}>
			더보기
			<br/>
			</Link>
			<CommentList/>
			<CreateComment/>
			\=====================/<br/>
		</>
	)
}

const NotiList = async() => {
	const myaccessToken = localStorage.getItem("accessToken");
	// const response = await NotiListGet({myaccessToken})
	// console.log (noticelist)
	return (
	<>
		{noticelist.map((item) => {
			return (<NotiOne noti={item} key={item.id}/>)
		})}
	</>
	)
}

export function NotiPage() {
	const { data, error, isLoading } = useAsync({ promiseFn : NotiList})
	
	if (isLoading)
	return (
		"Noti Loading..."
	)
	if (error) return `Something went wrong: ${error.message}`
	if (data)
	return (
		<>
			공지<br/>
		<div>
			{data}
		</div>
		</>
	)
	return null
}



/*
response
[
    {
        "id": 1,
				"ownerId": 1,
        "content": "내일 기말고사입니다",
				"attachments": [
            {
                "id": 3,
                "fileinfo": {
                    "filename": "기말고사공지1.jpeg",
                    "url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
                    "smallUrl": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/small.RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
                    "size": 19044
                },
                "attachType": "image"
            },
            {
                "id": 4,
                "fileinfo": {
                    "filename": "기말고사공지2.jpeg",
                    "url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
                    "smallUrl": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/small.RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
                    "size": 19044
                },
                "attachType": "image"
            },
            {
                "id": 5,
                "fileinfo": {
                    "filename": "기말고사주의사항.pdf",
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
        "content": "이벤트 공지",
				"createdAt": "2020-11-16T09:49:25.214Z",
        "updatedAt": "2020-11-23T05:05:58.374Z",
    }
]
*/