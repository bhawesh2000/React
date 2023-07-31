// using state in class components to do changes in state of text

//when we create component class we need to include 2 imports React & Component class from react
import React , { Component }   from "react";

class Changestate extends Component {
    
    //method is a special method for creating and initializing objects created within a class.
    constructor() {

        super() // because we extends react component so to make call to base class constructor

        //this.state is an object and it had a property message
        this.state = {
            
            message: 'welcome visitor'  // bind this value in render fumction below
        }
    }

    changeMessage(){

        //to change the state component we need to call setState method which accepts an object which is new state of component

        this.setState({
            message:'Thank you for subscribing'
        })
    }

    render() {

        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Changestate;