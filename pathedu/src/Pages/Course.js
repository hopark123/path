import { useAsync } from "react-async"

async function getVod({myaccessToken}) {

	return fetch('https://www.mecallapi.com/api/auth/user', {
	  method: 'GET',
	  headers: {
		"Authorization": 'Bearer ' + myaccessToken
	  }
	})
	.then(data => data.json())
}

const Vodlist = async() => {
	const myaccessToken = localStorage.getItem("accessToken");
	const response = await getVod({myaccessToken});
	console.log(response)
	return (
		<>
			{response}
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
		  <pre>{JSON.stringify(data, null, 1)}</pre>
		</div>
	  )
	return null
}


/*
{
    "trID": "20201123050616252363",
    "resultCode": "200",
    "resultMsg": "Get Course List OK",
    "resultData": [
				{
		        "id": 1,
						"ownerId": 1,
		        "content": "수학의 정석",
						"attachments": [
		            {
		                "id": 3,
		                "fileinfo": {
		                    "filename": "강의 섬네일1.png",
		                    "url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
		                    "smallUrl": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/small.RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
		                    "size": 19044
		                },
		                "attachType": "image"
		            },
		        ],
				"lectureCount": 2,
				"createdAt": "2020-11-16T09:49:25.214Z",
		        "updatedAt": "2020-11-23T05:05:58.374Z",
		    },
				{
		        "id": 2,
						"ownerId": 1,
		        "content": "수학2의 정석",
						"attachments": [
		            {
		                "id": 5,
		                "fileinfo": {
		                    "filename": "강의 섬네일2.png",
		                    "url": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
		                    "smallUrl": "https://cdn.path.how/dev/feed/10000017f686f22cdec9dbcebb09854002/images/2022-03-08/small.RKugJfuasQnF_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2.jpeg",
		                    "size": 19044
		                },
		                "attachType": "image"
		            },
		        ],
						"lectureCount": 2,
						"createdAt": "2020-11-16T09:49:25.214Z",
		        "updatedAt": "2020-11-23T05:05:58.374Z",
		    },
		]
}
*/