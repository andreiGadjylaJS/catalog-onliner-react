import React from 'react'
import './Icons.css'
import { FaUserCircle, FaAngleUp, FaComment, FaStar, FaBell, } from "react-icons/fa"

class Icons extends React.Component {
    render() {
        return <div className="header--icon">
            <ul>
                <FaUserCircle />
                <FaAngleUp />
                <FaComment />
                <FaStar />
                <FaBell />
            </ul>
        </div >
    }
}

export default Icons