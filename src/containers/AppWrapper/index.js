import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Redux
import { connect } from 'react-redux';
import * as actions from './actions';

// Components
import MainHeader from './components/MainHeader';

// Utils
import ChildRoutes from 'utils/ChildRoutes';

class AppWrapper extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { isSplashScreenActive: false };
  }

  componentDidMount() { }

  render() {
    return (
      <>
        <CssBaseline />
        <Container>
          <MainHeader title="Doctor" />
          <ChildRoutes {...this.props} />
        </Container>
      </>
    );
  }
};

AppWrapper.defaultProps = {
  isSessionActive: null
};

AppWrapper.propTypes = { isSessionActive: PropTypes.bool };

// export default connect((store) => ({
//   // isSessionActive: store.app.isSessionActive,
// }), Object.assign(actions))(AppWrapper);

export default AppWrapper;
