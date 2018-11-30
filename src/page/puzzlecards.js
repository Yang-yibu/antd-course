import React, {Component} from "react";
import {Card/*, Button*/} from "antd";
import {connect} from "dva";

// Redux DecTools 可以展示 Dav 中 state 的内容
const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
	const cardList = state[namespace];
	return {
		cardList,
	}
};

@connect(mapStateToProps)
export default class PuzzleCardsPage extends Component {
	/*constructor(props) {
		super(props);
		this.state = {
			cardList: [
				{
					id: 1,
					setup: 'Did you hear about the two silk worms in a race?',
					punchline: 'It ended in a tie'
				}, {
					id: 2,
					setup: 'What happens to a frog\'s car when it breaks down?',
					punchline: 'It gets toad away'
				},
			],
		}
	}*/

	/**
	 * TODO: 1. addNewCard = () => {} 与 2. addNewCard () {} 区别
	 * 猜测 1 应该是 ES6 中箭头函数在类中具名的一种写法
	 * 2 ES6 中 对象中方法的简写
	 *
	 * ES7 属性初始化器语法：正确绑定回调函数
	 * https://react.docschina.org/docs/handling-events.html
	 */
	/*addNewCard = () => {
		this.setState(prevState => {
			const prevCardList = prevState.cardList;
			this.counter += 1;
			const card = {
				id: this.counter,
				setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			};

			return {
				cardList: prevCardList.concat(card)
			}
		});
	};*/

	render() {
		return (
			<div>
				{
					this.props.cardList.map(card => {
						return (
							<Card key={card.id}>
								<div>Q: {card.setup}</div>
								<div>
									<strong>A: {card.punchline}</strong>
								</div>
							</Card>
						)
					})
				}

				{/*<div>
					<Button onClick={this.addNewCard}>添加卡片</Button>
				</div>*/}
			</div>
		)
	}
}

