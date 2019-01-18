import React, { Component } from 'react';
import './App.css';
import {
  Layout, Menu, Icon, Row, Col, Timeline, Tag, Card
} from 'antd';

const { Header, Content } = Layout;

class CvView extends Component {

  getAbout() {
    return (
      <div>
        <td dangerouslySetInnerHTML={{__html: this.props.data.about}} />
      </div>
    )
  }

  getSkills() {
    return (
      <div>
        <h3>Advanced skills:</h3>{ this.props.data.keySkills.advanced.map(tag => <Tag>{ tag }</Tag>) }
        <br/><br/>
        <h3>Basic skills:</h3>{ this.props.data.keySkills.basic.map(tag => <Tag>{ tag }</Tag>) }
      </div>
    )
  }

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
        {<td dangerouslySetInnerHTML={{__html: experience.about.join('')}} />}
      </Timeline.Item>
      )
    );
    return (
      <Timeline>{experiences}</Timeline>
    );
  }

  getLanguages() {
    var langs = this.props.data.languages.map(lang =>
      (
        <div>
         <i>{lang.lang}</i> — {lang.level}<br/>
        </div>
      )
    )
    return (
      <div>
        {langs}
      </div>
    )
  }

  render() {
    return (
      <Layout className="layout">
        <Content className="ContentBlock">
          <h2>About</h2>
          { this.getAbout() }
          <br/>
          <h2>Key skills</h2>
          <div>
            { this.getSkills() }
          </div>
          <br/>
          <h2>Education</h2>
            { this.getEducations() }
          <h2>Work experience</h2>
          { this.getWorkExperiances() }
          <h2>Languages</h2>
          { this.getLanguages() }
          <br/>
          <h2>Technologies, Tools</h2>
          { this.getTechnologies() }
          <br/>
        </Content>
  </Layout>
    );
  }
}

export default CvView;
