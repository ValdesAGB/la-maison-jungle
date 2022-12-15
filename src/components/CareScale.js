import React from 'react'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ?(<img src={sun} alt='sun-icone'/>) : (<img src={water} alt='water-icone' />)

    function informationPlant( ){
       const quantityLevel ={
            1 : 'peu',
            2 : 'modérément',
            3 : 'beaucoup'
       }

       alert(`Cette plante requiert ${quantityLevel[scaleValue]} ${careType === 'light' ? 'de lumière' : `d'eau`}`)
    }

  return (
    <div onClick={() => informationPlant()}>
        {range.map((rangeElem) =>(
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
        ))}
    </div>
  )
}

export default CareScale