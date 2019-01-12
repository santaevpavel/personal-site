import React, { Component } from 'react';
import './App.css';
import {
  Layout, Menu, Icon, Row, Col, Timeline, Tag, Card
} from 'antd';

const { Header, Content } = Layout;

class CvView extends Component {

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
            <Tag>Android</Tag>
            <Tag>Gradle</Tag>
            <Tag>GitLab CI</Tag>
            <Tag>Java</Tag>
            <Tag>Kotlin</Tag>
          </div>
          <br/>
          <h2>Education</h2>
          <Timeline>
            <Timeline.Item dot={<Icon type="book" theme="outlined"/>}>
              <text>2015-2017</text>
              <br/>
              <b>Новосибирский национальный исследовательский государственный университет (НГУ), Новосибирск.</b>
              <br/>
              Информационных технологий, Информатика и вычислительная техника
            </Timeline.Item>
            <Timeline.Item dot={<Icon type="book" theme="outlined"/>}>
              <text>2011-2015</text>
              <br/>
              <b>Новосибирский национальный исследовательский государственный университет (НГУ), Новосибирск.</b>
              <br/>
              Информационных технологий, Информатика и вычислительная техника
            </Timeline.Item>
          </Timeline>
          <h2>Work experience</h2>
          <br/>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </Content>
  </Layout>
    );
  }
}

export default CvView;
