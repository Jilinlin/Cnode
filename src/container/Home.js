// 首页 二级导航

import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';

import All from './All'//全部
import Good from './Good'//精华
import Share from './Share'//分享
import Ask from './Ask'//问答
import Job from './Job'//招聘
import Dev from './Dev'//测试



export default class Home extends Component {
    state = {
        data: 'data'
    }
    getChildMessage (newData) {
        this.setState({
            data: newData
        })
    }
    render() {
        return (
                <div>
                    <div className="title">
                        <div className="title_2">
                            <button><Link to='/home/all'>全部</Link></button>
                            <button><Link to='/home/good'>精华</Link></button>
                            <button><Link to='/home/share'>分享</Link></button>
                            <button><Link to='/home/ask'>问答</Link></button>
                            <button><Link to='/home/job'>招聘</Link></button>
                            <button><Link to='/home/dev'>测试</Link></button>
                        </div>
                        <div>
                            <Route path='/home/all' component={All} />
                            <Route path='/home/good' component={Good} />
                            <Route path='/home/share' component={Share} /> 
                            <Route path='/home/ask' component={Ask} />
                            <Route path='/home/job' component={Job}/>   
                            <Route path='/home/dev' component={Dev}/>      
                        </div>
                    </div>
                </div>
                )
    }
}

