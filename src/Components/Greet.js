//for functional component

import React from "react";

 /* const Greet = (props) => {
    
    return(

        // JSX should contain only one wrapper so we include both inside one div

        <div>                             
        <h1>Hello {props.name}</h1> 
        {props.children}    
    </div>
    
    )
} */

//destructuring props, extracting name and heroName from props

const Greet = (props) => {
    const {name , heroName}=props
    
    return(

        // JSX should contain only one wrapper so we include both inside one div

        <div>                             
        <h1>Hello {name} = {heroName}</h1>

        {props.children}    
    </div>
    
    )
}
export default Greet