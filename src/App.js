import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import './App.css';
import data from './data.json';

import HomeView from './HomeView.js';
import CvView from './CvView.js';
import ContactsView from './ContactsView.js';

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
      default:
        alert("Illegal id " + e.key)
        break
    }
  }

  render() {
    return (
      <Layout className="layout">
        <Header className="Header">
          <Menu
            className="AppMenu"
            onClick={this.handleClick}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Portfolio</Menu.Item>
              <Menu.Item key="3">Contacts</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <HomeView data={data.itemHome} ref={(header) => this.refHeader1 = header}/>
          <CvView data={data.itemCV} ref={(header) => this.refHeader2 = header}/>
          <ContactsView data={data.itemContacts} ref={(header) => this.refHeader3 = header}/>
        </Content>
  </Layout>
    );
  }
}

export default App;
