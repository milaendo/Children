import React, { Component } from 'react';
import '../styles/App.css';
import DisplayComponent from './DisplayComponent'
import ChildComponent from './ChildComponent'
import ParentComponent from './ParentComponent'
import BaseLayout from './BaseLayout'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;