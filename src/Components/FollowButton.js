import React from 'react';
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'

function FollowButton(props) {

    console.log(props.userObj)

    const followUser = () => {
        const newFollow = {
            followee_id: props.userObj.id,
            follower_id: props.loggedInUser.id,
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ follow: newFollow })
        }
        fetch("http://localhost:3000/follows", options)
        .then(r => r.json())
        .then(data => {
            props.userObj.user_id = props.loggedInUser.id
            props.addFollow(props.userObj)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }



    const unfollowUser = () => {

        fetch(`http://localhost:3000/follows`, {
        })
        .then(r => r.json())
        .then(data => {
            
            const followId = () => { 
                return data.find(follow => follow.follower_id === props.loggedInUser.id && follow.followee_id === props.userObj.id
            ).id}
            fetch(`http://localhost:3000/follows/${followId()}`, {
                method: 'DELETE',
            })
            .then(r => r.json()) 
            .then(data => {
                props.userObj.user_id = props.loggedInUser.id
                props.unFollow(props.userObj)
            }
            )

        })

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