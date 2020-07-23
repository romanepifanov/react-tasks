import React from 'react';
import style from './Search.module.css';
import User from './components/user/User';
import axios from 'axios';
import { Button } from 'antd';

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let page = this.props.users.length === 0 ? 1 : (this.props.users.length / 10) + 1;

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
        .then( response => {
            this.props.onSetUsers(response.data.items, response.data.totalCount);
        });
    }

    loadMore = () => {
        let page = this.props.users.length === 0 ? 1 : (this.props.users.length / 10) + 1;

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
        .then( response => {
            this.props.onLoadMore(response.data.items, response.data.totalCount);
        });  
    }

    render() {
      return <main className={style.search}>
                {this.props.users.map((u, key) => <User key={key} user={u} onChangeFollow={this.props.onChangeFollow}/>)}
                <Button onClick={this.loadMore}>Load More</Button>
             </main>
    }
}

export default Search;