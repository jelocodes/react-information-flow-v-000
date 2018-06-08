import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor() {
    super()
    const [color1, color2, color3] = this.generateColors()
    this.state = {
      color: color1,
      childColor: color2,
      grandchildColor: color3
    }
  }

  generateColors = (count=3) => {
    const colors = [getRandomColor()]
    for (let i = 0; i <= count; i++) {
      colors.push(getReducedColor(colors[i]))
    }
    return colors
  }

  handleClick = () => {
    const [color1, color2, color3] = this.generateColors()
    this.setState({
      color: color1,
      childColor: color2,
      grandchildColor: color3
    })
  }

  handleChildClick = (e) => {
    e.stopPropagation()
    const [color2, color3] = this.generateColors(2)
    this.setState({
      childColor: color2,
      grandchildColor: color3
    })
  }

  handleGrandchildClick = (e) => {
    e.stopPropagation()
    const [color3] = this.generateColors(1)
    this.setState({
      grandchildColor: color3
    })
  }

  render() {
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={this.handleChildClick} handleGrandchildClick={this.handleGrandchildClick} color={this.state.childColor} childColor={this.state.grandchildColor} />
        <Tier2 handleChildClick={this.handleChildClick} handleGrandchildClick={this.handleGrandchildClick} color={this.state.childColor} childColor={this.state.grandchildColor} />
      </div>
    )
  }
}
