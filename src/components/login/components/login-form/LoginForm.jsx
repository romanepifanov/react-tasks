import React from 'react';
import { Button } from 'antd';
import { Field, reduxForm } from 'redux-form'
import styles from './LoginForm.module.css'

class LoginForm extends React.Component {
  render() {
    return (
      <form className={styles.form} onSubmit={this.props.handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="email__Id" className={styles.inputLabel}>
            Email
            <Field id={'email__Id'} className={styles.input} name={'email'} component={'input'} type={"text"} />
          </label>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="password__Id" className={styles.inputLabel}>
            Password
            <Field id={'password__Id'} className={styles.input} name={'password'} component={'input'} type={"password"} />
          </label>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="rememberMe__Id">
            Remember me
            <Field id={'rememberMe__Id'} className={styles.checkbox} name={'rememberMe'} component={'input'} type={"checkbox"} />
          </label>
        </div>


        <Button type='primary' htmlType='submit'>Submit</Button>
      </form>
    );
  }
}

const LoginFormContainer = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginFormContainer;