import React from 'react';

const Picture = (props) => {
	return (
		<div>
			<img src={props.src} width="100" height="100" />
			<p>[Picture:props.children]: {props.children}</p>
			{/* <p>[Picture:pros]: { JSON.stringify(props) }</p> */}
		</div>
	)
}

class ShoppingList extends React.Component {
	render () {
		const picture = {
			src: 'https://tse1.mm.bing.net/th?id=OIP.4-LZJ4k6AFl_aN1_W0WzPgHaHa&pid=Api&w=300&h=300&rs=1&p=0',
			txt: 'hahah'
		};
		return (
			<div className="shopping-list">
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
					<li>[Shopping:this.props]: {JSON.stringify(this.props)}</li>
				</ul>
				<div className="contanier">
					<Picture src={picture.src}>
						/* 嘻嘻 */
						{picture.txt}
					</Picture>
				</div>
			</div>
		)
	}
}

export default ShoppingList;
