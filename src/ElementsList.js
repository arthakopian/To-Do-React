import React from "react"
import RenderElement from "./RenderElement"

// class ElementsList extends React.Component {
//   render() {
//     const { list, removeElements, searchValue, filterValue, toggleDone } = this.props

//     let filteredList = [];
//     switch (filterValue) {
//       case 'all':
//         filteredList = list.filter(item => item.value.includes(searchValue));
//         break;
//       case 'done':
//         filteredList = list.filter(item => item.done && item.value.includes(searchValue));
//         break;
//       case 'notDone':
//         filteredList = list.filter(item => !item.done && item.value.includes(searchValue));
//         break;
//       default:
//         break;
//     }

//     return (
//       <>
//         {filteredList.map(item => (
//           <RenderElement
//             handleRemove={(e) => removeElements(e)}
//             key={item.key}
//             id={item.key}
//             value={item.value}
//             done={item.done}
//             toggleDone={() => toggleDone(item.key)}
//           />
//         ))}
//       </>
//     )
//   }
// }

function ElementsList(props) {
  const { list, removeElements, searchValue, filterValue, toggleDone } = props

  let filteredList = [];
  switch (filterValue) {
    case 'all':
      filteredList = list.filter(item => item.value.includes(searchValue));
      break;
    case 'done':
      filteredList = list.filter(item => item.done && item.value.includes(searchValue));
      break;
    case 'notDone':
      filteredList = list.filter(item => !item.done && item.value.includes(searchValue));
      break;
    default:
      break;
  }

  return (
    <>
      {filteredList.map(item => (
        <RenderElement
          handleRemove={(e) => removeElements(e)}
          key={item.key}
          id={item.key}
          value={item.value}
          done={item.done}
          toggleDone={() => toggleDone(item.key)}
        />
      ))}
    </>
  )
}

export default ElementsList
