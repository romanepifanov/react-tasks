import React from 'react';
import { Form, Checkbox } from 'antd';

class CheckboxInput extends React.Component {

    validating = () => {
        return this.props.meta.error && this.props.meta.touched 
    }

    render() {
        console.log(this.props)
        return (
            <Form.Item
                validateStatus={ this.validating() ? 'error' : undefined}
                help={ this.validating() ? this.props.meta.error : undefined }
            >
                <Checkbox {...this.props.input} id={this.props.id}>{this.props.labelText}</Checkbox>
            </Form.Item>
        );
    }
}

export default CheckboxInput;