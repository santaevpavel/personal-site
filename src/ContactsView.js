import React, { Component } from 'react';
import './App.css';
import {
  Layout, Menu, Icon
} from 'antd';

const { Header, Content, Sider } = Layout;

class ContactsView extends Component {

  getContacts() {
    var contacts = this.props.data.map(contact =>
      (
        <div>
          <Icon type={contact.icon} theme="outlined"/>
          <text> </text>
          <a href={contact.link}>{contact.title}</a>
          <br/>
        </div>
      )
    );
    return (
      <div>{contacts}</div>
    );
  }

  render() {
    return (
      <Layout className="layout">
        <Content className="ContentBlock" style={{ marginBottom: "50px" }}>
          <h2>Contacts</h2>
          <div>
            { this.getContacts() }
          </div>
        </Content>
      </Layout>
    );
  }
}

export default ContactsView;
