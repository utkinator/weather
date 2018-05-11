import React, { Component } from 'react';
import './MainView.css';

class MainView extends Component {
    render() {
        const { children, city, units, data } = this.props;

        if (!city) {
            return null;
        }

        if (!data) {
            return (
                <div className="no-data">
                    {children}
                    No data found for the city: {city}
                </div>
            );
        }

        const { main, weather } = data;
        const hours = new Date().getHours();
        const isNight = hours > 20 && hours < 6;

        let classNames = `MainView ${isNight ? 'night' : 'day'} code-`;
        let iconClasses = `wi wi-owm-${isNight ? 'night' : 'day'}-`;

        if (weather) {
            const weatherData = weather[0];

            classNames += weatherData.id;
            iconClasses += weatherData.id;
        }

        return (
            <div className={classNames}>
                {/* {JSON.stringify(this.props.data)} */}
                {children}
                {city}
                {main && Math.round(main.temp)}
                {units === 'metric' ? '°C' : '°F'}
                {weather && <i className={iconClasses} />}
            </div>
        );
    }
}

export default MainView;
