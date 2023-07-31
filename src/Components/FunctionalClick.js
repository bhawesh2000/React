// shortcut to create functional component in ES7 is rfce

import React from 'react'

function FunctionalClick() {

    function clickHandler(){
        console.log("button clicked")
    }

  return (

    //in jsx we pass fn as event handler in side curly braces.
    <div>
      <button onClick={clickHandler}>Click</button>   
    </div>
  )
}

export default FunctionalClick
