document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.container1 .inner-container .CalculateButton3 button').addEventListener('click', calculateNewtonRoot);

    function calculateNewtonRoot() {
        const initialGuess = parseFloat(document.getElementById('Guess').value);

        if (isNaN(initialGuess)) {
            document.getElementById('answerNewtons').value = "Invalid input";
            return;
        }

        function f(x) {
            return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
        }

        function fPrime(x) {
            return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
        }

        let x0 = initialGuess;
        let x1 = x0 - f(x0) / fPrime(x0);

        while (Math.abs(x1 - x0) > 0.0001) {
            x0 = x1;
            x1 = x0 - f(x0) / fPrime(x0);
        }
        document.getElementById('answerNewtons').value = x1;
    }
}
);
