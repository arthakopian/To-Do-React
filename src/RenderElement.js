import React from "react"

class RenderElement extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isDone: false,
    }
    this.handleDoneClick = this.handleDoneClick.bind(this)
  }

  handleDoneClick(){
    this.setState({
      isDone: !this.state.isDone
    })
  }

  render(){
    const {value, handleRemove, id} = this.props
    const {isDone} = this.state

    return (
      <div id={id} className={isDone ? "new-element action-done" : "new-element"} 
       onClick={this.handleDoneClick}>
        {value}  
        <span className="cross" onClick={handleRemove} >✖</span>
      </div>
    )
  }
  
}

export default RenderElement