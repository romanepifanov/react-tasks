import React from 'react';
import {Form, Input, Button} from 'antd';

const PostForm = (props) => {
    return (
         <Form name="new-post-form" onFinish={props.onAddPost}>
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