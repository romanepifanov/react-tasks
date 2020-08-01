import React from 'react';
import Header from './Header';
import { getStatusCall } from '../../api/api-service';

class HeaderAPIContainer extends React.Component {
  authState = null;

  componentDidMount() {
    if (!this.props.owner && !this.props.isNeedLogin) {
      getStatusCall().then(data => {
          if(data.messages[0] === "You are not authorized") {
            this.props.onNeedLogin(true);
          } else {
            this.props.onSetOwner(data.data);
            this.props.onSetOwnerId(data.data.id);
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
