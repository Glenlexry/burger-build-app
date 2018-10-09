import React from 'react';

import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button'

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
				<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
				<p>continue to checkout</p>
				<Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
				<Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
		</Aux>
	)
};

export default orderSummary;
