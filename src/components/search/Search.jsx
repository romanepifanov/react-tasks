import React from 'react';
import style from './Search.module.css';
import User from './components/user/User';
import { Button } from 'antd';
import UserSkeleton from './components/users-skeleton/UserSkeleton';

class Search extends React.Component {
    render() {

        if (this.props.users.length > 0) {
            return (
                <main className={style.search}>
                    {this.props.users.map((u, key) => <User key={key} user={u} followingInProgress={this.props.followingInProgress} onChangeFollow={this.props.onChangeFollow} />)}
                    <Button disabled={!this.props.haveMore} onClick={this.props.onLoadMore}>Load More</Button>
                </main>);
        } else {
            return (
                <main className={style.search}>
                    <UserSkeleton count={10} />
                </main>);
        }
    }
}

export default Search;