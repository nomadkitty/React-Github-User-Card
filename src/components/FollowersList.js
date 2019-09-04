import React from "react";
import axios from "axios";

import UserCard from './UserCard';

class FollowersList extends React.Component{
  constructor(){
    super();
    this.state = {
      follower: {}
    }
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/${this.props.login}`)
    .then(res => {
      console.log(res.data);
      this.setState({ follower: res.data })
    })
    .catch(err => console.log(err))
    
  }

  render() {
  return(
    <>
     <UserCard users={this.state.follower} />
    </>
  )}
}


export default FollowersList;