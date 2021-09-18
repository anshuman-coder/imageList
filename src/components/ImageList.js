import React from 'react'

const ImageList = (props) => {

  const img = props.images.map((image) => {
    return <img key={ image.id } src={image.webformatURL} alt="" />
  })

  return (
  <div>
      {img}
  </div>
    
  )
}

export default ImageList
