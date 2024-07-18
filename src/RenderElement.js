import React from "react"

// class RenderElement extends React.Component {

//   render() {
//     const { value, handleRemove, id, toggleDone, done } = this.props

//     return (
//       <div id={id} className={done ? "new-element action-done" : "new-element"}
//         onClick={toggleDone}
//       >
//         {value}
//         <span className="cross" onClick={handleRemove} >✖</span>
//       </div>
//     )
//   }

// }

function RenderElement(props) {
  const { value, handleRemove, id, toggleDone, done } = props

  return (
    <div id={id} className={done ? "new-element action-done" : "new-element"} onClick={toggleDone}>
      {value}
      <span className="cross" onClick={handleRemove} >✖</span>
    </div>
  )
}

export default RenderElement