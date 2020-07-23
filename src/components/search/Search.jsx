import React from 'react';
import style from './Search.module.css';
import User from './components/user/User';
import axios from 'axios';

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then( response => {
            this.props.onSetUsers(response.data.items);
        });
    }

    render() {
      return <main className={style.search}>
                {this.props.users.map((u, key) => <User key={key} user={u} onChangeFollow={this.props.onChangeFollow}/>)}
             </main>
    }
}

export default Search;