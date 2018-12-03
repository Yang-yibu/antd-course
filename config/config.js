export default {
	singular: true,
	plugins: [
		['umi-plugin-react', {
			antd: true,
			dva: true
		}]
	],
	routes: [{
		path: '/',
		component: '../layout',
		routes: [{
			path: '/',
			component: './HelloWorld',
		}, {
			path: '/helloWorld',
			component: './HelloWorld'
		}, {
			path: '/card',
			component: './Card'
		}, {
			path: 'puzzlecards', component: './puzzlecards'
		}, {
			path: '/dashboard',
			routes: [
				{path: '/dashboard/analysis', component: 'Dashboard/Analysis'},
				{path: '/dashboard/monitor', component: 'Dashboard/Monitor'},
				{path: '/dashboard/workplace', component: 'Dashboard/Workplace'}
			]
		}]
	}],
	proxy: {
		'/dev': {
			target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
			changeOrigin: true
		},
		'/test': {
			target: 'http://114.116.89.193:8999',
			changeOrigin: true
		},
	}
};
