import React, { Component } from 'react';
import './App.css';
import ym from 'react-yandex-metrika';
import {
  Layout,  Icon
} from 'antd';

const { Content } = Layout;

class ContactsView extends Component {

  onClickContact(type) {
    ym('reachGoal', 'ClickContact', { type: type});
  }

  getContacts() {
    var contacts = this.props.data.map(contact =>
      (
        <div>
          <Icon type={contact.icon} theme="outlined"/>
          <a href={contact.link} onClick={(e) => this.onClickContact(contact.title)} >{contact.title}</a>
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
