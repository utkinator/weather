import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import MainView from '../MainView/MainView';

import './App.css';

class App extends Component {
    state = {
        setupMode: false,
        city: null,
        temperatureScale: 'C' // or 'F'
    };

    SettingsKey = 'w-settings';
    Storage = window.localStorage;

    componentDidMount() {
        const savedSettings = this.getSettings();

        if (Boolean(savedSettings)) {
            this.setState({
                city: savedSettings.city,
                temperatureScale: savedSettings.temperatureScale
            });
        } else {
            this.toggleSetupMode();
        }
    }

    getSettings = () => {
        try {
            return JSON.parse(this.Storage.getItem(this.SettingsKey));
        } catch (error) {
            // TODO: show message
            return new Error(error);
        }
    };

    setSettings = settings => {
        try {
            this.setState(
                {
                    city: settings.city,
                    temperatureScale: settings.temperatureScale
                },
                () => {
                    this.Storage.setItem(
                        this.SettingsKey,
                        JSON.stringify(settings)
                    );
                    this.toggleSetupMode();
                }
            );
        } catch (error) {
            // TODO: show message
            return new Error(error);
        }
    };

    toggleSetupMode = () => {
        this.setState(prevState => {
            return {
                setupMode: !prevState.setupMode
            };
        });
    };

    render() {
        console.log('render App');

        return (
            <div className="App">
                <button onClick={this.toggleSetupMode}>Toggle Settings</button>

                <MainView
                    city={this.state.city}
                    temperatureScale={this.state.temperatureScale}
                />

                {this.state.setupMode && (
                    <Settings
                        onSaveSettings={this.setSettings}
                        city={this.state.city}
                        temperatureScale={this.state.temperatureScale}
                    />
                )}
            </div>
        );
    }
}

export default App;
