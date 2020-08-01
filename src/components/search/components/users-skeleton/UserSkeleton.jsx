import React from 'react';
import { Card, Skeleton, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';

const UserSkeleton = (props) => {
    const items = [...Array(10).keys()]; 
    
    return (
        <>
            {items.map((i) => {
                return (
                    <Card key={i} style={{ width: '100%', marginTop: 16 }}>
                        <Skeleton loading={true} avatar active>
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>);
            })}
        </>
    );
}

export default UserSkeleton;