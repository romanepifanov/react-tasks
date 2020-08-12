import React from 'react';
import { Form, Input } from 'antd';

class PasswordInput extends React.Component {

    validating = () => {
        return this.props.meta.error && this.props.meta.touched
    }

    render() {
        return (
            <Form.Item
                label={this.props.labelText}
                validateStatus={this.validating() ? 'error' : undefined}
                help={this.validating() ? this.props.meta.error : undefined}
            >
                <Input.Password {...this.props.input} id={this.props.id} />
            </Form.Item>
        );
    }
}

export default PasswordInput;