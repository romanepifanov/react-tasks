import React from 'react';
import axios from 'axios';
import Search from './Search';
import environment from '../../environment';

class SearchAPIContainer extends React.Component {
    componentDidMount() {
        this.onLoadMore();
    }

    onLoadMore = () => {
        let page = this.props.users.length === 0 ? 1 : (this.props.users.length / 10) + 1;

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`, { withCredentials: true })
            .then(response => {
                this.props.onLoadMore(response.data.items, response.data.totalCount);
            });
    }

    onChangeFollow = (userId, followed) => {
        if (followed) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": environment.API_KEY
                    }
                }).then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.onChangeFollow(userId);
                    }
                });
        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": environment.API_KEY
                    }
                })
                .then(response => {
                    if (response.data.resultCode === 0) {
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