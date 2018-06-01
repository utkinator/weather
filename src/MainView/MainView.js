import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainView.css';

class MainView extends Component {
    render() {
        const { city, data } = this.props;

        if (!city) {
            return (
                <div className="no-data">
                    <p>
                        <i className="wi wi-alien" />
                        <span>Search for your place over there <i className="wi wi-direction-up-right" /></span>
                    </p>
                </div>
            );
        }

        if (!data) {
            return (
                <div className="no-data">
                    <p>
                        <i className="wi wi-na" /> No data found for the city:{' '}
                        {city}
                    </p>
                </div>
            );
        }

        const { main, weather, name, visibility, wind, sys } = data;
        const { temp, temp_min, temp_max, pressure, humidity } = main;
        const { sunrise, sunset, country } = sys;
        const { speed, deg } = wind;
        const { description } = weather[0];

        const hours = new Date().getHours();
        const isDayOrNightClassname = hours > 7 && hours < 20 ? 'day' : 'night';

        let timeOfDayClassname = '';

        if (hours >= 23 || (hours >= 0 && hours < 6)) {
            timeOfDayClassname = 'night';
        } else if (hours >= 6 && hours < 11) {
            timeOfDayClassname = 'morning';
        } else if (hours >= 11 && hours < 19) {
            timeOfDayClassname = 'day';
        } else if (hours >= 19 && hours < 23) {
            timeOfDayClassname = 'evening';
        }

        const windIconClassNames = `wi wi-wind from-${deg}-deg`;
        let mainViewClassNames = `MainView ${timeOfDayClassname} code-`;
        let weatherIconClassNames = `icon wi wi-owm-${isDayOrNightClassname}-`;

        if (weather) {
            const weatherData = weather[0];

            mainViewClassNames += weatherData.id;
            weatherIconClassNames += weatherData.id;
        }

        const sunriseTime = new Date(sunrise * 1000);
        const sunsetTime = new Date(sunset * 1000);
        const formattedSunrise = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`;
        const formattedSunset = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`;

        return (
            <div className={mainViewClassNames}>
                <div className="today">
                    <div className="city">
                        {name}, {country}
                    </div>
                    <div className="temp">
                        <i className={weatherIconClassNames} />

                        <span className="value">
                            {Math.round(temp)}
                            <i className="wi wi-degrees" />
                        </span>
                    </div>
                    <div className="description">
                        {description.replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                    <div className="other">
                        <div className="section">
                            <div className="title">Wind</div>
                            <i className={windIconClassNames} />
                            <span className="value">{speed} km/h</span>
                            <div className="title">Barometer</div>
                            <i className="wi wi-barometer" />
                            <span className="value">{pressure} mb</span>
                        </div>

                        <div className="section">
                            <div className="title">Visibility</div>
                            <i className="wi wi-moon-new" />
                            <span className="value">
                                {visibility / 1000} km
                            </span>
                            <div className="title">Humidity</div>
                            <i className="wi wi-humidity" />
                            <span className="value">{humidity} %</span>
                        </div>

                        <div className="section">
                            <div className="title">Sunrise</div>
                            <i className="wi wi-sunrise" />
                            <span className="value">{formattedSunrise}</span>
                            <div className="title">Sunset</div>
                            <i className="wi wi-sunset" />
                            <span className="value">{formattedSunset}</span>
                        </div>

                        <div className="section">
                            <div className="title">Min</div>
                            <i className="wi wi-thermometer-exterior" />
                            <span className="value">
                                {Math.round(temp_min)}
                                <i className="wi wi-degrees" />
                            </span>
                            <div className="title">Max</div>
                            <i className="wi wi-thermometer" />
                            <span className="value">
                                <span className="value">
                                    {Math.round(temp_max)}
                                    <i className="wi wi-degrees" />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MainView.propTypes = {
    city: PropTypes.string,
    units: PropTypes.string,
    data: PropTypes.object
};

export default MainView;
