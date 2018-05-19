import React, { Component } from 'react';
import './Forecast.css';
import Utils from '../Utils/Utils';

class Forecast extends Component {
    state = {
        data: {
            cod: '200',
            message: 0.0115,
            cnt: 40,
            list: [
                {
                    dt: 1526569200,
                    main: {
                        temp: 291.51,
                        temp_min: 291.51,
                        temp_max: 291.552,
                        pressure: 1025.93,
                        sea_level: 1027.37,
                        grnd_level: 1025.93,
                        humidity: 89,
                        temp_kf: -0.05
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }
                    ],
                    clouds: { all: 32 },
                    wind: { speed: 1.21, deg: 94.0006 },
                    rain: { '3h': 0.1775 },
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-17 15:00:00'
                },
                {
                    dt: 1526580000,
                    main: {
                        temp: 290.08,
                        temp_min: 290.08,
                        temp_max: 290.117,
                        pressure: 1025.44,
                        sea_level: 1026.85,
                        grnd_level: 1025.44,
                        humidity: 98,
                        temp_kf: -0.03
                    },
                    weather: [
                        {
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03n'
                        }
                    ],
                    clouds: { all: 48 },
                    wind: { speed: 4.76, deg: 159.005 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-17 18:00:00'
                },
                {
                    dt: 1526590800,
                    main: {
                        temp: 289.53,
                        temp_min: 289.53,
                        temp_max: 289.557,
                        pressure: 1025.95,
                        sea_level: 1027.48,
                        grnd_level: 1025.95,
                        humidity: 100,
                        temp_kf: -0.02
                    },
                    weather: [
                        {
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03n'
                        }
                    ],
                    clouds: { all: 36 },
                    wind: { speed: 4.56, deg: 241.511 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-17 21:00:00'
                },
                {
                    dt: 1526601600,
                    main: {
                        temp: 288.16,
                        temp_min: 288.16,
                        temp_max: 288.171,
                        pressure: 1025.61,
                        sea_level: 1027.09,
                        grnd_level: 1025.61,
                        humidity: 100,
                        temp_kf: -0.01
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 4.56, deg: 290.504 },
                    rain: { '3h': 0.0025000000000001 },
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-18 00:00:00'
                },
                {
                    dt: 1526612400,
                    main: {
                        temp: 288.069,
                        temp_min: 288.069,
                        temp_max: 288.069,
                        pressure: 1025.68,
                        sea_level: 1027.19,
                        grnd_level: 1025.68,
                        humidity: 100,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 2.86, deg: 257.003 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-18 03:00:00'
                },
                {
                    dt: 1526623200,
                    main: {
                        temp: 290.354,
                        temp_min: 290.354,
                        temp_max: 290.354,
                        pressure: 1025.97,
                        sea_level: 1027.36,
                        grnd_level: 1025.97,
                        humidity: 95,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 3.71, deg: 235.501 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-18 06:00:00'
                },
                {
                    dt: 1526634000,
                    main: {
                        temp: 292.245,
                        temp_min: 292.245,
                        temp_max: 292.245,
                        pressure: 1025.76,
                        sea_level: 1027.26,
                        grnd_level: 1025.76,
                        humidity: 86,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 4.57, deg: 211.502 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-18 09:00:00'
                },
                {
                    dt: 1526644800,
                    main: {
                        temp: 293.863,
                        temp_min: 293.863,
                        temp_max: 293.863,
                        pressure: 1025.13,
                        sea_level: 1026.5,
                        grnd_level: 1025.13,
                        humidity: 78,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 6.46, deg: 211.506 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-18 12:00:00'
                },
                {
                    dt: 1526655600,
                    main: {
                        temp: 294.26,
                        temp_min: 294.26,
                        temp_max: 294.26,
                        pressure: 1023.55,
                        sea_level: 1025.09,
                        grnd_level: 1023.55,
                        humidity: 76,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 6.46, deg: 221.009 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-18 15:00:00'
                },
                {
                    dt: 1526666400,
                    main: {
                        temp: 293.073,
                        temp_min: 293.073,
                        temp_max: 293.073,
                        pressure: 1024.24,
                        sea_level: 1025.61,
                        grnd_level: 1024.24,
                        humidity: 82,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '02n'
                        }
                    ],
                    clouds: { all: 8 },
                    wind: { speed: 6.1, deg: 219.002 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-18 18:00:00'
                },
                {
                    dt: 1526677200,
                    main: {
                        temp: 291.206,
                        temp_min: 291.206,
                        temp_max: 291.206,
                        pressure: 1024.55,
                        sea_level: 1026.04,
                        grnd_level: 1024.55,
                        humidity: 92,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 4.03, deg: 222.001 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-18 21:00:00'
                },
                {
                    dt: 1526688000,
                    main: {
                        temp: 289.693,
                        temp_min: 289.693,
                        temp_max: 289.693,
                        pressure: 1024.2,
                        sea_level: 1025.75,
                        grnd_level: 1024.2,
                        humidity: 100,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 2.11, deg: 227.503 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-19 00:00:00'
                },
                {
                    dt: 1526698800,
                    main: {
                        temp: 289.323,
                        temp_min: 289.323,
                        temp_max: 289.323,
                        pressure: 1024.62,
                        sea_level: 1026.09,
                        grnd_level: 1024.62,
                        humidity: 100,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 801,
                            main: 'Clouds',
                            description: 'few clouds',
                            icon: '02d'
                        }
                    ],
                    clouds: { all: 20 },
                    wind: { speed: 2.41, deg: 281.507 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-19 03:00:00'
                },
                {
                    dt: 1526709600,
                    main: {
                        temp: 291.774,
                        temp_min: 291.774,
                        temp_max: 291.774,
                        pressure: 1025.53,
                        sea_level: 1026.93,
                        grnd_level: 1025.53,
                        humidity: 87,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03d'
                        }
                    ],
                    clouds: { all: 32 },
                    wind: { speed: 3.38, deg: 342.001 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-19 06:00:00'
                },
                {
                    dt: 1526720400,
                    main: {
                        temp: 293.056,
                        temp_min: 293.056,
                        temp_max: 293.056,
                        pressure: 1025.66,
                        sea_level: 1027.15,
                        grnd_level: 1025.66,
                        humidity: 82,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03d'
                        }
                    ],
                    clouds: { all: 44 },
                    wind: { speed: 1.81, deg: 333.504 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-19 09:00:00'
                },
                {
                    dt: 1526731200,
                    main: {
                        temp: 292.794,
                        temp_min: 292.794,
                        temp_max: 292.794,
                        pressure: 1025.56,
                        sea_level: 1026.92,
                        grnd_level: 1025.56,
                        humidity: 85,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04d'
                        }
                    ],
                    clouds: { all: 56 },
                    wind: { speed: 2.23, deg: 207.504 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-19 12:00:00'
                },
                {
                    dt: 1526742000,
                    main: {
                        temp: 292.409,
                        temp_min: 292.409,
                        temp_max: 292.409,
                        pressure: 1025.32,
                        sea_level: 1026.77,
                        grnd_level: 1025.32,
                        humidity: 87,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }
                    ],
                    clouds: { all: 100 },
                    wind: { speed: 4.98, deg: 221 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-19 15:00:00'
                },
                {
                    dt: 1526752800,
                    main: {
                        temp: 291.336,
                        temp_min: 291.336,
                        temp_max: 291.336,
                        pressure: 1025.92,
                        sea_level: 1027.49,
                        grnd_level: 1025.92,
                        humidity: 92,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }
                    ],
                    clouds: { all: 92 },
                    wind: { speed: 5.21, deg: 235.001 },
                    rain: { '3h': 0.09 },
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-19 18:00:00'
                },
                {
                    dt: 1526763600,
                    main: {
                        temp: 290.868,
                        temp_min: 290.868,
                        temp_max: 290.868,
                        pressure: 1026.24,
                        sea_level: 1027.82,
                        grnd_level: 1026.24,
                        humidity: 93,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }
                    ],
                    clouds: { all: 80 },
                    wind: { speed: 3.95, deg: 302.502 },
                    rain: { '3h': 0.01 },
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-19 21:00:00'
                },
                {
                    dt: 1526774400,
                    main: {
                        temp: 290.608,
                        temp_min: 290.608,
                        temp_max: 290.608,
                        pressure: 1026.58,
                        sea_level: 1028.11,
                        grnd_level: 1026.58,
                        humidity: 95,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03n'
                        }
                    ],
                    clouds: { all: 32 },
                    wind: { speed: 6.17, deg: 323.001 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-20 00:00:00'
                },
                {
                    dt: 1526785200,
                    main: {
                        temp: 289.28,
                        temp_min: 289.28,
                        temp_max: 289.28,
                        pressure: 1027.9,
                        sea_level: 1029.25,
                        grnd_level: 1027.9,
                        humidity: 100,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03d'
                        }
                    ],
                    clouds: { all: 36 },
                    wind: { speed: 6.8, deg: 335.001 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-20 03:00:00'
                },
                {
                    dt: 1526796000,
                    main: {
                        temp: 291.526,
                        temp_min: 291.526,
                        temp_max: 291.526,
                        pressure: 1029.2,
                        sea_level: 1030.69,
                        grnd_level: 1029.2,
                        humidity: 89,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 5.21, deg: 348.5 },
                    rain: { '3h': 0.24 },
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-20 06:00:00'
                },
                {
                    dt: 1526806800,
                    main: {
                        temp: 292.81,
                        temp_min: 292.81,
                        temp_max: 292.81,
                        pressure: 1030.05,
                        sea_level: 1031.52,
                        grnd_level: 1030.05,
                        humidity: 84,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 801,
                            main: 'Clouds',
                            description: 'few clouds',
                            icon: '02d'
                        }
                    ],
                    clouds: { all: 12 },
                    wind: { speed: 5.02, deg: 358.008 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-20 09:00:00'
                },
                {
                    dt: 1526817600,
                    main: {
                        temp: 293.434,
                        temp_min: 293.434,
                        temp_max: 293.434,
                        pressure: 1030.03,
                        sea_level: 1031.57,
                        grnd_level: 1030.03,
                        humidity: 81,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '02d'
                        }
                    ],
                    clouds: { all: 8 },
                    wind: { speed: 4.51, deg: 342.503 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-20 12:00:00'
                },
                {
                    dt: 1526828400,
                    main: {
                        temp: 293.718,
                        temp_min: 293.718,
                        temp_max: 293.718,
                        pressure: 1029.92,
                        sea_level: 1031.32,
                        grnd_level: 1029.92,
                        humidity: 79,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 4.01, deg: 336.002 },
                    rain: { '3h': 0.005 },
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-20 15:00:00'
                },
                {
                    dt: 1526839200,
                    main: {
                        temp: 292.368,
                        temp_min: 292.368,
                        temp_max: 292.368,
                        pressure: 1030.56,
                        sea_level: 1032.06,
                        grnd_level: 1030.56,
                        humidity: 85,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 801,
                            main: 'Clouds',
                            description: 'few clouds',
                            icon: '02n'
                        }
                    ],
                    clouds: { all: 12 },
                    wind: { speed: 3.45, deg: 342.502 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-20 18:00:00'
                },
                {
                    dt: 1526850000,
                    main: {
                        temp: 290.851,
                        temp_min: 290.851,
                        temp_max: 290.851,
                        pressure: 1031.55,
                        sea_level: 1032.99,
                        grnd_level: 1031.55,
                        humidity: 94,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03n'
                        }
                    ],
                    clouds: { all: 48 },
                    wind: { speed: 3.61, deg: 357.502 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-20 21:00:00'
                },
                {
                    dt: 1526860800,
                    main: {
                        temp: 288.775,
                        temp_min: 288.775,
                        temp_max: 288.775,
                        pressure: 1031.63,
                        sea_level: 1033.09,
                        grnd_level: 1031.63,
                        humidity: 100,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 4.72, deg: 346.502 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-21 00:00:00'
                },
                {
                    dt: 1526871600,
                    main: {
                        temp: 287.267,
                        temp_min: 287.267,
                        temp_max: 287.267,
                        pressure: 1031.94,
                        sea_level: 1033.33,
                        grnd_level: 1031.94,
                        humidity: 100,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 4.71, deg: 333.501 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-21 03:00:00'
                },
                {
                    dt: 1526882400,
                    main: {
                        temp: 289.986,
                        temp_min: 289.986,
                        temp_max: 289.986,
                        pressure: 1032.44,
                        sea_level: 1033.82,
                        grnd_level: 1032.44,
                        humidity: 98,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 3.86, deg: 322 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-21 06:00:00'
                },
                {
                    dt: 1526893200,
                    main: {
                        temp: 292.353,
                        temp_min: 292.353,
                        temp_max: 292.353,
                        pressure: 1031.95,
                        sea_level: 1033.43,
                        grnd_level: 1031.95,
                        humidity: 86,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 2.68, deg: 301 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-21 09:00:00'
                },
                {
                    dt: 1526904000,
                    main: {
                        temp: 293.33,
                        temp_min: 293.33,
                        temp_max: 293.33,
                        pressure: 1030.82,
                        sea_level: 1032.35,
                        grnd_level: 1030.82,
                        humidity: 81,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 2.11, deg: 291.504 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-21 12:00:00'
                },
                {
                    dt: 1526914800,
                    main: {
                        temp: 293.574,
                        temp_min: 293.574,
                        temp_max: 293.574,
                        pressure: 1029.63,
                        sea_level: 1031.28,
                        grnd_level: 1029.63,
                        humidity: 81,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 1.67, deg: 297.004 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-21 15:00:00'
                },
                {
                    dt: 1526925600,
                    main: {
                        temp: 292.25,
                        temp_min: 292.25,
                        temp_max: 292.25,
                        pressure: 1029.77,
                        sea_level: 1031.35,
                        grnd_level: 1029.77,
                        humidity: 86,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '02n'
                        }
                    ],
                    clouds: { all: 8 },
                    wind: { speed: 1.66, deg: 303.5 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-21 18:00:00'
                },
                {
                    dt: 1526936400,
                    main: {
                        temp: 290.499,
                        temp_min: 290.499,
                        temp_max: 290.499,
                        pressure: 1030.81,
                        sea_level: 1032.36,
                        grnd_level: 1030.81,
                        humidity: 96,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 2.46, deg: 343.002 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-21 21:00:00'
                },
                {
                    dt: 1526947200,
                    main: {
                        temp: 288.941,
                        temp_min: 288.941,
                        temp_max: 288.941,
                        pressure: 1030.9,
                        sea_level: 1032.42,
                        grnd_level: 1030.9,
                        humidity: 100,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '02n'
                        }
                    ],
                    clouds: { all: 8 },
                    wind: { speed: 2.26, deg: 340.503 },
                    rain: {},
                    sys: { pod: 'n' },
                    dt_txt: '2018-05-22 00:00:00'
                },
                {
                    dt: 1526958000,
                    main: {
                        temp: 288.183,
                        temp_min: 288.183,
                        temp_max: 288.183,
                        pressure: 1031.2,
                        sea_level: 1032.67,
                        grnd_level: 1031.2,
                        humidity: 100,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 2.23, deg: 346.505 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-22 03:00:00'
                },
                {
                    dt: 1526968800,
                    main: {
                        temp: 292.045,
                        temp_min: 292.045,
                        temp_max: 292.045,
                        pressure: 1032.18,
                        sea_level: 1033.67,
                        grnd_level: 1032.18,
                        humidity: 87,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 801,
                            main: 'Clouds',
                            description: 'few clouds',
                            icon: '02d'
                        }
                    ],
                    clouds: { all: 12 },
                    wind: { speed: 1.96, deg: 4.00787 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-22 06:00:00'
                },
                {
                    dt: 1526979600,
                    main: {
                        temp: 292.98,
                        temp_min: 292.98,
                        temp_max: 292.98,
                        pressure: 1033.01,
                        sea_level: 1034.44,
                        grnd_level: 1033.01,
                        humidity: 85,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '02d'
                        }
                    ],
                    clouds: { all: 8 },
                    wind: { speed: 1.66, deg: 86.5079 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-22 09:00:00'
                },
                {
                    dt: 1526990400,
                    main: {
                        temp: 293.348,
                        temp_min: 293.348,
                        temp_max: 293.348,
                        pressure: 1033.09,
                        sea_level: 1034.44,
                        grnd_level: 1033.09,
                        humidity: 83,
                        temp_kf: 0
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d'
                        }
                    ],
                    clouds: { all: 0 },
                    wind: { speed: 2.91, deg: 153.504 },
                    rain: {},
                    sys: { pod: 'd' },
                    dt_txt: '2018-05-22 12:00:00'
                }
            ],
            city: {
                id: 698740,
                name: 'Odessa',
                coord: { lat: 46.4775, lon: 30.7326 },
                country: 'UA',
                population: 1001558
            }
        }
    };

    componentDidMount() {
        this.getWeatherForecast();
    }

    getWeatherForecast = () => {
        fetch(
            `${Utils.weatherProviderApiUrl}/forecast?` +
                Utils.getEncodedURIComponent({
                    q: this.props.city,
                    units: this.state.units,
                    appid: Utils.weatherProviderApiKey
                })
        )
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            })
            .then(data => {
                this.setState({
                    data
                });
            })
            .catch(error => {
                Utils.message({
                    text: error
                });
            });
    };

    render() {
        return <div className="Forecast">Forecast</div>;
    }
}

export default Forecast;
