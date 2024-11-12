import React, { useState } from 'react';

const PolynomialCalculator = () => {
    const [coefficients, setCoefficients] = useState('');
    const [exponents, setExponents] = useState('');
    const [xValue, setXValue] = useState('');
    const [polynomialExpression, setPolynomialExpression] = useState('');
    const [result, setResult] = useState('');

    const calculatePolynomial = () => {
        // Convert coefficients and exponents into arrays of numbers
        const coeffArray = coefficients.split(/[\s,]+/).map(Number);
        const expArray = exponents.split(/[\s,]+/).map(Number);
        const x = parseFloat(xValue);

        // Ensure that coefficients and exponents match in length
        if (coeffArray.length !== expArray.length) {
            alert('Please make sure the number of coefficients and exponents match.');
            return;
        }

        // Construct the polynomial expression and compute the result
        let expression = '';
        let evaluationResult = 0;

        for (let i = 0; i < coeffArray.length; i++) {
            const coeff = coeffArray[i];
            const exp = expArray[i];

            // Build the term for display in the polynomial expression
            expression += `${coeff}x^${exp}`;
            if (i < coeffArray.length - 1) {
                expression += ' + ';
            }

            // Calculate the current term and add it to the evaluation result
            evaluationResult += coeff * Math.pow(x, exp);
        }

        // Update the expression and result in state
        setPolynomialExpression(expression);
        setResult(evaluationResult);
    };

    return (
        <div className="inner-container">
            <h1 className="header">Polynomial Function</h1>
            <div>
                <label>Coefficients:</label>
                <input
                    type="text"
                    value={coefficients}
                    onChange={(e) => setCoefficients(e.target.value)}
                    placeholder="e.g., 3, -2, 5"
                />
            </div>
            <div>
                <label>Exponents:</label>
                <input
                    type="text"
                    value={exponents}
                    onChange={(e) => setExponents(e.target.value)}
                    placeholder="e.g., 2, 1, 0"
                />
            </div>
            <div>
                <label>X Value:</label>
                <input
                    type="number"
                    value={xValue}
                    onChange={(e) => setXValue(e.target.value)}
                    placeholder="e.g., 1.5"
                />
            </div>
            <button className="CalculateButton4" onClick={calculatePolynomial}>Calculate</button>

            <div className="answerField">
                <label>Polynomial Expression:</label>
                <input type="text" value={polynomialExpression} readOnly />
            </div>
            <div className="answerField">
                <label>Function Result:</label>
                <input type="text" value={result} readOnly />
            </div>
        </div>
    );
};

export default PolynomialCalculator;
