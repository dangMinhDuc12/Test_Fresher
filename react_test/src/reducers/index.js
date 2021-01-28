import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

const mainReducers = combineReducers({
    posts: postsReducer,
});

export default mainReducers;
