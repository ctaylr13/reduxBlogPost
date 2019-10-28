import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    // componentDidMount is called on load by react 
    // step 2: components 'componentDidMount' lifecycle method gets called
    componentDidMount() {
        // the instant this component gets loaded on the screen the fetchpost action will be called
        // step 3: we call action creator from 'componentDidMount'
        this.props.fetchPosts();
    }

    render() {
        // step 1: component gets rendered onto screen
        return <div>Post List</div>;
    }
}

// need EVERYTHING to go through the connect method 
// first argument is mapStateToProps, followed by the action
// second argument is the componet that its actually tied to
export default connect(
    null, 
    { fetchPosts }
)(PostList);