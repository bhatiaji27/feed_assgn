import Styles from "../styles/ImageCard.module.css"
const ImageCard = ({image, sx}) => {

  return (
    <div className={Styles.container}>
      <div className={Styles.image_container}>
      <img src={image} alt="xyz" style={...sx} />
      </div>
    </div>
  )
}

export default ImageCard
