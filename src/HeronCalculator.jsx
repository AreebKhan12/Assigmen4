import React, { useState } from 'react';

const HeronsFormulaCalculator = () => {
    const [sideA, setSideA] = useState('');
    const [sideB, setSideB] = useState('');
    const [sideC, setSideC] = useState('');
    const [area, setArea] = useState('');

    const calculateHeronsFormula = () => {
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const c = parseFloat(sideC);

        if (a > 0 && b > 0 && c > 0) {
            const x = (4 * a * a * b * b) - Math.pow((a * a) + (b * b) - (c * c), 2);
            const ans = 0.25 * Math.sqrt(x);
            setArea(ans.toFixed(2));
        } else {
            setArea("Invalid input");
        }
    };

    return (
        <div className="inner-container">
            <h1 className="header">Heron's Formula</h1>
            <div>
                <label>Side A:</label>
                <input type="number" value={sideA} onChange={(e) => setSideA(e.target.value)} />
            </div>
            <div>
                <label>Side B:</label>
                <input type="number" value={sideB} onChange={(e) => setSideB(e.target.value)} />
            </div>
            <div>
                <label>Side C:</label>
                <input type="number" value={sideC} onChange={(e) => setSideC(e.target.value)} />
            </div>
            <button className="CalculateButton" onClick={calculateHeronsFormula}>Calculate</button>
            <div className="answerField">
                <label>Area:</label>
                <input type="text" value={area} readOnly />
            </div>
        </div>
    );
};

export default HeronsFormulaCalculator;
