import React, { Component } from 'react';
import './MainView.css';

class MainView extends Component {
    render() {
        return (
            <div className="MainView">
                City: {this.props.city} <br />
                Scale: {this.props.temperatureScale}
            </div>
        );
    }
}

export default MainView;
