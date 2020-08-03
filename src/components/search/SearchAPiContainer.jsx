import React from 'react';
import Search from './Search';

class SearchAPIContainer extends React.Component {

    componentDidMount() {
        this.onLoadMore();
    }

    onLoadMore = () => {
        let page = this.props.users.length === 0 ? 1 : (this.props.users.length / 10) + 1;

        this.props.getUsers(page);
    }

    onChangeFollow = (userId, followed) => {
        followed ? this.props.deleteFollow(userId) : this.props.addFollow(userId);
    }

    render() {
        return <Search onChangeFollow={this.onChangeFollow} onLoadMore={this.onLoadMore} followingInProgress={this.props.followingInProgress} haveMore={this.props.haveMore} users={this.props.users} />
    }
}

export default SearchAPIContainer;