import React, { useState } from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function Navbar() {

    const { Header} = Layout;

    return (
        <Header className="header">
            <div className="logo" />
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Cadastro</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
            <div className="avatar">
                <Avatar icon={<UserOutlined />} size="large" />
            </div>
        </Header>
    )
}

export default Navbar