import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Selected } from '../../types';
interface Props {
    name: string;
    code: string;
    fechSelektedCountry: (code: string) => void
}

const URL_COUNTRY = 'https://restcountries.com/v2/alpha/'

const SelectedCountry:React.FC<Props> = ({code , name , fechSelektedCountry}) => {

    
  return (
    <div>
        <div className='SelectedCountry' onClick={() => fechSelektedCountry(code)}>{name}</div>
    </div>
  )
}

export default SelectedCountry
