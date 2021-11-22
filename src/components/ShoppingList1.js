import React from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

function ShoppingList1() {
    const [name, cover, id, light, water] = plantList
    return (
        <div>
            <PlantItem 
                name={name} 
                cover={cover} 
                id={id} 
                light={light} 
                water={water} 
            />
        </div>
    )
}

export default ShoppingList1


// import { isCompositeComponent } from 'react-dom/test-utils';
// import { plantList } from '../datas/plantList'
// import '../styles/ShoppingList.css'
// import CareScale from './CareScale';

// function ShoppingList() {
// 	const categories = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[]
// 	)
//     console.log(categories);

// 	return (
// 		<div>
// 			<ul>
// 				{categories.map((cat) => (
// 					<li key={cat}>{cat}</li>
// 				))}
// 			</ul>
// 			<ul className='lmj-plant-list'>
// 				{plantList.map((plant) => (
// 					<li key={plant.id} className='lmj-plant-item'>
// 						{plant.name}
// 						{plant.isBestSale && <div className='lmj-sales'>Best Sales</div>}
// 						<CareScale careType='water' scaleValue={plant.water} />
// 						<CareScale careType='light' scaleValue={plant.light} />
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }

// export default ShoppingList