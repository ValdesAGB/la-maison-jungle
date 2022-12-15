import React, { useState } from 'react'
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import PlantItem from './PlantItem'

function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (x, y) => (x.includes(y.category) ? x : x.concat(y.category)),
    []
  )
  const [activeCategory, setActiveCategory] = useState('')

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name)
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <React.Fragment>
      <div className="lmj-shopping-list">
        <Categories
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />

        <ul className="lmj-plant-list">
          {plantList.map(({ id, cover, name, water, light, price, category }) =>
            !activeCategory || activeCategory === category ? (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                  price={price}
                />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
              </div>
            ) : null
          )}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default ShoppingList
