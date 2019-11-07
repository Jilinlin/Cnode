// 招聘

import React, { Component } from 'react'
import {Pagination} from 'antd';
import {Link} from 'react-router-dom';
export default class Job extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            url:'https://cnodejs.org/api/v1/topics/?tab=job',
            key:0,
        }
    }
    componentDidMount(){
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{
            {
                res.data.map((item)=>{
                    this.setState({
                        data:res.data
                    })
                })
            }
        })
    }
    pageChange=(page)=> {
        var url = 'https://cnodejs.org/api/v1/topics/?tab=good&page='+page;
        this.setState({
            url : url
        },function(){
            fetch(this.state.url)
            .then(res=>res.json())
            .then(res=>{
                {
                    res.data.map((item)=>{
                        this.setState({
                            data:res.data
                        })
                    })
                }
            })
        })
    }
    render() {
        return (
            <div>
                <div className="content1">
                    {
                        this.state.data.map((item,idx)=>
                            <li key={idx}>
                                <img src={item.author.avatar_url} alt={item.author.loginname} className="img_l"/>
                                <span className="n_1">{item.reply_count}</span>
                                <span className="n_2">/{item.visit_count}</span>
                                <Link className="topic-title" to={'/topic/'+item.id}>
                                    {item.title}
                                </Link>
                                <span className="time">12小时前</span>
                                <img src={item.author.avatar_url} alt={item.author.loginname} className="img_r"/>
                            </li>
                        )
                    }
                </div>
                <div id="pages">
                    <Pagination defaultCurrent={1} total={100} onChange={this.pageChange} key={this.pages}/>
                </div>
            </div>
        )
    }
}
