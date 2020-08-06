import React from 'react';
import Header from './Header';

class HeaderAPIContainer extends React.Component {
  authState = null;

  componentDidMount() {
    if (!this.props.owner) {
      this.props.setOwner();
    }
  }

  render() {
    return <Header store={this.props.store} />
  };
}

export default HeaderAPIContainer;
