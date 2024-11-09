document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.CalculateButton4 button').addEventListener('click', calculatePolynomial);

    function calculatePolynomial() {

        const coeffsInput = document.getElementById('Coefficients').value;
        const exponentsInput = document.getElementById('exponents').value;
        const xValue = parseFloat(document.getElementById('Xvalue').value);

        const coefficients = coeffsInput.split(/[\s,]+/).map(Number);
        const exponents = exponentsInput.split(/[\s,]+/).map(Number);

        if (coefficients.length !== exponents.length) {
            alert('Please make sure the number of coefficients and exponents match.');
            return;
        }

        let polynomialFunction = '';
        let evaluationResult = 0;

        for (let i = 0; i < coefficients.length; i++) {
            const coeff = coefficients[i];
            const exp = exponents[i];

            polynomialFunction += `${coeff}x^${exp}`;
            if (i < coefficients.length - 1) {
                polynomialFunction += ' + ';
            }

            evaluationResult += coeff * Math.pow(xValue, exp);
        }

        document.getElementById('answerPolynomial').value = `${polynomialFunction} = ${evaluationResult}`;
    }
}
);