// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h3>{title}</h3>
      <p className="para-2">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default CardItem
