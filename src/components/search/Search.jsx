import React from 'react';
import style from './Search.module.css';
import User from './components/user/User';
import { Button } from 'antd';

class Search extends React.Component {
    render() {
        return <main className={style.search}>
            {this.props.users.map((u, key) => <User key={key} user={u} followingInProgress={this.props.followingInProgress} onChangeFollow={this.props.onChangeFollow} />)}
            <Button disabled={!this.props.haveMore} onClick={this.props.onLoadMore}>Load More</Button>
        </main>
    }
}

export default Search;