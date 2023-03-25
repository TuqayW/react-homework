import React from 'react'
import './right.scss'
import Up from './up/up'
import Down from './down/down'

const right = () => {
  return (
    <div className='right'>
        <Up/>
        <Down/>
    </div>
  )
}

export default right