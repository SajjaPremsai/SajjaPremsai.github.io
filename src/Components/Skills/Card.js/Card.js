import React from 'react'
import "./Card.css"

export default function Card({item}) {
  return (
        <div className='Card'>
        <img src={item.path} alt='' height={100} width={100} />
        <h2 className='Card-header'>{item.title}</h2>
    </div>
  )
}
