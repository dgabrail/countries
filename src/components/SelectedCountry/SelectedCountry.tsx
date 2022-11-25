import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Selected } from '../../types';
interface Props {
    name: string;
    code: string;
}

const URL_COUNTRY = 'https://restcountries.com/v2/alpha/'

const SelectedCountry:React.FC<Props> = ({code , name}) => {

    const [country , setCountry] = useState<Selected | null>(null)


    const fechSelektedCountry = async() => {
        const responseSelectCountry = await axios.get<Selected>(URL_COUNTRY + code)
        setCountry(prev => {
            return {
                borders: responseSelectCountry.data.borders,
                capital: responseSelectCountry.data.capital,
                name: responseSelectCountry.data.name,
                flag: responseSelectCountry.data.flag
            }
        })
    }

    useEffect(() => {
        console.log(country)
    } , [country])
  return (
    <div>
        <div className='SelectedCountry' onClick={fechSelektedCountry}>{name}</div>
    </div>
  )
}

export default SelectedCountry
