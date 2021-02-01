import React from 'react'
import './Offers.css'


const OffersButton = ({ numberOffers }) => {
    const getWordDeclineOffers = numberOffers => {
        let word = inclinesWord(numberOffers)
        return numberOffers + ' ' + word
    }

    const inclinesWord = num => {
        const words = ['предложение', 'предложения', 'предложений']
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

    return getWordDeclineOffers(numberOffers)
}

export default OffersButton