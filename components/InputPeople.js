import React from 'react'
export default function InputPeople({ numberOfPeople, setNumberOfPeople }) {

    return (
        <div className="input-group" id="numberOfPeopleGroup">
            <div className="input-label-container">
                <label className="body-text input-label" htmlFor="numberOfPeople">Number of People</label>
                <small className="body-text input-error" id="numberOfPeopleError">Input field is
                    valid</small>
            </div>
            <input
                type="number"
                className="body-l-text input-field"
                placeholder="0"
                name="Number of people"
                id="numberOfPeople"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
            />
        </div>
    )
}
