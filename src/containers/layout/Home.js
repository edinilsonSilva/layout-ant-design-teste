import React from 'react'
import { Layout } from 'antd';

function Home() {
    
    const { Content } = Layout;

    return (
        <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, }}>
            Bem vindo ao Sitema Teste
        </Content>
    )
}

export default Home