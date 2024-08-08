import PropTypes from 'prop-types'

import './AnimalCard.css'

const AnimalCard = (props) => {
  const {
    additional,
    diet,
    name,
    scientificName,
    showAdditional,
    size,
  } = props
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size}KG</h4>
      <p>{diet.join(", ")}</p>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  )
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'Additional input not available ...'
  }
}

export default AnimalCard

