import React from 'react';
import { Button } from 'antd';
import { Field, reduxForm } from 'redux-form'
import styles from './PostForm.module.css'
import { requeuedField } from '../../../../utils/Validators';
import Textarea from '../../../common/teaxtarea/Textarea';

class PostForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={styles.form}>
                <Field id={'content__Id'} name={'content'} component={Textarea} validate={[requeuedField]}/>

                <Button type="primary" htmlType="submit">Submit</Button>
            </form>
        );
    }
}

const PostFormContainer = reduxForm({
    form: 'postForm'
})(PostForm)

export default PostFormContainer;