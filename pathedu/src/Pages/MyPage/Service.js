import { useState } from 'react';

export function Service() {
	const [select, SetSelect] = useState('')

	const onSelect = (e) => {
		e.preventDefault();
		if (select == '')
			SetSelect('selected');
		else
			SetSelect('');
	}
	return (
		<>
			<li className={select}>
				<a href="#" className="mym5">고객센터</a>
			</li>
		</>
	)

}