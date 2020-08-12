import React from 'react';
import { Button } from 'antd';
import { Field, reduxForm } from 'redux-form'
import styles from './LoginForm.module.css'
import PasswordInput from '../../../common/password-input/PasswordInput';
import { requeuedField } from '../../../../utils/Validators';
import TextInput from '../../../common/text-input/TextInput';
import CheckboxInput from '../../../common/checkbox-input/CheckboxInput';
import { Typography } from 'antd';

const { Text, Link } = Typography;

class LoginForm extends React.Component {
  render() {
    return (
      <form className={styles.form} onSubmit={this.props.handleSubmit}>
        <Field id={'email__Id'} name={'email'} labelText="Username" component={TextInput} type={"text"} validate={[requeuedField]} />
        <Field id={'password__Id'} name={'password'} labelText="Password" component={PasswordInput} type={"password"} validate={[requeuedField]} />
        <Field id={'rememberMe__Id'} name={'rememberMe'} labelText="Remember me" component={CheckboxInput} type={"checkbox"} />

        <div className={styles.loginDangerMessageBox}>
          <Text type="danger">{this.props.error}</Text>
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