import React from 'react';

import Aux from '../../../hoc/Aux1';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return <li key={igKey}>
				<span style={{textTransformation: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
		})
	return (
		<Aux>
			<h3>Your Order</h3>
				<p>Ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p>continue to checkout</p>
		</Aux>
	)
};

export default orderSummary;
