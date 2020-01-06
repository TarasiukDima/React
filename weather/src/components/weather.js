import React from 'react';

const Weather = props => (
    <div>
        { props.city &&
            <div className="weather">
                <p>City: {props.city}</p>
                <p>Country: {props.country}</p>
                <p>Temperature: {props.temp} &#176;C</p>
                <p>Preassure: {props.pressure}</p>
                <p>Sunset: {props.sunset}</p>
            </div>
        }
        <p>{props.error } </p>
    </div>
);

export default Weather