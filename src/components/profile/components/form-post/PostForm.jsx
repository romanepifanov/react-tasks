import React from 'react';
import {Form, Input, Button} from 'antd';

const PostForm = (props) => {
    return (
         <Form name="nest-messages" onFinish={props.onAddPost}>
            <Form.Item>
                <Input.TextArea onChange={props.onChangePost} value={props.content}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
}

export default PostForm;