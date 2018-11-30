export default {
	namespace: 'puzzlecards',
	state: {
		data: [{
			id: 1,
			setup: 'Did you hear about the two silk worms in a race?',
			punchline: 'It ended in a tie'
		}, {
			id: 2,
			setup: 'What happens to a frog \'s car when it breaks down?',
			punchline: 'It gets toad away'
		}],
		counter: 100,
	},
	reducers: {
		/*
		reducer 干的事情和 React 中 setState(prevState => { ... }) 很像，
		都要返回一个新构造的对象，
		但区别是：
			reducer 的返回值会 整个取代 (Replace) 老的 state，
			而 setState 中回调函数的返回值是会 融合(Merge) 到老的 state 中去
		*/
		addNewCard(state, {payload: newCard}) {
			/*newCard = {punchline: '', setup: ''}*/
			const nextCounter = state.counter + 1;
			const newCardWithId = {id: nextCounter, ...newCard};
			const nextData = state.data.concat(newCardWithId);
			return {
				data: nextData,
				counter: nextCounter,
			}
		}
	}
};
