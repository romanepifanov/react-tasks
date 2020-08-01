import React from 'react';
import Search from './Search';
import { getUsersCall, deleteFollowCall, addFollowCall } from '../../api/api-service';

class SearchAPIContainer extends React.Component {

    componentDidMount() {
        this.onLoadMore();
    }

    onLoadMore = () => {
        let page = this.props.users.length === 0 ? 1 : (this.props.users.length / 10) + 1;

        getUsersCall(page).then((data) => this.props.onLoadMore(data.items, data.totalCount));
    }

    onChangeFollow = (userId, followed) => {
        if (followed) {
            deleteFollowCall(userId).then(data => {
                if (data.resultCode === 0) {
                    this.props.onChangeFollow(userId);
                }
            });
        } else {
            addFollowCall(userId).then(data => {
                if (data.resultCode === 0) {
                    this.props.onChangeFollow(userId);
                }
            });
        }
    }

    render() {
        return <Search onChangeFollow={this.onChangeFollow} onLoadMore={this.onLoadMore} haveMore={this.props.haveMore} users={this.props.users} />
    }
}

export default SearchAPIContainer;