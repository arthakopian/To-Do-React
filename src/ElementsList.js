import React from "react"
// import RenderElement from "./RenderElement"
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Delete } from "@mui/icons-material";

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

  // return (
  //   <>
  //     {filteredList.map(item => (
  //       <RenderElement
  //         handleRemove={(e) => removeElements(e)}
  //         key={item.key}
  //         id={item.key}
  //         value={item.value}
  //         done={item.done}
  //         toggleDone={() => toggleDone(item.key)}
  //       />
  //     ))}
  //   </>
  // )
  return (
    <List>
      {filteredList.map(item => (
        <ListItem
          sx={{ width: 1, textAlign: 'center' }}
          onClick={() => toggleDone(item.key)}
          className={item.done ? "new-element action-done" : "new-element"}
          id={item.key}
          key={item.key}
          secondaryAction={
            <IconButton onClick={(e) => removeElements(e)} aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemText primary={item.value} />
        </ListItem>
      ))}
    </List>
  );
}

export default ElementsList
