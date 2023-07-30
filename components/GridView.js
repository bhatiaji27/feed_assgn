import React from 'react'
import ImageCard from './ImageCard'

const GridView = ({images}) => {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "5rem"}}>
      {images?.map(image => {
        return <ImageCard image={image?.urls?.small_s3} sx={{height: "20rem", width: "17rem", border: "5px solid white"}} />
      })}
    </div>
  )
}

export default GridView