import React from 'react';
import Header from './Header';

class HeaderAPIContainer extends React.Component {

  componentDidMount() {
    if (this.props.owner === null) {
      this.props.setOwner();
    }
  }

  eventHandler = () => {
    if (this.props.owner !== null) {
      this.props.logout();
    }
  }

  render() {
    return <Header store={this.props} eventHandler={this.eventHandler} />
  };
}

export default HeaderAPIContainer;
