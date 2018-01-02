import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from '../../modules/Header';
import Home from '../../pages/Home';
import Post from '../../pages/Post';
import CreatePost from '../../pages/CreatePost';
import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import CreateAccount from '../../pages/CreateAccount';

import {
    MainTemplate,
} from './styles';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: undefined,
    }
  }

  componentWillMount() {
    fetch('/api/auth', {
      method: 'GET',
      credentials: 'include',
    })
    .then(results => {
      return results.json()
    }).then(data => {
      if(data.user){
        this.setState({user: data.user})
      }
    })
  }

  render() {
    return (
      <Router>
        <MainTemplate>
            <Header user={this.state.user} />
            <Route exact path="/" component={Home}/>
            <Route path="/storie" component={Post}/>
            <Route path="/create-post" component={CreatePost}/>
            <Route path="/login" component={Login}/>
            <Route path="/create-account" component={CreateAccount}/>
            <Route path="/logout" component={Logout}/>
        </MainTemplate>
      </Router>
    );
  }
}

export default Main;
