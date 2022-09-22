import React from 'react';
import './Country.css'

const Country = (props) => {
    const {population, name, flags, region, capital} = props.country;
    return (
        <div className='Country1'>
            <h3 className='color-country'>Name: {name.common}</h3>
            <p>Population: {population}</p>
            <img src={flags.png}  alt=""></img>
            <div className='color-region'>
            <p>Capital:{capital}</p>
            <p>Region:{region}</p>
            </div>
        </div>
    );
};

export default Country;