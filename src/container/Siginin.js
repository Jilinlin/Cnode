// 登录页面
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import store  from '../store' ;
export default class Siginin extends Component {
    login(){
        fetch("https://cnodejs.org/api/v1/user/alsotang")
            .then(res=>res.json())
            .then(res=>{
                {
                    store.dispatch({
                        type:'get_user_infor',
                        userInfor:{
                            avatar_url:res.data.avatar_url,
                            loginname:res.data.loginname
                        }
                    })
                }
            })
    }
    render() {
        return (
            <div>
                <div className="login_1">
                    这是登录页面
                </div>
                <div className="login_2">
                    用户名：<input type="text" name="username"/>
                    <br/>
                    <br/>
                    密码：&nbsp;&nbsp;&nbsp;&nbsp;<input type="pwd" name="pwd"/>
                    <br/>
                    <br/>
                    <Link to='/home/all'>
                        <input type="submit" value="登录" id="login_button" onClick={this.login}/>
                    </Link>
                </div>     
            </div> 
        )
    }
}
