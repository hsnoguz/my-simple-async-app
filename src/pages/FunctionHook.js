//https://tsh.io/blog/react-state-management-react-hooks-vs-redux/
import React, { Component, useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { getRepos } from '../actions/githupActions';

const FunctionHook=({repos,setting,getRepos})=> {
    const [userName,setUserName]=useState("hsnoguz");
    const handleChange=e=>{
        setUserName(e.target.value);

    };

    const callgetRepos=()=>{
        
        if (userName=="") return;
        getRepos(userName);

    }

    useEffect(()=>{
        if (userName=="") return;
       // console.log("test");
        getRepos(userName);

    },[])

    return (
        <div className={setting.slider ? 'home active':'home'}>
        <h1>Report-FunctionHook</h1>

        <strong>Github username: </strong>
        <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="Github username..."
        />
        <button onClick={callgetRepos}>
        Get Lastest Repos
        </button>

        <ul>
        {repos.map((repo, index) => (
            <li key={index}>
            <a href={repo.html_url} target="_blank">
                {repo.name}
            </a>
            </li>
        ))}
        </ul>
    </div>
    )
}


const mapStateToProps = (state, ownProps) => ({ repos: state.repos,setting:state.setting });
const mapDispatchToProps =dispatch=> {
        return{
             getRepos:userName=>dispatch(getRepos(userName))
            };
         };
const ReportContainer = connect(mapStateToProps, mapDispatchToProps)(FunctionHook);

export default ReportContainer;