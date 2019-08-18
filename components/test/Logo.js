import React, { Component } from 'react';
import {version,Icon} from "antd";
import './Logo.css'
class Logo extends React.Component{
    render(){
        return(
    <div className='Logo'> 
        <h1><div className='jin' />Welcome to my APP!</h1>
        <div>Current antd version: {version}</div>
        <div className="icons-list" style={{marginTop:"20px"}}>
        <Icon type="home" />
        <Icon type="setting" theme="filled" />
        <Icon type="smile" theme="outlined" />
        <Icon type="sync" spin />
        <Icon type="smile" rotate={180} />
        <Icon type="loading" />
        </div>
    </div>
        );
    }
}

export default Logo