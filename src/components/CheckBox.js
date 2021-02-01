import React from 'react'
import './CheckBox.css'

export default class CheckBox  extends React.Component {

  onChange = e => {
     this.props.onChange(e.target.checked,)
  }
    render() {
        return (
         <label className="wrapper--checkbox" >
             <input type="checkbox" className="filter__checkbox" onChange={this.onChange}/> <spam className="title">{this.props.title}</spam>
            </label>
        )
    }

}


