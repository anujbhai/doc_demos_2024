import React, { Component } from "react"

import './Instructions.css'
import emoji from "../../emoji.svg"

export default function Instructions() {
  return (
    <div className="instructions">
      <img alt="laughing crying emoji" src={emoji} />
      <p>Click on an emoji to view the short name.</p>
    </div>
  )
}

