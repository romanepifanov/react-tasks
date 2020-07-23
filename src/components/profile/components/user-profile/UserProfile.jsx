import React from 'react';
import { Descriptions, Skeleton, Avatar, Row, Col, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkOutlined, YoutubeOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';

const UserProfile = (props) => {

    if (!props.profile) {
        return <Skeleton />
    }

    return (
        <Row>
            <Row gutter={[8, 24]}>
                <Col span={6}>
                    <Avatar shape="square" size={200} src={props.profile.photos.large} />
                </Col>
                <Col span={18}>
                    <Descriptions title={props.profile.fullName}>
                        <Descriptions.Item label="About me">{props.profile.aboutMe}</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
            <Row gutter={[8, 24]}>
                <Col>
                    <Space>
                        <a target='blank' hidden={!props.profile.contacts.facebook} href={props.profile.contacts.facebook}>
                            <FacebookOutlined style={{ fontSize: '32px' }} />
                        </a>
                        <a target='blank' hidden={!props.profile.contacts.github} href={props.profile.contacts.github}>
                            <GithubOutlined style={{ fontSize: '32px' }} />
                        </a>
                        <a target='blank' hidden={!props.profile.contacts.instagram} href={props.profile.contacts.instagram}>
                            <InstagramOutlined style={{ fontSize: '32px' }} />
                        </a>
                        <a target='blank' hidden={!props.profile.contacts.mainLink} href={props.profile.contacts.mainLink}>
                            <MailOutlined style={{ fontSize: '32px' }} />
                        </a>
                        <a target='blank' hidden={!props.profile.contacts.twitter} href={props.profile.contacts.twitter}>
                            <TwitterOutlined style={{ fontSize: '32px' }} />
                        </a>
                        <a target='blank' hidden={!props.profile.contacts.vk} href={props.profile.contacts.vk}>
                            <LinkOutlined style={{ fontSize: '32px' }} />
                        </a>
                        <a target='blank' hidden={!props.profile.contacts.website} href={props.profile.contacts.website}>
                            <LinkOutlined style={{ fontSize: '32px' }} />
                        </a>
                        <a target='blank' hidden={!props.profile.contacts.youtube} href={props.profile.contacts.youtube}>
                            <YoutubeOutlined style={{ fontSize: '32px' }} />
                        </a>
                    </Space>
                </Col>
            </Row>
        </Row>
    );
}

export default UserProfile;