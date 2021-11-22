import React from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

function ShoppingList1() {
	const reducer = (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category)

    const categories = plantList.reduce(reducer, []
    )
    return (
        <div>
            <ul>
                {categories.map(cat => <li key={cat}>{cat}</li>)}
            </ul>
            <ul>
                {plantList.map(({id, cover, name, water, light}) => (
                    <PlantItem 
                    name={name} 
                    cover={cover} 
                    id={id} 
                    light={light} 
                    water={water} 
                />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList1
