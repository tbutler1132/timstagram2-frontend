import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import ProfilePage from './Components/ProfilePage'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import AddPicture from './Components/AddPicture'
import {saveCurrentUserObj} from './Redux/action'
import {compose} from 'react'
import { connect } from 'react-redux'

function App(props) {
  const [userObj, setUserObj] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)

    if (token) {
      fetch(`http://localhost:3000/profile`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(r => r.json())
        .then(data => {
          setUserObj(data.user);
      })
      .catch(error => console.log(error))
    } else {
      props.history.push('/login')
    }
  }, []);

  const loginHandler = (userInfo) => {
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setUserObj(data.user)
      localStorage.setItem("token", data.jwt)
      props.history.push('/profile')
    })
    .catch(error => console.log(error))
  }

  const logoutHandler = () => {
    localStorage.removeItem("token")
    props.history.push("/login")
    setUserObj(null)
  }
  
  const updateUserPictures = (picture) => {
    userObj.pictures.push(picture)
    setUserObj(userObj)
  }

  const deleteUserPicture = (pictureId) => {
    const deletedPic = userObj.pictures.find(el => el.id === pictureId)
    const deletedPicIndex = userObj.pictures.indexOf(deletedPic)
    console.log(deletedPicIndex)
    userObj.pictures.splice(1, deletedPicIndex)
    setUserObj(userObj)
  }


  return (
    <div className="App">
      <NavBar logoutHandler={logoutHandler}/>
      <hr></hr>
      <Switch>
        <Route path="/login" render={() => <Login loginHandler={loginHandler}/>} />
        <Route path="/profile" render={() => <ProfilePage currentUserObj={userObj} deletePicture={deleteUserPicture}/>} />
        <Route path="/addPhoto" render={() => <AddPicture currentUserObj={userObj} updateUserPictures={updateUserPictures}/>} />
      </Switch>
    </div>
  );
}


const mapStateToProps = (state) => {
  // return {currentUserRedux: state.currentUserRedux}
}

const mapDispatchToProps = (dispatch) => {
  // return {fetchTracks: () => dispatch(getTracks())}
}

export default withRouter
(App);
