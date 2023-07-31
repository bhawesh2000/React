import React from 'react'


function ChildComponent(props) {
  return (
    
    <div>
        {/* greetHandler is reference to a function in parentComponent */}
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

        {/* passing parameter when calling to the parent method from child component for that arrow fn is simplest way to pass parameter */}
        <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>  {/* child is a parameter we pass to greetparent()  */}
    </div>
  )
}

export default ChildComponent
