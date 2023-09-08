import React, { Component } from 'react';
import request from './utils/request';
import { Toast } from 'antd-mobile';
import { Scene, Marker, Popup, Zoom, PolygonLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import data from "./assets/blockedArea.json";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getLocationData() {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        style: 'normal',
        rotateEnable: false,
        center: [108.3230, 22.8200],
        zoom: 10,
        token: 'ff533602d57df6f8ab3b0fea226ae52f'
      }),
    });
    const blockLayer = new PolygonLayer()
      .source(data)
      .shape('fill')
      .color('#f50')
      .style({
        opacity: 0.2,
      });

    scene.on('loaded', () => {
      const zoom = new Zoom({
        position: 'topright'
      });
      request({
        url: '/v2/asir/list'
      }).then(data => {
        data.data.map((res) => {
          let imgDiv = `<img src=${res.img} style="width: 100%" />`
          let popup = new Popup({
            offsets: [0, 20],
            html: imgDiv,
            closeOnClick: true,
            maxWidth: '100%'
          }).setLngLat({
            lng: res.lng,
            lat: res.lat
          })

          let marker = new Marker({
            color: '#f50'
          })
            .setLnglat([res.lng, res.lat])
            .setPopup(popup);
          scene.addMarker(marker);

          Toast.hide();
        })
        scene.addControl(zoom);
        scene.addLayer(blockLayer)
      }).catch(() => {
        Toast.info('请刷新页面', 2);
        Toast.hide();
      })
    });

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