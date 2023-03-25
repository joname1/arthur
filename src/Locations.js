import React, { Component } from 'react';
// import request from './utils/request';
import { Toast } from 'antd-mobile';
import { Scene, LineLayer } from '@antv/l7';
import { GaodeMap,Mapbox } from '@antv/l7-maps';
import data from "./assets/location.json";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapData: []
    }
  }

  getLocationData() {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        center: [ 108.3230, 22.8200 ],
        style: 'light',
        zoom: 10,
        token: 'pk.eyJ1IjoibWFwYm94LW1hcC1kZXNpZ24iLCJhIjoiY2syeHpiaHlrMDJvODNidDR5azU5NWcwdiJ9.x0uSqSWGXdoFKuHZC5Eo_Q'
      })
    });
    scene.on('loaded', () => {
      const layer = new LineLayer({})
            .source(data)
            .size(4)
            .shape('line')
            .color(['red'])
            .style({
              borderWidth: 0.4,
              borderColor: '#fff'
            });
          scene.addLayer(layer);
          Toast.hide();
    });

    // request({
    //   url: '/api/v2/ncov_cases/2'
    // }).then(data => {
    //   data.features = data.features.filter(item => {
    //     return item.properties.confirmed > 0;
    //   });      
    // }).catch(() => {
    //   Toast.info('请刷新页面', 2);
    //   Toast.hide();
    // })
  }

  componentDidMount() {
    Toast.loading('加载中', 0);
    this.getLocationData()
  }

  render() {
    const h = document.documentElement.clientHeight - 180;
    return (
      <div id="map" style={{ minHeight: h, touchAction: 'none', position: 'relative' }} />
    );
  }
}

export default App;