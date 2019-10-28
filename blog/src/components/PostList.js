import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    // componentDidMount is called on load by react 
    componentDidMount() {
        // the instant this component gets loaded on the screen the fetchpost action will be called
        this.props.fetchPosts();
    }

    render() {
        // component passed in 
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