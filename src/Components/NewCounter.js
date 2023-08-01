// this is created for woring with Render props concept to share props and common functionaality
import React, { Component } from 'react'

class NewCounter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      
      incrementCount = ()=>{
          this.setState((prevState)=>{
              return {count:prevState.count +1}
          })
      }


  render() {
    
    return (
      <div> {/* jsx is empty because render prop is going to control what is render by this counter component in app.js */}
        {this.props.render(this.state.count , this.incrementCount)}  {/* // passing them as parameter to prop, render prop functionality */}
      </div>
    )
  }
}

export default NewCounter
