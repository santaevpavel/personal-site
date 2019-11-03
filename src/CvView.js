import React, { Component } from 'react';
import './App.css';
import {
  Layout, Icon, Timeline, Tag
} from 'antd';

const { Content } = Layout;

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
        { this.props.data.keySkills.advanced.map(tag => <Tag>{ tag }</Tag>) }
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
        <text style={{ color: "#666" }}>{education.date}</text>
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
        <text style={{ color: "#666" }}>{experience.date}</text>
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
         <Icon type="global" style={{ color: "#006d75" }}/> <i>{lang.lang}</i> — {lang.level}<br/>
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
        <Content>
            <div className="ContentBlock">
              <h2>About 🔍</h2>
              { this.getAbout() }
              <br/>
            </div>
            <div className="ContentBlock">
              <h2>Work experience 👩🏼‍💻</h2>
              { this.getWorkExperiances() }
            </div>
            <div className="ContentBlock">
              <h2>Technologies, Tools 🔨</h2>
              { this.getTechnologies() }
            </div>
            <div className="ContentBlock">
              <h2>Education 👨🏼‍🎓</h2>
              { this.getEducations() }
              <h2>Languages 🈹</h2>
              { this.getLanguages() }
              <br/>
            </div>
        </Content>
  </Layout>
    );
  }
}

export default CvView;
