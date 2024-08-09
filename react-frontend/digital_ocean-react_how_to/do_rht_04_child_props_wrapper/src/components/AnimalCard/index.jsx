import PropTypes from "prop-types"
import AnimalDetails from "../AnimalDetails"
import Card from "../Card"

export default function AnimalCard({ name, size, ...props }) {
  return (
    <Card
      title="Animal"
      details={
        <AnimalDetails
          {...props}
        />
      }
    >
      <h3>{name}</h3>
      <div>{size}kg</div>
    </Card>
  )
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
} 

