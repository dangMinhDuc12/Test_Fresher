const initialState = [];

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.listPost;

        case 'POST_DATA':
            const newState = [...state];
            newState.push(action.data);
            return newState;

        default:
            return state;
    }
};

export default postsReducer;
