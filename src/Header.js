import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

// class Header extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       value: '',
//       searchValue: '',
//     }
//     this.timer = null
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSearchChange = this.handleSearchChange.bind(this)
//     this.handleAdd = this.handleAdd.bind(this)
//     this.handleKeyDown = this.handleKeyDown.bind(this)
//     this.handleFilterChange = this.handleFilterChange.bind(this)
//   }

//   handleChange(e) {
//     this.setState({
//       value: e.target.value,
//     })
//   }

//   handleSearchChange(e) {
//     const { value } = e.target

//     this.setState({
//       searchValue: value,
//     })

//     if (this.timer) {
//       clearTimeout(this.timer)
//     }

//     this.timer = setTimeout(() => {
//       this.props.searchElement(value)
//     }, 500)
//   }

//   handleFilterChange(e) {
//     this.props.filterElements(e.target.value)
//   }

//   handleAdd() {
//     const { value } = this.state

//     if (value.trim() === '') {
//       alert('You must write something')
//     } else {
//       this.props.addElements(value)
//       this.setState({
//         value: ''
//       })
//     }
//   }

//   handleKeyDown(e) {
//     if (e.key === 'Enter') {
//       this.handleAdd()
//     }
//   }

//   render() {
//     return (
//       <div className="header">
//         <h1>My To Do List</h1>
//         <div className="my-input">
//           <input
//             placeholder="Title..."
//             className="title"
//             value={this.state.value}
//             onChange={this.handleChange}
//             onKeyDown={this.handleKeyDown}>
//           </input>
//           <button className="my-button" onClick={this.handleAdd} >Add</button>
//         </div>
//         <div className="my-input">
//           <input
//             placeholder="Search..."
//             className="title"
//             value={this.state.searchValue}
//             onChange={this.handleSearchChange}
//           >
//           </input>
//           <button className="my-button ">Search</button>
//         </div>
//         <div onChange={this.handleFilterChange} className="toggle">

//           <input className="toggle-input" defaultChecked type="radio" id="chooseAll" name="toggle" value="all" />
//           <label htmlFor="chooseAll" className="toggle-label">All</label>

//           <input className="toggle-input" type="radio" id="chooseDone" name="toggle" value="done" />
//           <label htmlFor="chooseDone" className="toggle-label">Done</label>

//           <input className="toggle-input" type="radio" id="chooseNotDone" name="toggle" value="notDone" />
//           <label htmlFor="chooseNotDone" className="toggle-label">Not Done</label>

//         </div>
//       </div>
//     )
//   }
// }

function Header(props) {
  const { addElements, searchElement, filterElements } = props
  let timer = null

  const [value, setValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSearchChange = (e) => {
    const { value } = e.target

    setSearchValue(value)

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      searchElement(value)
    }, 500)
  }

  const handleFilterChange = (e) => {
    filterElements(e.target.value)
  }

  const handleAdd = () => {
    if (value.trim() === '') {
      alert('You must write something')
    } else {
      addElements(value)
      setValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  // return (
  //     <div className="header">
  //       <h1>My To Do List</h1>
  //       <div className="my-input">
  //         <input
  //           placeholder="Title..."
  //           className="title"
  //           value={value}
  //           onChange={handleChange}
  //           onKeyDown={handleKeyDown}>
  //         </input>
  //         <button className="my-button" onClick={handleAdd} >Add</button>
  //       </div>
  //       <div className="my-input">
  //         <input placeholder="Search..." className="title" value={searchValue} onChange={handleSearchChange} />
  //         <button className="my-button">Search</button>
  //       </div>
  //       <div onChange={handleFilterChange} className="toggle">
  //         <input className="toggle-input" defaultChecked type="radio" id="chooseAll" name="toggle" value="all" />
  //         <label htmlFor="chooseAll" className="toggle-label">All</label>

  //         <input className="toggle-input" type="radio" id="chooseDone" name="toggle" value="done" />
  //         <label htmlFor="chooseDone" className="toggle-label">Done</label>

  //         <input className="toggle-input" type="radio" id="chooseNotDone" name="toggle" value="notDone" />
  //         <label htmlFor="chooseNotDone" className="toggle-label">Not Done</label>

  //       </div>
  //     </div>
  // )

  return (
    <Box sx={{ px: 18.75, py: 5, background: '#c2d4ec' }}>
      <Typography variant="h4" gutterBottom>My To Do List</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
        <TextField
          autoComplete="off"
          fullWidth
          label="Title"
          variant="outlined"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          sx={{ width: 0.75 }}
        />
        <Button sx={{ width: 0.2, py: 2 }} variant="contained" onClick={handleAdd}>Add</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
        <TextField
          autoComplete="off"
          fullWidth
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={handleSearchChange}
          sx={{ width: 0.75 }}
        />
        <Button sx={{ width: 0.2, py: 2 }} variant="contained">Search</Button>
      </Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">Filter</FormLabel>
        <RadioGroup row defaultValue="all" onChange={handleFilterChange}>
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="done" control={<Radio />} label="Done" />
          <FormControlLabel value="notDone" control={<Radio />} label="Not Done" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default Header