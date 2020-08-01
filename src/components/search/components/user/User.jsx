import React from 'react';
import style from './User.module.css';
import { Avatar, Button, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';

const User = (props) => {
    return (
        <Card style={{ display: 'block', width: '100%', marginBottom: 16 }}>
            <NavLink to={'profile/' + props.user.id} >
                <Meta
                    avatar={<Avatar size="large" src={props.user?.photos?.small} icon={<UserOutlined />} />}
                    title={props.user.name}
                    description={props.user.status}
                />
            </NavLink>

            <Button
                className={style.userFollow}
                onClick={() => props.onChangeFollow(props.user.id, props.user.followed)}
                type={props.user.followed ? 'danger' : 'primary'}
                size="small" loading={props.loading}>
                {props.user.followed ? 'Unfollow' : 'Follow'}
            </Button>
        </Card>
    );
}

export default User;