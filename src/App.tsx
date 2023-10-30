import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Countrys from './components/Countries/Countries';
import { CountryType } from './types';
const URL_COUNTRYS = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

function App() {
  const [countriesList, setCountriesList] = useState<CountryType[]>([]);

  const showCountries = async () => {
    const requestedCountries = await axios.get(URL_COUNTRYS);
    setCountriesList(requestedCountries.data);
  };

  useEffect(() => { showCountries().catch(e => console.error(e)) }, []);

  return (
    <div className="App">
      <Countries countriesList={countriesList} />
    </div>
  );
}

export default App;
