import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from '@/store/store';
import './utils/setRem';
import './style/base.css';

FastClick.attach(document.body); // 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick。

// 监听state变化
// store.subscribe(() => {
//   console.log('store发生了变化');
// });

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}

registerServiceWorker();
