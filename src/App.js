import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import ym, { YMInitializer } from 'react-yandex-metrika';
import './App.css';
import data from './data.json';

import HomeView from './HomeView.js';
import CvView from './CvView.js';
import ContactsView from './ContactsView.js';
import ProjectsView from './ProjectsView.js';

import {
  Layout, Menu, BackTop
} from 'antd';

const { Header, Content } = Layout;
const yandexMetrikaAppId = process.env.REACT_APP_YANDEX_METRIKA_APP_ID

class App extends Component {

  handleClick = (e) => {
    console.log('click ', e);
    switch (e.key) {
      case '1':
        scrollToComponent(this.refHeader1, { align: 'top' });
        ym('reachGoal', 'ClickMenuHome', {});
        break;
      case '2':
        scrollToComponent(this.refHeader2, { align: 'top' });
        ym('reachGoal', 'ClickMenuAbout', {});
        break;
      case '3':
        scrollToComponent(this.refHeader3, { align: 'top' });
        ym('reachGoal', 'ClickMenuProjects', {});
        break;
      case '4':
        scrollToComponent(this.refHeader4, { align: 'top' });
        ym('reachGoal', 'ClickMenuContacts', {});
        break;
      default:
        alert("Illegal id " + e.key)
        break
    }
  }

  render() {
    return (
      <div>
        <YMInitializer accounts={[yandexMetrikaAppId]} />
        <Layout className="layout">
          <Header className="Header">
            <Menu
              className="AppMenu"
              onClick={this.handleClick}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">Projects</Menu.Item>
                <Menu.Item key="4">Contacts</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ width: '100%', minWidth: '1200px' }}>
            <HomeView data={data.itemHome} ref={(header) => this.refHeader1 = header}/>
            <CvView data={data.itemCV} ref={(header) => this.refHeader2 = header}/>
            <ProjectsView data={data.itemProjects} ref={(header) => this.refHeader3 = header}/>
            <ContactsView data={data.itemContacts} ref={(header) => this.refHeader4 = header}/>
            <BackTop/>
          </Content>
      </Layout>
    </div>
    );
  }
}

export default App;
