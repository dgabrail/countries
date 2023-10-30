import React from 'react';
import { CountryType } from '../../types';

interface Props {
  country: CountryType;
  showSelectedCountries: React.MouseEventHandler;
}

const Country: React.FC<Props> = ({ country, showSelectedCountries }) => {
  console.log(country)
  return (
    <div style={{ padding: '10px', margin: '10px', border: '1px solid black' }} className='Country' onClick={showSelectedCountries}>
      {country.name}
    </div>
  )
}

export default Country;
