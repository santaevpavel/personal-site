import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
//import "antd/dist/antd.css";
import './App.css';

import HomeView from './HomeView.js';
import CvView from './CvView.js';
import {
  Layout, Menu, Icon, Row, Col
} from 'antd';

const { Header, Content } = Layout;

class App extends Component {

  handleClick = (e) => {
    console.log('click ', e);
    switch (e.key) {
      case '1':
        scrollToComponent(this.refHeader1, { align: 'top' });
        break;
      case '2':
        scrollToComponent(this.refHeader2, { align: 'top' });
        break;
      case '3':
        scrollToComponent(this.refHeader3, { align: 'top' });
        break;
      case '4':
        scrollToComponent(this.refHeader4, { align: 'top' });
        break;
      default:
        alert("Illegal id " + e.key)
        break
    }
  }

  render() {
    return (
      <Layout className="layout">
        <Header className="header"
          style={{ position: 'top', zIndex: 1, width: '100%', height: '0px',
            background: '#000000ff' }}>
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', background: '#00000000', padding: '0em 24em 0em 24em', width: '100%' }}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Portfolio</Menu.Item>
              <Menu.Item key="3">Contacts</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <HomeView/>
          <CvView/>
          <Layout class="ContentStyle">
            <h1 ref={(header) => this.refHeader1 = header}>Header 1</h1>
            <img src="https://4apk.ru/wp-content/uploads/2018/02/android-1.jpg"/>
          </Layout>
          <Layout class="ContentStyle">
            <h1 ref={(header) => this.refHeader2 = header}>Header 2</h1>
            <img src="https://4apk.ru/wp-content/uploads/2018/02/android-1.jpg"/>
          </Layout>
          <Layout class="ContentStyle">
            <h1 ref={(header) => this.refHeader3 = header}>Header 3</h1>
            <img src="https://4apk.ru/wp-content/uploads/2018/02/android-1.jpg"/>
          </Layout>
        </Content>
  </Layout>
    );
  }
}

export default App;
