import React from 'react';


const SerachBox = ({searchChange}) => {
	return (
		<div className="pa2">
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='serach robots' 
			onChange = {searchChange}
			/>
		</div>
	)
}

export default SerachBox;