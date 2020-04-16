import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import * as actions from './actions';

// Utils
import RouterUtils from 'utils/RouterUtils';

import LoginForm from './components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('vish');
    return (
      <>
        <LoginForm />
      </>
    );
  }
}

export default connect((store) => ({
}), actions)(Login);
