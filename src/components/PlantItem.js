import React from 'react'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(e){
    console.log('Ceci est mon event:', e)
}

function PlantItem({name, cover, id, light, water}) {
    return (
        <li key={id} className='lmj-plant-item'  >
            <img className='lmj-plant-item-cover' onClick={() => handleClick(name)} src={cover}alt={`${name}- cover`}/>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem
