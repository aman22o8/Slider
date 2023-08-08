// Write your code here
import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <div data-testid="planets" className="main_container">
      <h1 className="main_heading">Planets</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} eachItem={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
