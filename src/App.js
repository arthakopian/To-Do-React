import React from 'react';
import './App.css';
import Header from './Header';
import ElementsList from './ElementsList'
import { v4 as uuidv4 } from 'uuid'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      list: []
    }
    this.addElements = this.addElements.bind(this)
    this.removeElements = this.removeElements.bind(this)
  }

  addElements(value){
    this.setState({
      list: [...this.state.list, {value, key: uuidv4()}]
    })
  }
  
  removeElements(e){
    e.stopPropagation()
    const item = e.target.closest('div')
    this.setState({
      list: this.state.list.filter(el => el.key !== item.id)
    })
  }

  render(){
    return(
    <>
      <Header addElements = {this.addElements} />
      <ElementsList list = {this.state.list} removeElements = {this.removeElements}/>
    </>
    )  
  }

}

export default App;
