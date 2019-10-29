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
        const { user } = this.props;

        if(!user) {
            return null;
        }

        return<div className="header">{user.name}</div>;
    }
}

// ownProps is a copy of the props that are passed in by the parent component
const mapStateToProps = (state, ownProps) => {
    // will return an array of all the users from redux combined reducers (from the )
    return { user: state.users.find(user => user.id === ownProps.userId) }; // this is the data 
    //
}

export default connect(
    mapStateToProps, 
    { fetchUser }
)(UserHeader);
