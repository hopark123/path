export function AttachImag (props) {
	const attachments = props.attachments
	let thumnail = "default"
	let imageCnt = 0;
	if (attachments) {
		attachments.map(item => {
			if (item.type == "image")
				imageCnt++;
				if (thumnail == "default")
					thumnail = item.fileName
			})
	}
	if (imageCnt)
	return (
	<>
		<img src={`/images/${thumnail}`} alt=""/>
	</>
	)
	else
		return(<></>)
}