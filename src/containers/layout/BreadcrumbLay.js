import React, { useState } from 'react';
import { Breadcrumb } from 'antd';

function BreadcrumbLay() {

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )

}

export default BreadcrumbLay