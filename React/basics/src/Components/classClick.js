import React, { Component } from 'react'

export class classClick extends Component {
    clickHandler(){
        console.log('clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default classClick