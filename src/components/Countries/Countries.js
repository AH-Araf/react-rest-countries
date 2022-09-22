import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data) )
    }, [])

    return (
        <div className='Country'>
            {/* <h1>Hello From Countries: {countries.length}</h1> */}
            {
                countries.map(country => <Country 
                    country= {country}
                    key = {country.cca3} //take unique key from api data
                    // flags={country.flags.png} 
                    // name={country.name.common} 
                    // population={country.population}
                    ></Country>)
            }
        </div>
    );
};

export default Countries;