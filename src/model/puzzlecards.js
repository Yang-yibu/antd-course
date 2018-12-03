import request from '../util/request';
import {message} from 'antd';

const delay = (millisecond) => {
	return new Promise((resolve) => {
		setTimeout(resolve, millisecond);
	})
};

export default {
	namespace: 'puzzlecards',
	state: {
		data: [
			/*{
				id: 1,
				setup: 'Did you hear about the two silk worms in a race?',
				punchline: 'It ended in a tie'
			}, {
				id: 2,
				setup: 'What happens to a frog \'s car when it breaks down?',
				punchline: 'It gets toad away'
			}*/
		],
		counter: 0,
	},

	effects: {
		* queryInitCards(_, sagaEffects) {
			const {call, put} = sagaEffects;
			const endPointURL = '/dev/random_joke';
			// const endPointURL = '/test/cardList';

			try {

				const puzzle = yield call(request, endPointURL);
				yield put({type: 'addNewCard', payload: puzzle});

				yield call(delay, 1000);

				const puzzle2 = yield call(request, endPointURL);
				yield put({type: 'addNewCard', payload: puzzle2});
			} catch (e) {
				message.error('数据获取失败');
			}
		}
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
