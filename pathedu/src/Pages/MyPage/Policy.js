import { useState } from 'react';

export  function Policy() {
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
			<li><a href="#" className="mym4">개인정보처리방침</a></li>
		</>
	)
}
