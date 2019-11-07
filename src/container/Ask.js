//问答

import React, { Component } from 'react';
import { Pagination } from 'antd';
import {Link} from 'react-router-dom';

export default class Ask extends Component {
    constructor(){//构造器函数
        super();
        this.state = {
            data:[],
            url:'https://cnodejs.org/api/v1/topics/?tab=ask'
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
        var url = 'https://cnodejs.org/api/v1/topics/?tab=ask&page='+page;
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
                                <img className="img_l" src={item.author.avatar_url} alt={item.author.loginname}/>
                                <span className="n_1">{item.reply_count}</span>
                                <span className="n_2">/{item.visit_count}</span>
                                <Link className="topic-title" to={'/topic/'+item.id}>
                                    {item.title}
                                </Link>
                                <span className="time">1天前</span>
                                <img className="img_r" src={item.author.avatar_url} alt={item.author.loginname}/>
                            </li>
                        )
                    }
                </div>
                <div id="pages">
                    <Pagination defaultCurrent={1} total={100} onChange={this.pageChange}/>
                </div>
            </div>
        )
    }
}
