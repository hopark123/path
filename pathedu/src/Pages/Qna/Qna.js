import { useState } from 'react';
import { useAsync } from "react-async"
import { QnaList } from "./QnaList"
import { useNavigate } from "react-router-dom";

export function QnaPage() {
	const { data, error, isLoading } = useAsync({ promiseFn : QnaList})
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
							</div>
						</div>
					</div>
				</main>
		</>
	  )
	return null
}