import axios from 'axios';
import Frame from 'react-frame-component';
import React, { useEffect, useState } from 'react';
import { CountryType, SelectedCountryType } from '../../types';
import Country from '../Country/Country';
import SelectedCountry from '../SelectedCountry/SelectedCountry';
import './Countries.css';
interface Props {
  countriesList: CountryType[];
}
const URL_SELECTED_COUNTRY = 'https://restcountries.com/v2/alpha/';

const Countries: React.FC<Props> = ({ countriesList }) => {
  const [borders, setBorders] = useState<string[]>([])
  const [selectedCountry, setSelectedCountry] = useState<SelectedCountryType>({
    capital: '',
    flag: '',
    name: '',
  });

  const showSelectedCountries = async (code: string) => {
    setBorders([]);
    const requestedCountry = await axios.get(URL_SELECTED_COUNTRY + code);
    setSelectedCountry(prev => ({
      ...prev,
      capital: requestedCountry.data.capital,
      flag: requestedCountry.data.flag,
      name: requestedCountry.data.name,
    }))

    console.log(selectedCountry.name)

    requestedCountry.data.borders.map(async (border: string) => {
      const borderName = await (await axios(URL_SELECTED_COUNTRY + border)).data.name
      setBorders(prev => [...prev, borderName]);
    })

  }

  return (
    <div className='Countries'>
      <Frame className='Farme'>
        {countriesList.map((country, index) => (
          <Country key={index} country={country} showSelectedCountries={() => showSelectedCountries(country.alpha3Code)} />
        ))}
      </Frame>
      <SelectedCountry borders={borders} selectedCountry={selectedCountry} />
    </div>
  )

}

export default Countries;