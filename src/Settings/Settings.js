import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: props.city,
            temperatureScale: props.temperatureScale
        };
    }

    onSetCity = e => {
        this.setState({
            city: e.target.value
        });
    };

    onSetTemperatureScale = e => {
        this.setState({
            temperatureScale: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        e.stopPropagation();

        this.saveSettings();
    };

    saveSettings = () => {
        this.props.onSaveSettings({
            city: this.state.city,
            temperatureScale: this.state.temperatureScale
        });
    };

    render() {
        return (
            <div className="Settings">
                <form onSubmit={this.onSubmit}>
                    <input
                        type="search"
                        placeholder="City"
                        required={true}
                        value={this.state.city}
                        onChange={this.onSetCity}
                    />
                    <select
                        value={this.state.temperatureScale}
                        onChange={this.onSetTemperatureScale}
                    >
                        <option value="C" label="°C" />
                        <option value="F" label="°F" />
                    </select>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default Settings;
