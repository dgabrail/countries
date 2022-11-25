import axios from 'axios'
import React, { useState } from 'react'
import { Country } from '../../types'
import SelectedCountry from '../SelectedCountry/SelectedCountry'
import './Countrys.css'

const URL_COUNTRYS = 'https://restcountries.com/v2/all?fields=alpha3Code,name'

const Countrys = () => {
    const [countrys , setCountrys] = useState<Country[]>([])
    const fechCountry = async () => {
        const responseCountry = await axios.get(URL_COUNTRYS)
        setCountrys(responseCountry.data)
    }
    fechCountry()
  return (
    <div>
      <div className='Countrys'>
        {countrys.map(country => (
        <SelectedCountry code={country.alpha3Code} name={country.name}/>
      ))}
      </div>
      <div></div>
    </div>
  )
}

export default Countrys