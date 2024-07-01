import React from "react"

class Header extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleAdd(){
    const {value} = this.state

    if (value.trim() === '') {
      alert('You must write something')
    } else {
      this.props.addElements(value)  
      this.setState({
        value: ''
      })
    }  
  }

  handleKeyDown(e){
    if (e.key === 'Enter') {
      this.handleAdd()
    }
  }

  render(){
    return (
      <div className="header">
        <h1>My To Do List</h1>
        <div className="my-input">
          <input 
            type="text" 
            placeholder="Title..." 
            className="title" 
            value={this.state.value}  
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}>
          </input>
          <button className="my-button" onClick={this.handleAdd} >Add</button>
        </div>
      </div>
    )
  }

}

export default Header