import React, { useState } from 'react';

const NewtonsRootCalculator = () => {
    const [initialGuess, setInitialGuess] = useState('');
    const [root, setRoot] = useState('');

    const calculateNewtonRoot = () => {
        const guess = parseFloat(initialGuess);

        if (isNaN(guess)) {
            setRoot("Invalid input");
            return;
        }

        const f = (x) => 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
        const fPrime = (x) => 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;

        let x0 = guess;
        let x1 = x0 - f(x0) / fPrime(x0);

        while (Math.abs(x1 - x0) > 0.0001) {
            x0 = x1;
            x1 = x0 - f(x0) / fPrime(x0);
        }
        setRoot(x1.toFixed(4));
    };

    return (
        <div className="inner-container">
            <h1 className="header">Newton's Root</h1>
            <div>
                <label>Initial Guess:</label>
                <input type="number" value={initialGuess} onChange={(e) => setInitialGuess(e.target.value)} />
            </div>
            <button className="CalculateButton3" onClick={calculateNewtonRoot}>Calculate</button>
            <div className="answerField">
                <label>Root:</label>
                <input type="text" value={root} readOnly />
            </div>
        </div>
    );
};

export default NewtonsRootCalculator;
