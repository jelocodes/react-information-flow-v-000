import React from 'react'
import Tier3 from './Tier3'

const Tier2 = (props) => (
  <div className="tier2" onClick={props.handleChildClick} style={{backgroundColor: props.color, color: props.color}}>
    <Tier3 handleGrandchildClick={props.handleGrandchildClick} color={props.childColor} />
    <Tier3 handleGrandchildClick={props.handleGrandchildClick} color={props.childColor} />
  </div>
)

export default Tier2