import React, { Component } from 'react';

import {
  Link,
} from 'react-router-dom';

import {
    HeaderMenuContainer,
    HeaderMenuContent,
} from './styles';

class HeaderMenu extends Component {
  render() {
    return (
      <HeaderMenuContainer>
        <HeaderMenuContent>
          {
            this.props.user &&
              <div>
                <Link to="/create-post">Create post</Link>
                <Link to="/logout">Logout</Link>
              </div>
          }
          {
            !this.props.user &&
              <div>
                <Link to="/login">Login</Link>
                <Link to="/create-account">Create Account</Link>
              </div>
          }
          
        </HeaderMenuContent>
      </HeaderMenuContainer>
    );
  }
}

export default HeaderMenu;
