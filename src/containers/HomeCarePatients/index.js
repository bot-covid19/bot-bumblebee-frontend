import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import * as actions from './actions';

// Utils
import RouterUtils from 'utils/RouterUtils';

import Form from './components/Form';

class HomeCarePatients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default connect((store) => ({
}), actions)(HomeCarePatients);
