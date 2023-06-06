import React, { useEffect } from 'react';
import InputBills from './InputBills';
import TipPercentage from './TipPercentage';
import InputPeople from './InputPeople';
import Result from './Result';
import ResetButton from './ResetButton';
import { useState } from 'react';

const Calculator = () => {
    // TODO: start coding here!
    const [totalBill, setTotalBill] = useState(0)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(0)
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0)
    const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0)
    const [result, setResult] = useState({
        tipAmountPerPerson: 0,
        totalAmountPerPerson: 0
    })
    function calculateTip() {
        if (totalBill > 0 && tipPercentage > 0 && numberOfPeople > 0) {
            let tipAmountPerPerson = totalBill * tipPercentage / 100 / numberOfPeople
            let totalAmountPerPerson = totalBill / numberOfPeople + tipAmountPerPerson
            setResult(
                {
                    tipAmountPerPerson: tipAmountPerPerson,
                    totalAmountPerPerson: totalAmountPerPerson
                }
            )
            console.log(result);
        }

    }
    useEffect(() => {
        calculateTip()
    }, [totalBill, tipPercentage, numberOfPeople])

    return (
        <main>
            <img
                src="./icons/logo.svg"
                className="logo"
                alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
            />
            <section className="card">
                <div className="card-left">
                    <InputBills totalBill={totalBill} setTotalBill={setTotalBill} />
                    <TipPercentage tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
                    <InputPeople numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} />
                </div>
                <div className="card-right">
                    <Result result={result} />
                    <ResetButton />
                </div>
            </section>
        </main>
    );
};

export default Calculator;