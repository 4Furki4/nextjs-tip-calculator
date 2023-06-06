import React from 'react'
export default function TipPercentage({ tipPercentage, setTipPercentage }) {

    function handleTipPercentage(event) {
        const percentageVal = parseInt(event.currentTarget.innerText)
        setTipPercentage(percentageVal)
    }
    return (
        <div className="input-group" id="totalTipPercentageGroup">
            <div className="input-label-container">
                <label className="body-text input-label">Select Tip %</label>
                <small className="body-text input-error" id="totalTipPercentageError">Input field is
                    valid</small>
            </div>
            <div className="input-tips-container">
                <button onClick={(e) => handleTipPercentage(e)} className="body-l-text input-tip" id="tip5">5%
                </button>
                <button onClick={(e) => handleTipPercentage(e)} className="body-l-text input-tip" id="tip10">10%
                </button>
                <button onClick={(e) => handleTipPercentage(e)} className="body-l-text input-tip" id="tip15">15%
                </button>
                <button onClick={(e) => handleTipPercentage(e)} className="body-l-text input-tip" id="tip25">25%
                </button>
                <button onClick={(e) => handleTipPercentage(e)} className="body-l-text input-tip" id="tip50">50%
                </button>
                <input type="number"
                    className="body-l-text input-field"
                    placeholder="Custom"
                    onChange={(e) => setTipPercentage(e.target.value)}
                    value={tipPercentage}
                    id="totalTipPercentage"
                />
            </div>
        </div>
    )
}
