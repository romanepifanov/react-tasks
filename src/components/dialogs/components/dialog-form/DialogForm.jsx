import React from 'react';
import styles from './DialogForm.module.css';
import { Button } from 'antd';
import { Field, reduxForm } from 'redux-form'
import Textarea from '../../../common/teaxtarea/Textarea';
import { requeuedField } from '../../../../utils/Validators';

class DialogForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={styles.form}>
                <Field id={'email__Id'} name={'content'} component={Textarea} validate={[requeuedField]}/>

                <Button type="primary" htmlType="submit">Submit</Button>
            </form>
        );
    }
}

const DialogFormContainer = reduxForm({
    form: 'dialogForm'
})(DialogForm)

export default DialogFormContainer;