import React, { Component } from 'react'
import CheckBox from '../../../components/CheckBox'
import NumberRange from '../../../components/NumberRange'
import "./NumberRangeFilter.css"

export default class NumberRangeFilter extends Component {



    render() {
        let from = "от"
        let to = "до"
        const { name: title, parameter_id: filterId } = this.props.item
        const placeholders = this.props.placeholders
        if (placeholders[filterId]) {
            from = placeholders[filterId].from
            to = placeholders[filterId].to
        }

        return (

            <div>
                <h4>{title}</h4>
                <NumberRange from={from} to={to} title={title} filterId={filterId} onChangeFrom={this.props.onChangeFrom} onChangeTo={this.props.onChangeTo} />
            </div>
        )
    }
}
