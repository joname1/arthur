import React, { Component } from 'react';
import { Toast} from 'antd-mobile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentWillMount() {
    // Toast.loading('加载中', 0);
  }

  render() {
    return (
      <div style={{padding: 16}}>
        <p>以上地点为网友行驶于主、辅路被摄像头拍到、设卡抓到!</p>
        <p>本站信息收集于网路并保留最终解释权!</p>
      </div>
    );
  }
}

export default App;
