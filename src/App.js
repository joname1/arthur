import React, { Component } from 'react';
import { Tabs, Badge } from 'antd-mobile';
import Locations from './Locations';
import About from './About';
import styles from './App.css';

const tabs = [
  { title: <Badge>地图</Badge> },
  { title: <Badge>说明</Badge> },
];

const TabExample = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={0}
      swipeable={false}
      prerenderingSiblingsNumber={0}
      style={{paddingBottom: 10}}
    >

      <div>
        <Locations />
      </div>

      <div>
        <About />
      </div>
    </Tabs>
  </div>
);

class App extends Component {
  render() {
    // let bannerUrl = 'https://ms.momocdn.com/02/12/549D/57D5.png'
    return (
      <div id="header">
        <div>
          <img src={require('./assets/banner.jpg')} alt={'banner'} className={styles.banner} />
        </div>
        <TabExample />
      </div>
    );
  }
}

export default App;
