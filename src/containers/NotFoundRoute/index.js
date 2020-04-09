import React from 'react';

class NotFoundRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        {/* NotFoundRoute */}
        NotFoundRoute
      </div>
    );
  }
}

export default NotFoundRoute;
