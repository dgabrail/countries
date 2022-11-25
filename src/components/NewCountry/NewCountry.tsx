import React from 'react'
interface Props {
    name: string;
    borders: [];
    flag: string;
    capital: string;
}

const NewCountry: React.FC<Props> = ({borders , capital , flag , name}) => {
  return (
    <div>
      <div>{borders.map(border => {
        return border + ' '
      })}</div>
      <div>{name}</div>
      <div>{capital}</div>
      <img style={{height: '200px' , width: '200px'}} src={flag} />
    </div>
  )
}

export default NewCountry
