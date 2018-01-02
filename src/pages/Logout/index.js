import React, { Component } from 'react';

class Logout extends Component {

  componentWillMount() {
    fetch('/api/logout', {
      method: 'GET',
      credentials: 'include',
    })
    .then(window.location.href = '/');
  }

  render() {
    return (
      <div>
        Log out...
      </div>
    );
  }
}

export default Logout;
