import React from 'react';

function FollowButton(props) {

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
            console.log(data)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    return (
        <div>
            <button onClick={followUser}>Follow</button>
        </div>
    );
}

export default FollowButton;