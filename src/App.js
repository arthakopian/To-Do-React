import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import Header from './Header';
import ElementsList from './ElementsList'

// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       list: [],
//       searchValue: '',
//       filterValue: 'all',
//     }
//     this.addElements = this.addElements.bind(this)
//     this.removeElements = this.removeElements.bind(this)
//     this.searchElement = this.searchElement.bind(this)
//     this.filterElements = this.filterElements.bind(this)
//     this.toggleDone = this.toggleDone.bind(this)
//   }

//   addElements(value) {
//     this.setState({
//       list: [...this.state.list, { value, key: uuidv4(), done: false }]
//     })
//   }

//   removeElements(e) {
//     e.stopPropagation()
//     const item = e.target.closest('div')
//     this.setState({
//       list: this.state.list.filter(el => el.key !== item.id)
//     })
//   }

//   searchElement(value) {
//     this.setState({
//       searchValue: value
//     })
//   }

//   filterElements(value) {
//     this.setState({
//       filterValue: value
//     })
//   }

//   toggleDone(key) {
//     this.setState(prevState => ({
//       list: prevState.list.map(item =>
//         item.key === key ? { ...item, done: !item.done } : item
//       )
//     }));
//   }

//   render() {
//     return (
//       <>
//         <Header
//           addElements={this.addElements}
//           searchElement={this.searchElement}
//           filterElements={this.filterElements}
//         />
//         <ElementsList
//           list={this.state.list}
//           searchValue={this.state.searchValue}
//           removeElements={this.removeElements}
//           filterValue={this.state.filterValue}
//           toggleDone={this.toggleDone}
//         />
//       </>
//     )
//   }
// }

function App() {
  const [list, setList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filterValue, setFilterValue] = useState('all')

  const addElements = (value) => {
    setList([...list, { value, key: uuidv4(), done: false }])
  }

  const removeElements = (e) => {
    const item = e.target.closest('li')
    setList(list.filter(el => el.key !== item.id))
  }

  const searchElement = (value) => {
    setSearchValue(value)
  }

  const filterElements = (value) => {
    setFilterValue(value)
  }

  const toggleDone = (key) => {
    setList(list.map(item => item.key === key ? { ...item, done: !item.done } : item
    ))
  }

  return (
    <>
      <Header
        addElements={addElements}
        searchElement={searchElement}
        filterElements={filterElements}
      />
      <ElementsList
        list={list}
        searchValue={searchValue}
        removeElements={removeElements}
        filterValue={filterValue}
        toggleDone={toggleDone}
      />
    </>
  )
}

export default App;
