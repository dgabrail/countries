import axios from 'axios';
import React, { useState } from 'react'
import { Selected } from '../../types';
interface Props {
    name: string;
    code: string;
}

const URL_COUNTRY = 'https://restcountries.com/v2/alpha/'

const SelectedCountry:React.FC<Props> = ({code , name}) => {
    const [country , setCountry] = useState<Selected | null>(null)
    const fechSelektedCountry = async() => {
        const responseSelectCountry = await axios.get(URL_COUNTRY + code)
    }
  return (
    <div>
        {name}
    </div>
  )
}

export default SelectedCountry
