import React, { Component } from 'react';
import Utils from '../Utils/Utils';
import './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: props.city,
            units: props.units
        };

        this.searchInput = React.createRef();
    }

    componentDidMount() {
        this.searchInput.current.focus();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.city !== prevState.city) {
            return {
                city: nextProps.city
            };
        } else {
            return null;
        }
    }

    onSetCity = e => {
        this.setState(
            {
                city: e.target.value
            },
            Utils.debounce(() => this.onSubmit())
        );
    };

    onSetUnits = unit => {
        this.setState(
            {
                units: unit
            },
            () => this.onSubmit()
        );
    };

    onRefresh = e => {
        this.props.onRefresh();
    };

    onSubmit = () => {
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
                <input
                    type="search"
                    placeholder="Search"
                    required={true}
                    value={this.state.city}
                    onChange={this.onSetCity}
                    ref={this.searchInput}
                />
                <button
                    onClick={() => this.onSetUnits('metric')}
                    className={this.state.units === 'metric' ? 'active' : ''}
                >
                    <i className="wi wi-celsius" />
                </button>
                <button
                    onClick={() => this.onSetUnits('imperial')}
                    className={this.state.units === 'imperial' ? 'active' : ''}
                >
                    <i className="wi wi-fahrenheit" />
                </button>
                <button onClick={this.onRefresh}>
                    <i className="wi wi-refresh" />
                </button>
            </div>
        );
    }
}

export default Settings;
