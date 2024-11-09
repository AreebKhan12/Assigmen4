document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.container .inner-container .CalculateButton button').addEventListener('click', calculateHeronsFormula);

    function calculateHeronsFormula() {
        const a = parseFloat(document.getElementById('sideA').value);
        const b = parseFloat(document.getElementById('sideB').value);
        const c = parseFloat(document.getElementById('sideC').value);

        if (a > 0 && b > 0 && c > 0) {
            const x = (4 * (a * a) * (b * b)) - Math.pow((a * a) + (b * b) - (c * c), 2);
            const ans = (0.25 * Math.sqrt(x));
            document.getElementById('answerHeron').value = ans;
        } else {
            document.getElementById('answerHeron').value = "Invalid input";
        }
    }
}

);