import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // when we call an action creator from inside of an action creator we need 
    // to make sure that we dispatch the result of calling the action creator 
    //step a1: call 'fetchPosts'
    await dispatch(fetchPosts()); // this will place the posts on the state
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
    console.log(userIds);

};

// step 4: action creator runs code to make an API request
export const fetchPosts = () => async dispatch => {
    // can passactions into the dispatch function 
    // dispatch allows you to change any data you want 
    // getState allows you to read or access any data you want 
    // step 5: api responds with data
    const response = await jsonPlaceholder.get('/posts');
    // step 6: action creator returns an 'action' with the fetched data on the 'payload' property
    dispatch({ type: 'FETCH_POSTS', payload: response.data }); 
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};








// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };
// this method will only allow you to get one user 
// if it updated and you wanted to call it again this method wouldnt let you 
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });