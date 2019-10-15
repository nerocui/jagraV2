import React from 'react';
import { connect } from 'react-redux';
import { State, AuthState } from './models';

const App: React.FC<AuthState> = (props: AuthState) => {
  console.log(props);
  return (
    <div className="App">
      Hello World
    </div>
  );
}

function MapStateToProps(state: State): AuthState {
  return {
    loggedIn: state.AuthState.loggedIn,
    token: state.AuthState.token,
  };
}

export default connect(MapStateToProps)(App);
