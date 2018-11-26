import React from 'react';
import ShoppingList from './shoppinglist.js';
import { Square } from './componentState'

export default () => {
	return (
		<div>
			<h1>hello world</h1>
			<ShoppingList name="张三" />

			<h2>State 内部状态</h2>
			<Square />
		</div>
	)
}
