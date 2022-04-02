export function AttachImag (props) {
	const attachments = props.attachments
	let thumnail = "default"
	let imageCnt = 0;
	if (attachments) {
		attachments.map(item => {
			if (item.attachType == "image")
				imageCnt++;
				if (thumnail == "default")
					thumnail = item.fileinfo.filename
			})
	}
	if (imageCnt)
	return (
	<>
		<img thumnail={`/images/${thumnail}`} width="44" height="44"/>
		{thumnail}
		{imageCnt} <br/>
	</>
	)
	else
		return(<></>)
}