import PropTypes from 'prop-types'
import { useState } from 'react'

import './ParentChild.css'

const ChildComponent = (props) => {
  const {
    sendDataToParent,
  } = props

  const [childData, setChildData] = useState('')

  return (
    <div className="child-component">
      <p>This is child value: {childData}.</p>
      <input
        type="text"
        placeholder='Child input'
        onChange={(e) => setChildData(e.target.value)}
      />
      <button onClick={sendDataToParent(childData)}>Send to parent</button>
    </div>
  )
}

ChildComponent.propTypes = {
  sendDataToParent: PropTypes.func,
}

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(null)

  const handleData = (data) => setDataFromChild(data)

  return (
    <div className="parent-component">
      <h2>This is parent</h2>
      <p>Data from child: <strong>{dataFromChild}</strong></p>
      <ChildComponent
        sendDataToParent={handleData}
      />
    </div>
  )
}

const ParentChild = () => {
  return (
    <div className="parent-child-component">
      <ParentComponent />
    </div>
  )
}

export default ParentChild

