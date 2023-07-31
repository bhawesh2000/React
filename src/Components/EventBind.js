import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello Bhawesh'
      }

        //for approch 3only - binding in constructor
    /* this.clickHandler=this.clickHandler.bind(this) */
    }

  //for 4th approch clickHandler as arrow function as class property
    clickHandler=() =>{
        this.setState({
            message: 'GoodBye!!'
        })
    } 

    /* clickHandler(){
      //this keyword is undefind in event handler so we use approch 1,2,3,4 used in button created below to access state change on event fired
        this.setState({
            message: 'GoodBye!!'
        })
    } */
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick= {this.clickHandler.bind(this)}>Click</button> ...this keyword is undefind in event handler so */} {/* for approach 1 */}
        {/* <button onClick={()=>{this.clickHandler()}}>Click</button> */}    {/* for approach 2 */}
        <button onClick={this.clickHandler}>Click</button>                    {/* for approch 3 and 4 */}
      </div>
    )
  }
}

export default EventBind
