import React, { Component } from 'react';

import { connect } from 'react-redux';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { getRepos } from '../actions/githupActions';
export class Home extends Component {
    state = { username: 'tylerbuchea'};
  
    componentDidMount() {
      this.updateRepoList(this.state.username);
    }
  
    updateRepoList = username => this.props.getRepos(username);
  
    render() {
      return (
  
        <div className={this.props.setting.slider ? 'home active':'home'}>
            <h1>I AM AN ASYNC APP!!!</h1>

            <strong>Github username: </strong>
            <input
            type="text"
            value={this.state.username}
            onChange={ev => this.setState({ username: ev.target.value })}
            placeholder="Github username..."
            />
            <button onClick={() => this.updateRepoList(this.state.username)}>
            Get Lastest Repos
            </button>

            <ul>
            {this.props.repos.map((repo, index) => (
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
}


const mapStateToProps = (state, ownProps) => ({ repos: state.repos,setting:state.setting });
const mapDispatchToProps = { getRepos };
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;