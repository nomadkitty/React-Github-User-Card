import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import FollowersList from './components/FollowersList';

import './App.css';

class App extends React.Component {

  state = {
    users: {},
    followers: [],
  };

  getUser = () => {
    axios
    .get('https://api.github.com/users/nomadkitty')
    // .then(res => console.log(res))
    .then(res => {
      console.log(res);
      this.setState({ users: res.data })})
    .catch(err => console.log(err));
  }

  getFollowers = () => {
    axios
    .get(`https://api.github.com/users/nomadkitty/followers`)
    .then(res => {
      console.log(res.data);
      this.setState({ followers: res.data })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getUser();
    this.getFollowers();
  }

  
  render() {
    return (
      <div className="app">
        <h1>React Github User Cards</h1>
        <div className="cardBox">
          <UserCard users = {this.state.users} />
          {this.state.followers.map(item => <FollowersList key={item.id} login={item.login}  />)}
        </div>
      </div>
    );
  }
}

export default App;
