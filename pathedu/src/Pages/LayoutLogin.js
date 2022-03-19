import { Link } from 'react-router-dom'

export function LayoutLoginHead(props){
	return (
		<>
			<h1>Path</h1>
			{props.id}
		</>
	);
}

export function LayoutLoginFooter(props){
	return (
		<>
			<Link to="/Login">
				<button>회사소개</button>
			</Link>
			<Link to="/Login">
				<button>이용약관</button>
			</Link>
			<Link to="/Login">
				<button>개인정보처리방침</button>
			</Link>
			<Link to="/Login">
				<button>고객센터</button>
			</Link>
		</>
	);
}