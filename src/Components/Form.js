import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'React'
      }
    }

    handleUserNameChange=(event)=>{

        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }

    handleTopicChange=(event)=>{

        this.setState({
            topic:event.target.value
        })
    }
    
    handleFormSubmit=(event)=>{
        alert(`Submitted values are ${this.state.username} , ${this.state.comment} , ${this.state.topic}`)

        event.preventDefault()   //if we dont want form to refresh when form is submitted
        
    }
    
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
            <label>UserName</label>
            <input type='text' value={this.state.username} onChange={this.handleUserNameChange}/>
        </div>
        <div>
            <label>Comment</label>
            <input type='text' value={this.state.comment} onChange={this.handleCommentChange}/>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>View</option>
            </select>
        </div>
        <button type='Submit'>Submit</button>
      </form>
    )
  }
}

export default Form
