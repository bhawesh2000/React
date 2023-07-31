// for class components

//when we create component class we need to include 2 imports React & Component class from react
import React , { Component }   from "react";

class Welcome extends Component {
    render() {
        return <h1> Class Component </h1>
    }
}

export default Welcome;