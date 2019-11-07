import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';//引入Icon设计图标样式



export default function Header(){
    // 返回顶部样式
    return <div className="top">
                <header>

                    {/* 图片logo */}
                    <img src='https://static2.cnodejs.org/public/images/cnodejs_light.svg'/>

                    {/* 搜索框 */}
                    <div className="input_search">
                        <Icon type="monitor" style={{float:'left',margin:'4px 10px 0px 10px'}}/>
                        <input type="search"/>
                    </div>

                    {/* 导航 */}
                    <div className="navigation">
                        {/* 点击链接响应相应页面 */}
                        <Link to='/home/all'>首页</Link>
                        <Link to='/begin'>新手入门</Link>
                        <Link to='/api'>API</Link>
                        <Link to='/about'>关于</Link>
                        <Link to='/new'>注册</Link>
                        <Link to='/siginin'>登陆</Link>
                    </div>

                </header>
            </div>
}