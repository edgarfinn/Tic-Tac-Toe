import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PageHeader from './PageHeader/Page_header';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMessage: 'Welcome To React Custom!',
    };
  }
  render() {
    const { welcomeMessage } = this.state;
    return (
      <section className="App">
        <PageHeader />
      </section>
    );
  }
}

export default hot(module)(App);
