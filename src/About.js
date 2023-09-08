import React, { Component } from 'react';
import request from './utils/request';
import { Toast } from 'antd-mobile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ''
    };
  }
  getInfo() {
    request({
      url: '/v2/asir/about'
    }).then(data => {
      this.setState({
        info: data[0].result.data
      })
      Toast.hide();
    })
  }

  componentDidMount() {
    Toast.loading('加载中', 0);
    this.getInfo()
  }

  render() {
    return (
      <div style={{ padding: 16 }}>
        <span dangerouslySetInnerHTML={{ __html: this.state.info }}></span>
      </div>
    );
  }
}

export default App;
