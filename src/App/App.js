import React, { Component } from "react";
import Settings from "../Settings/Settings";
import MainView from "../MainView/MainView";

import "./App.css";

class App extends Component {
  state = {
    setupMode: false,
    city: null,
    temperatureScale: 'C' // or 'F'
  }

  SettingsKey = 'w-settings';
  Storage = window.localStorage;

  componentDidMount() {
    const savedSettings = this.getSavedSettings();

    if (Boolean(savedSettings)) {
      console.log('settings', savedSettings);
    } else {
      console.log('no settings');
      this.toggleSetupMode();
    }
  }

  getSavedSettings = () => {
    return this.Storage.getItem(this.SettingsKey);
  }

  toggleSetupMode = () => {
    this.setState(prevState => {
      return {
        setupMode: !prevState.setupMode
      }
    });
  }

  render() {
    console.log('render App');

    return (
      <div className="App">
        <button onClick={this.toggleSetupMode}>Toggle</button>

        <MainView />

        {
          this.state.setupMode &&
          <Settings />
        }
      </div>
    );
  }
}

export default App;
