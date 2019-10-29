import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    // called on load 
    componentDidMount () {
        //pass in the userId as a prop from PostList. userId, exist on the
        // post json 
        this.props.fetchUser(this.props.userId); // call the action creator
    }
    render() {
        return<div>User Header</div>;
    }
}

// const mapStateToProps = (state) => {
//     return { posts: state.posts }; // this is the data 
// }

// export default UserHeader;
export default connect(
    null, 
    { fetchUser }
)(UserHeader);
