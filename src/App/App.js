import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import MainView from '../MainView/MainView';
import Utils from '../Utils/Utils';

import './App.css';

class App extends Component {
    state = {
        city: '',
        units: 'metric', // or 'imperial'
        data: null,
        isFetching: false
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
                    this.getWeatherDataForToday();
                }
            );
        }

        this.updateIntervalID = setInterval(() => {
            this.getWeatherDataForToday();
        }, this.updateInterval);
    }

    componentWillUnmount() {
        clearTimeout(this.updateIntervalID);
    }

    getSettings = () => {
        try {
            return JSON.parse(this.Storage.getItem(this.SettingsKey));
        } catch (error) {
            Utils.message({
                text: error
            });
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
                    this.getWeatherDataForToday();
                }
            );
        } catch (error) {
            Utils.message({
                text: error
            });
        }
    };

    refresh = () => {
        this.getWeatherDataForToday();
    };

    getWeatherDataForToday = () => {
        if (this.state.city) {
            this.setState({
                isFetching: true
            }, () => {
                fetch(
                    `${Utils.weatherProviderApiUrl}/weather?` +
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
                            data,
                            isFetching: false
                        });
                    })
                    .catch(error => {
                        Utils.message({
                            text: error
                        });
                        this.setState({
                            isFetching: false
                        });
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
                    isFetching={this.state.isFetching}
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
