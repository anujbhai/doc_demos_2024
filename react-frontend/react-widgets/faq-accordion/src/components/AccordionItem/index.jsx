import PropTypes from 'prop-types'
import { useState } from 'react';

const AccordionItem = props => {
  const { isFirst, title, content } = props;

  const [isOpen, setIsOpen] = useState(isFirst)

  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <div className="accordion-item">
      <div
        className="accordion-item__header"
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <span className="icon">{
          isOpen
            ? (<img src="/images/icon-minus.svg" alt="icon expand" />)
            : (<img src="/images/icon-plus.svg" alt="icon collapse" />)
        }
        </span>
      </div>

      <div className={`accordion-item__content ${isOpen ? 'show' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
}

export default AccordionItem;

