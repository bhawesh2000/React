// this is higher order Component(hoc)
//hoc is a function accepts originalComponent as arguement and return new component

import React from "react";

const UpdatedComponent= (OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count: 0
          }
        }

        incrementCount = ()=>{
            this.setState((prevState)=>{
                return {count: prevState.count + 1 }
            })
        }

        render(){
            return (
                <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />  // can render these props in OriginalComponent which is ClickCounter and HoverCount components
            )
        }
        
    }
    return NewComponent
}

export default UpdatedComponent   //to use hoc fn we need to export