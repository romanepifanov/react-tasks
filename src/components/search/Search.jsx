import React from 'react';
import style from './Search.module.css';
import User from './components/user/User';

const Search = (props) => {
    return (
        <main className={style.search}>
            {props.users.map((u, key) => <User key={key} user={u} onChangeFollow={props.onChangeFollow}/>)}
            Search
        </main>
    );
}

export default Search;