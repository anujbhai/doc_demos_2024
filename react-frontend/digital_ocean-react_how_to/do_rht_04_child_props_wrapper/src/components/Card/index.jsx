import PropTypes from "prop-types"

import "./Card.css"

export default function Card(props) {
  const {children, details, title} = props

  return (
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>

        {details}
      </div>

      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  details: PropTypes.elements,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  details: null
}

