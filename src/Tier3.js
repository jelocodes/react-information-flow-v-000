import React from 'react'

const Tier3 = (props) => (
  <div className="tier3" onClick={props.handleGrandchildClick} style={{backgroundColor: props.color, color: props.color}}></div>
)

export default Tier3