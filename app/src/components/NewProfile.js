// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {color, font} from '../styled/helpers';
import { } from '../styled/form';

// New Profile Component
export default class NewProfile extends React.Component {

  state = {
    endpoint: 'http://localhost:7777/profile/new',
    name: null,
    twitchBotName: null,
    twitchChannel: null,
    twitchKey: null,
    twitchAdmins: [],
    screens: [],
    defaultProfile: false,
    loading: false
  }

  render() {
    return (
      <div>hi</div>
    )
  }

}

NewProfile.propTypes = {
  endpoint: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  twitchBotName: PropTypes.string.isRequired,
  twitchChannel: PropTypes.string.isRequired,
  twitchKey: PropTypes.string.isRequired,
  twitchAdmins: PropTypes.array.isRequired,
  screens: PropTypes.array,
  defaultProfile: PropTypes.bool.isRequired,
  loading: PropTypes.bool
}