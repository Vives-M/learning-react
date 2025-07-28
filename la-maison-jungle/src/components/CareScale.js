import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? (<img src={sun} alt='sun' />) : (<img src={water} alt='water' />)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={() => planteNeeds(careType, rangeElem)}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function planteNeeds(careType, rangeElem){
  if(careType === 'light' && rangeElem === 1) {

    alert('Cette plante nécéssite un peu de lumière')
  }
  else if(careType === 'light' && rangeElem === 2){
    alert('Cette plante nécéssite modérément de la lumière')
  }
    else if(careType === 'light' && rangeElem === 3){
    alert('Cette plante nécéssite beaucoup de lumière')
  }
  else if (careType === 'water' && rangeElem === 1) {
    alert('Cette plante nécéssite un peu d\'arrosage')
  }
  else if (careType === 'water' && rangeElem === 2 ) {
    alert('Cette plante nécéssite modérément de l\'arrosage')
  }
    else if (careType === 'water' && rangeElem === 3 ) {
    alert('Cette plante nécéssite beaucoup d\'arrosage')
  }
}

export default CareScale
