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

        const { main, weather, name, visibility, wind, sys } = data;
        const { temp, temp_min, temp_max, pressure, humidity } = main;
        const { sunrise, sunset } = sys;
        const { speed, deg, gust } = wind;
        const { id, description, icon } = weather[0];

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

        let classNames = `MainView ${timeOfDayClassname} code-`;
        let iconClasses = `icon wi wi-owm-${isDayOrNightClassname}-`;
        let windClassname = `wi wi-wind from-${deg}-deg`;

        if (weather) {
            const weatherData = weather[0];

            classNames += weatherData.id;
            iconClasses += weatherData.id;
        }

        const sunriseTime = new Date(sunrise * 1000);
        const sunsetTime = new Date(sunset * 1000);
        const formattedSunrise = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`;
        const formattedSunset = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`;

        return (
            <div className={classNames}>
                <div className="today">
                    <div className="city">{name}</div>
                    <div className="temp">
                        <i className={iconClasses} />

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
                            <div className="title">Sunrise</div>
                            <i className="wi wi-sunrise" />
                            <span className="value">{formattedSunrise}</span>
                            <div className="title">Sunset</div>
                            <i className="wi wi-sunset" />
                            <span className="value">{formattedSunset}</span>
                        </div>

                        <div className="section">
                            <div className="title">Wind</div>
                            <i className={windClassname} />
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
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;
