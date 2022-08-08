import React from 'react'
import './carouselItemPreview.scss'

const CarouselItemPreview = ({previewUrl, setShowGallery}) => {

  return (
    <div className="container_preview" onClick={() => setShowGallery(true)}>
      <img 
      className='item' 
      src={previewUrl} 
      alt="123" 
      height='150px'
      width='227px'
      />
    </div>
  )
}

export default CarouselItemPreview