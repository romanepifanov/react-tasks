import React from 'react';
import { Descriptions, Col, Typography } from 'antd';

const { Paragraph } = Typography;

class UserInfo extends React.Component {
    state = {
        editMode: false,
        aboutMe: '',
    };


    onChange = value => {
        this.setState({ aboutMe: value })
    };


    render() {
        return (
            <Col span={18}>
                <Descriptions title={this.props.profile.fullName}>
                    <Descriptions.Item label="About me">
                        <Paragraph ellipsis={{ rows: 1, expandable: false }} editable={{ onChange: this.onChange }}>
                            {this.state.aboutMe}
                        </Paragraph>
                    </Descriptions.Item>
                </Descriptions>
            </Col>
        );
    }

}

export default UserInfo;