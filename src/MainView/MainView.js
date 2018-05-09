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

        let classNames = 'MainView ';
        let icon = '';

        if (weather && weather[0] && weather[0].description) {
            classNames += weather[0].description;
            icon = `http://openweathermap.org/img/w/${
                weather[0].icon
            }.png`
            document.querySelector("link[rel*='icon']").href = icon;
        }

        return (
            <div className={classNames}>
                {/* {JSON.stringify(this.props.data)} */}
                {children}
                {city}
                {main && Math.round(main.temp)}
                {units === 'metric' ? '°C' : '°F'}
                {weather && (
                    <img
                        alt="weather icon"
                        src={icon}
                    />
                )}
            </div>
        );
    }
}

export default MainView;
