import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { newValue } = this.props;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <h1>Hello world!</h1>
      </div>
    );
  }
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});
export default connect(mapStateToProps)(App);