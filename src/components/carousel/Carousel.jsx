import React, { useState, useEffect, Children } from 'react'
import { cloneElement } from 'react'
import './carousel.scss'

// const PAGE_WIDTH = 210

const Carousel = ({children, pageWidth, imgCount, imgWidth, imgHeight}) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageWidth
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageWidth
      const maxOffset = -(pageWidth * (pages.length - imgCount))
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${pageWidth}px`,
            maxWidth: `${pageWidth}px`
          }
        })
      })
    )
  }, [children, pageWidth])

  return (
    <div className="wrapper">
      <div className="arrow" onClick={handleLeftArrowClick}>{'<'}</div>
      <div className='main-container' 
        style={{height:`${imgHeight}px`, width:`${imgWidth}px`}}
       >
        <div className="window">
          <div 
            className="all-pages-container"
            style={{
              transform: `translateX(${offset}px)`
            }}
          >{pages}</div>
        </div>
      </div>
      <div className="arrow" onClick={handleRightArrowClick}>{'>'}</div>
    </div>
  )
}

export default Carousel