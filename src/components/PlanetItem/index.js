// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {name, imageUrl, description} = eachItem

  return (
    <div className="my_list_contianer">
      <img className="image_2" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="heading_planet">{name}</h1>
      <p className="description1">{description}</p>
    </div>
  )
}

export default PlanetItem
