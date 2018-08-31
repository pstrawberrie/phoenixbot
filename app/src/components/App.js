// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import axios from 'axios';

import { injectGlobal } from 'styled-components';
import {color, font} from '../styled/helpers';
import {LandingWrapper, ProfileBox, SmallH3} from '../styled/landing';
import {PlusCircle} from 'styled-icons/fa-solid/PlusCircle';

injectGlobal`
  html {
    font-size: 100%;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${color.sunsetGradient};
    color: ${color.dark};
    font-family: ${font.family.default};
    font-size: 1.1rem;
    line-height: 1.3;background-size: 400% 400%;
    animation: AnimationName 30s ease infinite;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  @-webkit-keyframes AnimationName {
      0%{background-position:49% 0%}
      50%{background-position:52% 100%}
      100%{background-position:49% 0%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:49% 0%}
      50%{background-position:52% 100%}
      100%{background-position:49% 0%}
  }
  @keyframes AnimationName { 
      0%{background-position:49% 0%}
      50%{background-position:52% 100%}
      100%{background-position:49% 0%}
  }
`

// App Component
export default class App extends React.Component {

  state = {
    socketData: false,
    endpoint: 'http://localhost:7777',
    profiles: []
  }

  componentDidMount() {
    const self = this;

    // Setup Sockets
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on('FromAPI', data => this.setState({ socketData: data }));

    // Grab Data From DB
    axios.get(endpoint + '/profiles').then((profiles) => {
      console.log('got profiles from db: ', profiles.data);
      self.setState({profile: profiles.data});
    }).catch(err => console.log(err));
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  render() {
    const hasProfiles = this.state.profiles.length !== 0;
    const profilesList = this.state.profiles.map(profile =>
      <ProfileBox key={profile.id}>
        <div className="name">{profile.name}</div>
        <div className="info">
          <div class="item">
            <span class="number">13</span>
            <span class="small">Tracked Users</span>
          </div>
        </div>
      </ProfileBox>
    );
    const displayProfiles = hasProfiles ? profilesList : 
      <div>
        <SmallH3>No Profiles Found</SmallH3>
        <ProfileBox className="new">
          <Link className="name" to="/profile/new">Add Profile &nbsp;&nbsp; <PlusCircle /></Link>
        </ProfileBox>
      </div>;

    return (
      <LandingWrapper>
        <img className="logo" src="/images/logo.png" />
        {displayProfiles}
      </LandingWrapper>
    )
  }

}