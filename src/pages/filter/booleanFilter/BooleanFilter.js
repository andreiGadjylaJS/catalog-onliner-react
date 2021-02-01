import React, { Component } from "react"
import CheckBox from "../../../components/CheckBox"

export default class BooleanFilter extends Component {

    onChange = checked => {
        const parameterId = this.props.item.parameter_id
        this.props.onChange(parameterId, checked)
    }

    render() {
        const { item, index } = this.props
        return (
            <div>
                <CheckBox title={item.name} key={index} onChange={this.onChange} />
            </div>
        )
    }
}
