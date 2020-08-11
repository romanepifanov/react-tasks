import React from 'react';
import { Form, Input } from 'antd';
import styles from './Textarea.module.css';

class Textarea extends React.Component {

    validating = () => {
        return this.props.meta.error && this.props.meta.touched 
    }

    render() {
        return (
            <Form.Item
                className={styles.textareaBox}
                validateStatus={ this.validating() ? 'error' : undefined}
                help={ this.validating() ? this.props.meta.error : undefined }
            >
                <Input.TextArea {...this.props.input} className={styles.textarea} id={this.props.id} />
            </Form.Item>
        );
    }
}

export default Textarea;