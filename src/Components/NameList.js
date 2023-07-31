import React from 'react'
import Person from './Person'

function NameList() {

    const persons=[
        {
            id:1,
            name:'bruno',
            skill:'Angular'
        },
        {
            id: 2,
            name:'leo',
            skill:'React'
        },
        {
            id:3,
            name:'clark',
            skill:'nodejs'
        }
    ]

    const personList= persons.map((person)=> <Person key={person.id} person={person} />)   // person is property which is passed as prop to Person Component
 /**React wants each item render using map should have prop called key which can be any unique element in list, 
   key props are not accessible in chlid component */
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList
