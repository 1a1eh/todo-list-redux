import cuid from 'cuid'

import { ADD } from '../action-types/index';

export const addList = (text) => {
	return {
		type: ADD,
		text,
		id: cuid()
	};
};
