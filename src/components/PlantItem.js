import React from 'react'
import '../styles/PlantItem.css'
import CareScale from './CareScale'

function PlantItem({id, cover, name, water, light }) {
    
  return (
    <React.Fragment>
        <li key={id} className='lmj-plant-item'>
                <img src={cover} alt={`${name} - cover`} className='lmj-plant-item-cover'/>
                {name}
                <CareScale careType='water' scaleValue = {water}/>
                <CareScale careType='light' scaleValue = {light}/>
            </li> 
    </React.Fragment>
  )
}

export default PlantItem