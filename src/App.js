import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import ProfilePage from './Components/ProfilePage'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import AddPicture from './Components/AddPicture'
import ProfileContainer from './Components/ProfileContainer'


function App(props) {
  const [userObj, setUserObj] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token")

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
    const newUserObj = {...userObj}
    newUserObj.pictures.splice(1, deletedPicIndex)
    setUserObj(newUserObj)
  }


  return (
    <div className="App">
      <NavBar currentUserObj={userObj} logoutHandler={logoutHandler}/>
      <hr></hr>
      <Switch>
        <Route path="/login" render={() => <Login loginHandler={loginHandler}/>} />
        <Route path="/profile" render={() => <ProfilePage currentUserObj={userObj} deletePicture={deleteUserPicture}/>} />
        <Route path="/addPhoto" render={() => <AddPicture currentUserObj={userObj} updateUserPictures={updateUserPictures}/>} />
        <Route path="/profiles" render={() => <ProfileContainer currentUserObj={userObj} updateUserPictures={updateUserPictures}/>} />
      </Switch>
    </div>
  );
}

export default withRouter
(App);
