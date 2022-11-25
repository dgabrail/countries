import axios from 'axios'
import React, { useState } from 'react'
import { Country, Selected } from '../../types'
import NewCountry from '../NewCountry/NewCountry'
import SelectedCountry from '../SelectedCountry/SelectedCountry'
import './Countrys.css'

const URL_COUNTRYS = 'https://restcountries.com/v2/all?fields=alpha3Code,name'
const URL_COUNTRY = 'https://restcountries.com/v2/alpha/'

const Countrys = () => {
    const [countrys , setCountrys] = useState<Country[]>([])
    const fechCountry = async () => {
        const responseCountry = await axios.get(URL_COUNTRYS)
        setCountrys(responseCountry.data)
    }
    fechCountry()

    const [select , setSelect] = useState<JSX.Element | null>(null)

    const fechSelektedCountry = async(code: string) => {
        const responseSelectCountry = await axios.get<Selected>(URL_COUNTRY + code)
        setSelect(<NewCountry 
            borders={responseSelectCountry.data.borders}
            capital={responseSelectCountry.data.capital}
            flag={responseSelectCountry.data.flag}
            name={responseSelectCountry.data.name}
            />)
    }
  return (
    <div className='Basic'>
      <div className='Countrys'>
        {countrys.map((country , index) => (
        <SelectedCountry key={index} fechSelektedCountry={fechSelektedCountry}  code={country.alpha3Code} name={country.name}/>
      ))}
      </div>
      <div className='NewCountry'>
        {select}
      </div>
    </div>
  )
}

export default Countrys