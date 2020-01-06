import React from 'react';

const Form = props => (
    <form onSubmit = {props.weather}>
        <input type="text" name="city" placeholder="City name"/>
        <button className="btn form_btn">Get a weather</button>
    </form>
);

export default Form