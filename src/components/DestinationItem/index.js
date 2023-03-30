import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails
  return (
    <li className="card-container">
      <div className="card-content">
        <img className="item-image-control" src={imgUrl} alt={name} />
        <p className="item-heading">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
