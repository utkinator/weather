import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import MainView from '../MainView/MainView';
import Utils from '../Utils/Utils';

import './App.css';

class App extends Component {
    state = {
        city: '',
        units: 'metric', // or 'imperial'
        data: null
    };

    updateIntervalID;
    updateInterval = 216000000; // 1 hour
    SettingsKey = 'w-settings';
    Storage = window.localStorage;

    componentDidMount() {
        const savedSettings = this.getSettings();

        if (Boolean(savedSettings)) {
            this.setState(
                {
                    city: savedSettings.city,
                    units: savedSettings.units
                },
                () => {
                    this.getWeatherData();
                }
            );
        }

        this.updateIntervalID = setInterval(() => {
            this.getWeatherData();
        }, this.updateInterval);
    }

    componentWillUnmount() {
        clearTimeout(this.updateIntervalID);
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
                    units: settings.units
                },
                () => {
                    this.Storage.setItem(
                        this.SettingsKey,
                        JSON.stringify(settings)
                    );
                    this.getWeatherData();
                }
            );
        } catch (error) {
            // TODO: show message
            return new Error(error);
        }
    };

    refresh = () => {
        this.getWeatherData();
    };

    getWeatherData = () => {
        if (this.state.city) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?` +
                    Utils.getEncodedURIComponent({
                        q: this.state.city,
                        units: this.state.units,
                        appid: Utils.weatherProviderApiKey
                    })
            )
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        let error = new Error(response.statusText);
                        error['response'] = response;
                        throw error;
                    }
                })
                .then(data => {
                    this.setState({
                        data
                    });
                })
                .catch(error => {
                    // TODO: show message
                    this.setState({
                        data: null
                    });
                });
        }
    };

    render() {
        return (
            <div className="App">
                <Settings
                    onSaveSettings={this.setSettings}
                    onRefresh={this.refresh}
                    city={this.state.city}
                    units={this.state.units}
                />
                <MainView
                    city={this.state.city}
                    units={this.state.units}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default App;
