//to help us understand do's and dont's in state and setstate, we will have count value and a button to increment it

import React, { Component } from 'react'

 class Counter extends Component {

    // 1st we need count state to track counter value and we initialize it in a constructor

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){

 //this.state.count = this.state.count + 1; - It will not change count value in UI but will change in console so we shouls not modify state value directly
 //the only place we can specify this.state is in constructor

 //so any time to change the state setState method is used, setState accepts an object

 //when ever we need to execute code after state is changed we pass callback as second parameter 
 //so to change the value of console after the change in UI console.log is done in callback fn
    this.setState(
        {
            count : this.state.count + 1
        } , ()=>{   
                    console.log('callback value' , this.state.count) 
                }
        )
    
        
    }
    
  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={()=> this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
