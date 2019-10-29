import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    // componentDidMount is called on load by react 
    // step 2: components 'componentDidMount' lifecycle method gets called
    componentDidMount() {
        // the instant this component gets loaded on the screen the fetchpost action will be called
        // step 3: we call action creator from 'componentDidMount'
        this.props.fetchPosts(); //this is the action
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
            );
        });
    }

    render() {
        // step 1: component gets rendered onto screen
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
        // return <div>{props.posts}</div>
    }
}

const mapStateToProps = (state) => {
    // pulls the posts reducers from the combined reducers (reducers hold the action)
    // thats held in redux via state.posts
    return { posts: state.posts }; // this is the data 
}

// need EVERYTHING to go through the connect method 
// first argument is mapStateToProps, followed by the action
// second argument is the componet that its actually tied to
export default connect(
    mapStateToProps, 
    { fetchPosts }
)(PostList);