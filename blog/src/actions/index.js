import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

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

export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
})