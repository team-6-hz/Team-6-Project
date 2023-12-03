export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/activities": [3],
		"/chat": [4],
		"/crud": [5],
		"/example": [~6],
		"/home": [7],
		"/profilepage": [8]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';