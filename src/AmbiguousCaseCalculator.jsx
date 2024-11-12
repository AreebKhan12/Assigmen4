import React, { useState } from 'react';

const AmbiguousCaseCalculator = () => {
    const [angleA, setAngleA] = useState('');
    const [sideA, setSideA] = useState('');
    const [sideB, setSideB] = useState('');
    const [result, setResult] = useState('');

    const calculateAmbiguousCase = () => {
        const angle = parseFloat(angleA);
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);

        if (isNaN(angle) || isNaN(a) || isNaN(b) || angle <= 0 || a <= 0 || b <= 0) {
            setResult("Invalid input. Please enter positive values.");
            return;
        }

        const angleRadians = (angle * Math.PI) / 180;
        const height = b * Math.sin(angleRadians);

        if (angle < 90) {
            if (a < height) setResult("No triangle");
            else if (a === height) setResult("Right triangle");
            else if (a > b) setResult("One triangle");
            else if (height < a && a < b) setResult("Two triangles (Ambiguous Case)");
        } else if (angle > 90) {
            setResult(a <= b ? "No triangle" : "One triangle");
        } else {
            setResult("Angle must be acute or obtuse.");
        }
    };

    return (
        <div className="inner-container">
            <h1 className="header">Ambiguous Case</h1>
            <div>
                <label>Angle A:</label>
                <input type="number" value={angleA} onChange={(e) => setAngleA(e.target.value)} />
            </div>
            <div>
                <label>Side  A: </label>
                <input type="number" value={sideA} onChange={(e) => setSideA(e.target.value)} />
            </div>
            <div>
                <label>Side  C: </label>
                <input type="number" value={sideB} onChange={(e) => setSideB(e.target.value)} />
            </div>
            <button className="CalculateButton2" onClick={calculateAmbiguousCase}>Calculate</button>
            <div className="answerField">
                <label>Result:</label>
                <input type="text" value={result} readOnly />
            </div>
        </div>
    );
};

export default AmbiguousCaseCalculator;
