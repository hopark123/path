import { useState } from 'react';
import { useAsync } from "react-async"
import { QnaList } from "./QnaList"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export function QnaPage() {
	const { data, error, isLoading } = useAsync({ promiseFn: QnaList })
	const [QnaAddOn, setQnaAddOn] = useState(true);

	const navigate = useNavigate();
	const QnaAdd = (e) => {
		e.preventDefault();
		setQnaAddOn(false);
		navigate("add");
	}

	if (isLoading)
		return (
			"Loading..."
		)
	if (error) return `Something went wrong: ${error.message}`
	if (data)
		return (
			<>
				<main id="snContent" className="class-w">
					<div className="mtit">
						<h2>질문</h2>
					</div>
					<div className="contents-w">
						<div className="conts-inner type2">
							<div className="box-wrap">
								{data}
								<div className="cnts-box">
									<div className="no-cnts">
										<p>등록된 질문이 없어요.<br />첫 질문을 남겨보세요!</p>
									</div>
								</div>
								<div className="q-btn">
									<Link to="/home/qna/write">
										<button type="button">질문하기</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</main>
			</>
		)
	return null
}