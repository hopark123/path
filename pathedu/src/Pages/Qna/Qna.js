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
		{data}
		<input type = "button" value={"질문하기"} onClick={QnaAdd}/>
		</>
	  )
	return null
}