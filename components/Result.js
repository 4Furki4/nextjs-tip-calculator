import React, { useEffect } from 'react'

export default function Result(
    { result: { tipAmountPerPerson, totalAmountPerPerson } }) {
    useEffect(() => {
        console.log(tipAmountPerPerson)
        console.log(totalAmountPerPerson)
    }, [tipAmountPerPerson, totalAmountPerPerson])
    return (
        <>
            <section className="card-price-container">
                <div>
                    <b className="body-text card-price-title">Tip Amount</b>
                    <p className="body-s-text card-price-subtitle">/ person</p>
                </div>
                <strong className="strong-text card-price-value" id="tipAmount">
                    ${tipAmountPerPerson ? tipAmountPerPerson.toFixed(2) : (0).toFixed(2)}
                </strong>
            </section>
            <section className="card-price-container">
                <div>
                    <b className="body-text card-price-title">Total</b>
                    <p className="body-s-text card-price-subtitle">/ person</p>
                </div>
                <strong className="strong-text card-price-value" id="totalPrice">
                    ${totalAmountPerPerson ? totalAmountPerPerson.toFixed(2) : (0).toFixed(2)}
                </strong>
            </section>
        </>
    )
}
