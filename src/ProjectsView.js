import React, { Component } from 'react';
import './App.css';
import {
  Layout, Menu, Icon, Row, Col, Timeline, Tag, Card, Carousel, Divider
} from 'antd';

const { Header, Content } = Layout;

class ProjectsView extends Component {

  getProjects() {
    return (
      <div>
        <h3>Cliboard Translator</h3>
        <Row>
          <Col span={16} style={{ paddingRight: '20px'}}>
            Android application for translating text from clipboard. Supports translation history, translation from clipboard.<br/>
            Used MVVM architecture pattern, clean architecture for designing app. App is written on 78% koltin.<br/><br/>
            <i>Technologies: </i>RxJava, Google Architecture Components, Dagger, Retrofit, Material Design, JUnit.<br/><br/>

            <Icon type="github" theme="outlined"/>
            <a href={"https://github.com/santaevpavel/ClipboardTranslator"}> View sources on Github</a>
            <br/>
          </Col>
          <Col span={8}>
            <img src={"./translator.png"} style={{ width: '100%' }}/>
          </Col>
        </Row>
        <Divider/>
        <h3>Aragorn (work in progress)</h3>
        <Row>
          <Col span={24} style={{ paddingRight: '20px'}}>
            PC version of board game <i>Ticket to Ride</i>. Design using clean architecture and clean code. For GUI plan to use JavaFX.<br/><br/>
            <i>Technologies: </i>Kotlin, RxJava, JUnit.<br/><br/>

            <Icon type="github" theme="outlined"/>
            <a href={"https://github.com/2mba/aragorn"}> View sources on Github</a>
            <br/>
          </Col>
        </Row>
        <Divider/>
        <h3>QuizTelegramBot</h3>
        <Row>
          <Col span={24} style={{ paddingRight: '20px'}}>
            Experimental telegram bot for playing quiz in telegram chat.<br/><br/>
            <i>Technologies: </i>Kotlin, Ktor.<br/><br/>

            <Icon type="github" theme="outlined"/>
            <a href={"https://github.com/santaevpavel/QuizTelegramBot"}> View sources on Github</a>
            <br/>
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    return (
      <Layout className="layout">
        <Content className="ContentBlock">
          <h2>Projects</h2>
          { this.getProjects() }
          <br/>
        </Content>
  </Layout>
    );
  }
}

export default ProjectsView;
