import React, { useState } from 'react';
import { Layout } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, MenuUnfoldOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';

import './style.css';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Home'
import BreadcrumbLay from './BreadcrumbLay'

function Template() {

    return (
        <Layout>
            <Navbar />
            <Layout>
                <Sidebar />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <BreadcrumbLay />
                    <Content />
                </Layout>
            </Layout>
            <Footer />
        </Layout>
    )
}

export default Template;
