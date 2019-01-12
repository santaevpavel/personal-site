import React, { Component } from 'react';
import './App.css';
import {
  Layout, Menu, Icon, Row, Col, Timeline, Tag, Card
} from 'antd';

const { Header, Content } = Layout;

class CvView extends Component {

  getTechnologies() {
    return this.props.data.technologies.map(tag => <Tag>{ tag }</Tag>)
  }

  getEducations() {
    var timelines = this.props.data.educations.map(education =>
      (
        <Timeline.Item dot={<Icon type="book" theme="outlined"/>}>
        <text>{education.date}</text>
        <br/>
        <b>{education.university}</b>
        <br/>
        {education.direction}
      </Timeline.Item>
      )
    );
    return (
      <Timeline>{timelines}</Timeline>
    );
  }

  getWorkExperiances() {
    var experiences = this.props.data.workExperiances.map(experience =>
      (
        <Timeline.Item dot={<Icon type="laptop" theme="outlined"/>}>
        <text>{experience.date}</text>
        <br/>
        <b>{experience.title}</b>
        <br/>
        {experience.about}
      </Timeline.Item>
      )
    );
    return (
      <Timeline>{experiences}</Timeline>
    );
  }

  render() {
    return (
      <Layout className="layout">
        <Content style={{
            background: '#fff', width: 'auto', height: 'auto',
            margin: '0em 24em 8em 24em',
            padding: '2em'
        }}>
          <h2>Key skills</h2>
          <h2>Technologies, Tools</h2>
          <div>
            { this.getTechnologies() }
          </div>
          <br/>

          <h2>Education</h2>
            { this.getEducations() }
          <br/>
          <h2>Work experience</h2>
          { this.getWorkExperiances() }
        </Content>
  </Layout>
    );
  }
}

export default CvView;
