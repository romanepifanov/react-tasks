import React from 'react';
import style from './Login.module.css';
import { Typography } from 'antd';
import LoginFormContainer from './components/login-form/LoginForm';
import { Redirect } from 'react-router-dom';

const { Title } = Typography;

class Login extends React.Component {

  render() {
    console.log(this.props);
    
    if(!this.props.isNeedLogin && this.props.owner) {
      return (
        <Redirect to={`profile/${this.props.owner.userId}`} />);
    } else {
      return (
        <main className={style.login}>
          <Title className={style.title} level={2}>Login</Title>
  
          <LoginFormContainer onSubmit={this.props.onSubmit}/>
        </main>);
    }
  }
}

export default Login;