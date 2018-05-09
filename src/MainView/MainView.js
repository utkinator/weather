import React, { Component } from 'react';
import './MainView.css';

class MainView extends Component {
    render() {
        const { city, units, data } = this.props;
        const { main, weather } = data;

        let classNames = 'MainView';

        if (!city) {
            return null;
        }

        return (
            <div className={classNames}>
                {/* {JSON.stringify(this.props.data)} */}
                {this.props.city}
                {main && main.temp}
                {this.props.units === 'metric' ? '°C' : '°F'}
                {weather && (
                    <img
                        alt="weather icon"
                        src={`http://openweathermap.org/img/w/${
                            this.props.data.weather[0].icon
                        }.png`}
                    />
                )}
            </div>
        );
    }
}

export default MainView;
