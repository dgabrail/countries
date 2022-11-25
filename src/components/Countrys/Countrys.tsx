import axios from 'axios'
import React, { useState } from 'react'
import { Country } from '../../types'
const URL_COUNTRYS = 'https://restcountries.com/v2/all?fields=alpha3Code,name'

const Countrys = () => {
    const [countrys , setCountrys] = useState<Country[]>([])
    const fechCountry = async () => {
        const responseCountry = axios.get(URL_COUNTRYS)
        console.log(responseCountry)
    }
    fechCountry()
  return (
    <div>
      
    </div>
  )
}

export default Countrys