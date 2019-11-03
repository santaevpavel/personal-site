import React, { Component } from 'react';
import ProgressiveImage  from 'react-progressive-image';
import './App.css';
import {
  Layout,  Icon, Avatar, Tooltip
} from 'antd';

const { Sider, Content } = Layout;


class HomeView extends Component {

  render() {
    return (
      <Layout className="layout">
        <Content>
          <div className="Container" style={{ height: '100vh' }}>
            <ProgressiveImage
              src="./img.jpg"
              placeholder="./img-tiny.jpg">
                {(src, loading) => {
                  return <img src={src} alt="beauty" className="HeaderImage"/>
                }}
            </ProgressiveImage>
            <div className="Centered">
              <div className="HomeTextContent">
                <text style={{ color: 'white', fontSize: '80px' }}>{this.props.data.header.title}</text>
                <text style={{ color: '#fffa', fontSize: '40px' }}>{this.props.data.header.subtitle}</text>
              </div>
            </div>
          </div>
          <Layout className="ContentBlock">
            <Layout className="layout">
              <Sider style={{ background: '#fff' }}>
                <Tooltip title="He is me!">
                  <Avatar size={120} src="https://pp.userapi.com/c844720/v844720911/523fa/diye7SaxlfU.jpg"/>
                </Tooltip>
              </Sider>
              <Content className="content" style={{ background: '#fff' }}>
                <div>
                  <h2>{this.props.data.name}</h2>
                  <b><text>{this.props.data.profession}</text></b>
                  <br/>
                  <Icon type="environment"/><text>{this.props.data.location}</text>
                </div>
              </Content>
            </Layout>
          </Layout>
      </Content>
      </Layout>
    );
  }
}

export default HomeView;
