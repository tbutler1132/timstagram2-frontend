import React from 'react';
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
import axios from 'axios'

function FollowButton(props) {

    const thisProfileFollowerDoc = () => {
        return props.userObj.followers.find(user => user.userId === props.loggedInUser._id)
    }

    const loggedInUserFolloweeDoc = () => {
        return props.loggedInUser.followees.find(user => user.userId === props.userObj._id)
    }


    const followUser = () => {
        const newFollow = {
            userId: props.userObj._id,
            username: props.userObj.username,
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            data: newFollow
        }
        axios(`http://localhost:7000/users/${props.loggedInUser._id}/follow`, options)
        .then(followed => {
            console.log(followed)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }



    const unfollowUser = () => {

        const payload = {
            followeeDocId: loggedInUserFolloweeDoc()._id,
            followerDocId: thisProfileFollowerDoc()._id,
            followeeId: props.userObj._id
        }

        const options = {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            data: payload
        }

        axios(`http://localhost:7000/users/${props.loggedInUser._id}/follow`, options)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log('Error:', error);
        });

    }

    return (
        <div>
            {!props.following ? 
            <Button variant="outlined" onClick={followUser}>Follow</Button>
            :
            <Button variant="outlined" onClick={unfollowUser}>Unfollow</Button>
            }
        </div>
    );
}

const mdp = (dispatch) => {
    return {
        addFollow: (followObj) => dispatch({type: "follow", payload: followObj}),
        unFollow: (followObj) => dispatch({type: "unfollow", payload: followObj})
    }
}

export default connect(null, mdp)(FollowButton);