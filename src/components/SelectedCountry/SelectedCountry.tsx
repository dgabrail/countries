import axios from 'axios';
import React, { useState } from 'react'
import { SelectedCountryType } from '../../types';
import './SelectedCountry.css';
interface Props {
  selectedCountry: SelectedCountryType;
  borders: string[];
}


const SelectedCountry: React.FC<Props> = ({ selectedCountry, borders }) => {

  if (borders.length === 0) {
    return (
      <div className='SelectedCountry'>
        <h1>{selectedCountry.name}</h1>
        <div>
          <img style={{ height: '200px' }} src={selectedCountry.flag} alt="" />
        </div>
        <h2>{selectedCountry.capital}</h2>
      </div>
    )
  }


  return (
    <div className='SelectedCountry'>
      <h1>{selectedCountry.name}</h1>
      <div>
        <img style={{ height: '200px' }} src={selectedCountry.flag} alt="" />
      </div>
      <h2>{selectedCountry.capital}</h2>
      {borders.map((border, index) => (
        <span className='Border' key={index}>{border}</span>
      ))}
    </div>
  )

}



export default SelectedCountry;

