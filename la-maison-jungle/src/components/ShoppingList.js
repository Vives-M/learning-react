import {plantList} from '../datas/plantList'

// const plantList = [
//   'monstera',
//   'ficus lyrata',
//   'pothos argenté',
//   'yucca',
//   'palmier'
// ]

function ShoppingList() {
  return (
    <ul>
      {plantList.map((plant) => (
        <li key={'${plant}-${index}'}>{plant}</li>
      ))}
    </ul>
  )
}

export default ShoppingList
