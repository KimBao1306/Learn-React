const {createSlice} = require('@reduxjs/toolkit');

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increase: (state, action) => ++state,
		decrease: (state, action) => --state,
	},
});
const {actions, reducer: counterReducer} = counterSlice;
export const {increase, decrease} = actions;
export default counterReducer;
