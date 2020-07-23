import React from 'react';
import axios from 'axios';
import Search from './Search';

class SearchAPiContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.onLoadMore();
    }

    onLoadMore = () => {
        let page = this.props.users.length === 0 ? 1 : (this.props.users.length / 10) + 1;

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
            .then(response => {
                this.props.onLoadMore(response.data.items, response.data.totalCount);
            });
    }

    render() {
        return <Search onChangeFollow={this.props.onChangeFollow} onLoadMore={this.onLoadMore} haveMore={this.props.haveMore} users={this.props.users} />
    }
}

export default SearchAPiContainer;