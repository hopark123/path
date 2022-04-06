export function Attachment (props) {
	const attachments = props.attachments
	let filename = "";
	if (attachments) {
		attachments.map(item => {
			if (item.attachType == "file")
					filename = item.fileinfo.filename
			})
	};
	if (filename)
		return (
		<>
			{filename}
			<br/>
		</>
	)
	else
		return(<></>)
}
