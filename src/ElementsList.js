import React from "react"
import RenderElement from "./RenderElement"


class ElementsList extends React.Component{
  
  render(){
    const {list, removeElements} = this.props
    
    return (
      list.map(item => (
      <RenderElement 
        handleRemove = {(e) => removeElements(e)}  
        key = {item.key} 
        id = {item.key}
        value = {item.value}/>
      ))
    )
  }

}

export default ElementsList
