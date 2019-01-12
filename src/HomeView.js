import React, { Component } from 'react';
import './App.css';
import {
  Layout, Menu, Icon, Row, Col, Avatar
} from 'antd';

const { Header, Content, Sider } = Layout;

class HomeView extends Component {

  render() {
    return (
      <Layout className="layout">
        <Content>
          <img src="./img.png" style={{ width: '100%', height: 'auto' }}/>
          <Layout className="layout" style={{
              background: '#fff', width: 'auto', height: 'auto',
              margin: '2em 24em 2em 24em',
              padding: '2em'
          }}>
            <Sider style={{ background: '#fff' }}>
              <Avatar size={150} src="https://pp.userapi.com/c844720/v844720911/523fa/diye7SaxlfU.jpg"/>
            </Sider>
            <Content className="content" style={{ background: '#fff' }}>
              <div>
                <h2>Santaev Pavel</h2>
                <b><text>Android Engeneer at Sibext Ltd.</text></b>
                <br/>
                <Icon type="environment"/><text>Novosibirsk, Russia.</text>
              </div>
            </Content>
          </Layout>
      </Content>
      </Layout>
    );
  }
}

export default HomeView;
