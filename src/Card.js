import React from 'react';

const Card = (props) => {
	const {name , email , id} = props;
	return (
		<div className = "bg-blue tc dib br3 pa1 ma2 grow bw2 shadow-5">
			<img src= {'https://robohash.org/' + id + '?200*200'} alt='robot' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;