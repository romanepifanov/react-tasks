import React from 'react';
import { Button } from 'antd';
import { Field, reduxForm } from 'redux-form'
import styles from './PostForm.module.css'

class PostForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={styles.form}>
                <Field id={'email__Id'} className={styles.textarea} name={'content'} component={'textarea'} />

                <Button type="primary" htmlType="submit">Submit</Button>
            </form>
        );
    }
}

const PostFormContainer = reduxForm({
    form: 'postForm'
})(PostForm)

export default PostFormContainer;