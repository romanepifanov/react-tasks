import React from 'react';
import Header from './Header';
import { useHistory } from "react-router-dom";

class HeaderAPIContainer extends React.Component {

  componentDidMount() {
    if (!this.props.owner) {
      this.props.setOwner();
    }
  }

  eventHandler = () => {
    if (this.props.owner) {
      this.props.logout();
    }
  }

  render() {
    return <Header store={this.props} eventHandler={this.eventHandler} />
  };
}

export default HeaderAPIContainer;
