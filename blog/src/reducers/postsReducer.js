// maintains a list returning from the post api 
// remember return any value besides undefined
export default (state = [], action) => {
    // step 7: some reducer sees the action, returns the data off the 'payload'
    switch (action.type) {
        case 'FETCH_POSTS':
        // will cause the app to rerender 
            return action.payload;
        default:
            return state;
    }
};