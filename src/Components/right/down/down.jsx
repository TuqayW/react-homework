import React from 'react'
import './down.scss'
import idman from '../../../Data/data.json'

const down = () => {
  return (
    <div className='down'>
      <div className="create">
        <img src="./imgs/Group 18.svg" alt="" />
      </div>
      {
        idman.map(idma => {
          return (
            <div key={idma.id} className="card">
              <img src={idma.source} alt="" />
              <div className="yazilar-heyatlar">
                <h4>{idma.name}</h4>
                <p>{idma.members}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default down