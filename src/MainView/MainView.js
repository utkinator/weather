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

        const { main, weather, name } = data;
        const hours = new Date().getHours();
        const isDayOrNightClassname = hours > 7 && hours < 20 ? 'day' : 'night';

        let timeOfDayClassname = '';

        if (hours > 23 && hours < 6) {
            timeOfDayClassname = 'night';
        } else if (hours > 6 && hours < 11) {
            timeOfDayClassname = 'morning';
        } else if (hours > 11 && hours < 19) {
            timeOfDayClassname = 'day';
        } else if (hours > 19 && hours < 23) {
            timeOfDayClassname = 'evening';
        }

        let classNames = `MainView ${timeOfDayClassname} code-`;
        let iconClasses = `wi wi-owm-${isDayOrNightClassname}-`;

        if (weather) {
            const weatherData = weather[0];

            classNames += weatherData.id;
            iconClasses += weatherData.id;
        }

        return (
            <div className={classNames}>
                {JSON.stringify(this.props.data)}
                {children}

                {name}
                {main && Math.round(main.temp)}

                {units === 'metric' ? (
                    <i className="wi wi-celsius" />
                ) : (
                    <i className="wi wi-fahrenheit" />
                )}
                {weather && <i className={iconClasses} />}
            </div>
        );
    }
}

export default MainView;
