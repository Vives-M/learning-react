import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({name, cover, light, water}){
  return (
    <li className="lmj-plant-item">
      <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
      {name}
      <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />

      </div>

    </li>
  )
}

// function handleClick(plantName){
//   alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix !`)
// }

export default PlantItem
