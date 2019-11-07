import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

import Header from './components/Header';//顶部
import Sider from './components/Sider';//侧边栏

import Home from './container/Home'; //首页
import Begin from './container/Begin';//新手入门
import Api from './container/Api';//API
import About from './container/About';//关于
import New from './container/New';//注册
import Siginin from './container/Siginin';//登录
import Topic from './container/Topic'//详情页


function Cnode() {
  return (
    <Router>
      <div>
        {/* 1、顶部 */}
        <Header/>
        {/* 2、主体 */}
        <div className="main">
          <div className="content">

            {/* 路由重定向Redirect进行跳转 */}
            <Redirect from='/' to='/home/all'/>
            <Redirect from='/home' to='/home/all'/>

            {/* 配置路由信息的组件 */}
              <Route path='/home' component={Home} /> 
              <Route path='/begin' component={Begin}/>
              <Route path='/api' component={Api}/>
              <Route path='/about' component={About}/>
              <Route path='/new' component={New}/>
              <Route path='/siginin' component={Siginin}/>

            {/* 详情页 */}
              <Route path='/topic/:id' component={Topic}/>
          </div>
          {/* 3、侧边栏 */}
          <Sider/>
        </div>
      </div>
    </Router>
  );
}

export default Cnode;
