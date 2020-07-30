import React from 'react';
import axios from 'axios';
import Header from './Header';

class HeaderAPIContainer extends React.Component {
  authState = null;

  componentDidMount() {
    if (!this.props.owner && !this.props.isNeedLogin) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
          if(response.data.messages[0] === "You are not authorized") {
            this.props.onNeedLogin(true);
          } else {
            this.props.onSetOwner(response.data.data);
            this.props.onSetOwnerId(response.data.data.id);
          }
        });
    } else {
      // need redirect to login
    }
  }

  render() {
    return <Header store={this.props.store} />
  };
}

export default HeaderAPIContainer;
