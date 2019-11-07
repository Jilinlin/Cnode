//侧边框

import React, { Component } from 'react'
import  store  from '../store' ;

export default class Sider extends Component {

    constructor(props){//构造器
        super(props);
        this.state = store.getState();
        store.subscribe(()=>{
            this.setState(store.getState())   
        } )
        this.state = {
            none: [],
        }
    }

    componentDidMount(){//第一次渲染后调用
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res=>res.json())
            .then(res=>{
                {
                    res.data.map((item)=>{
                        if(item.reply_count==0){
                            var none = [];
                            none = [...this.state.none,item.title];
                            this.setState({
                                none:none
                            })
                        }
                    })
                }
            })
    }

    render() {
        return (
            <div className="sider">
                {/* 头像 */}
                <img src={store.getState().avatar_url}></img>
                {/* 用户名 */}
                <p dangerouslySetInnerHTML={{__html:store.getState().loginname}}></p>
            </div>
        )
    }
}
