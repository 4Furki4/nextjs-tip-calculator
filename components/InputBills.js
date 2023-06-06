import React from 'react'
export default function InputBills({ totalBill, setTotalBill }) {

    return (
        <div className="input-group" id="totalBillGroup">
            <div className="input-label-container">
                <label className="body-text input-label" htmlFor="totalBill">Bill</label>
                <small className="body-text input-error" id="totalBillError">Input field is valid</small>
            </div>
            <input
                type="number"
                className="body-l-text input-field"
                placeholder="0"
                name="Total bill value"
                id="totalBill"
                value={totalBill}
                onChange={(e) => setTotalBill(e.target.value)}
            />
        </div>
    )
}
