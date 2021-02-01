import React, { Component } from 'react'
import './NumberRange.css'

const NumberRange = ({ from, to, onChangeFrom, onChangeTo, filterId }) => {

    return (
        <div className="wrapper--number-range">
            <input className="numberRange " placeholder={from} onChange={(event) => onChangeFrom(filterId, event.target.value)} />
            <input className="numberRange " placeholder={to} onChange={(event) => onChangeTo(filterId, event.target.value)} />
        </div>
    )
}

export default NumberRange




