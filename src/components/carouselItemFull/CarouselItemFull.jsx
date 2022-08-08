
import React from 'react'
import './carouselItemFull.scss'

const CarouselItemFull = ({imageUrl}) => {
  return (
    <div className="container_full">
      <img 
      className='item' 
      src={imageUrl} 
      alt="123" 
      height='800px'
      width='1000px'
      />
    </div>
  )
}

export default CarouselItemFull