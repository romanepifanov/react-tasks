import React from 'react';
import { Descriptions, Col, Typography } from 'antd';

const { Paragraph } = Typography;

class UserInfo extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };


    onChange = value => {
        this.setState({
            status: value
        },
            this.props.updateProfileStatus(value)
        );
    };


    render() {
        return (
            <Col span={18}>
                <Descriptions title={this.props.profile.fullName}>
                    <Descriptions.Item label="About me">
                        <Paragraph ellipsis={{ rows: 1, expandable: false }} editable={{ onChange: this.onChange }}>
                            {this.state.status}
                        </Paragraph>
                    </Descriptions.Item>
                </Descriptions>
            </Col>
        );
    }

}

export default UserInfo;