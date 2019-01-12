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
          <img src="./img.jpg" style={{ width: '100%', height: 'auto' }}/>
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
                <h2>{this.props.data.name}</h2>
                <b><text>{this.props.data.profession}</text></b>
                <br/>
                <Icon type="environment"/><text>{this.props.data.location}</text>
              </div>
            </Content>
          </Layout>
      </Content>
      </Layout>
    );
  }
}

export default HomeView;
