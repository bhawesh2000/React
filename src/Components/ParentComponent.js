import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }

    

    greetParent(childName){ //childName is the parameter passed from child component
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        {/* we are passing a reference to greetparent method as a props called greetHandler so we dont use parenthesis in greetparent */}
        {/* <ChildComponent greetHandler={this.greetParent} /> */} 

        <ChildComponent greetHandler={this.greetParent} /> 
      </div>
    )
  }
}

export default ParentComponent
