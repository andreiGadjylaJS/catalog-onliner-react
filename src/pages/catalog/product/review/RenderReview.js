import React from 'react'
import './RenderReview.css'

const RenderReview = ({ count }) => {
    const inclinesWord = (num) => {
        const words = ['отзыв', 'отзыва', 'отзывов']
        let count = num % 100

        if (count >= 5 && count <= 20) {
            return words[2]
        } else {
            count = num % 10
            if (count === 1) {
                return words[0]
            } else if (count >= 2 && count <= 4) {
                return words[1]
            } else {
                return words[2]
            }
        }
    }

    if (!count) return null
    let word = inclinesWord(count)
    return <div className='review'>{count} {word}</div>
}

export default RenderReview
// TODO: rename