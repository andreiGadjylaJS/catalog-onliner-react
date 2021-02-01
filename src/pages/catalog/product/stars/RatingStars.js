import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import './RatingStars.css'

const RatingStars = ({ rating }) => {
    let stars = []
    const star = <FaStar className="stars__in" />
    const starHalf = <FaStarHalfAlt className="fas_in" />
    const firstReview = <p>Оставьте первый отзыв!</p>

    for (let i = 10; i < rating; i += 10) {
        stars.push(star)
    }

    if (!rating) {
        return firstReview
    } else if (rating % 10) {
        return getFiveStars(stars)
    } else {
        stars.push(starHalf)
        return getFiveStars(stars)
    }
}

const getFiveStars = arr => {
    return [...arr, new Array(5 - arr.length).fill(<FaStar className="fas" />)]
}

export default RatingStars
