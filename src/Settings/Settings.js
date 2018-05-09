import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: props.city,
            units: props.units
        };
    }

    onSetCity = e => {
        this.setState({
            city: e.target.value
        });
    };

    onSetUnits = e => {
        this.setState({
            units: e.target.value
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
            units: this.state.units
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
                    <select value={this.state.units} onChange={this.onSetUnits}>
                        <option value="metric" label="Metric" />
                        <option value="imperial" label="Imperial" />
                    </select>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default Settings;
