document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.container .inner-container .CalculateButton2 button').addEventListener('click', calculateAmbiguousCase);

    function calculateAmbiguousCase() {

        const Angle = parseFloat(document.getElementById('AngleA2').value);
        const a = parseFloat(document.getElementById('sideA2').value);
        const b = parseFloat(document.getElementById('sideC2').value);

        if (isNaN(Angle) || isNaN(a) || isNaN(b) || Angle <= 0 || a <= 0 || b <= 0) {
            document.getElementById('answerAmbiCase').value = "Invalid input. Please enter positive values.";
            return;
        }

        const AngleRadians = (Angle * Math.PI) / 180;
        const height = b * Math.sin(AngleRadians);

        let result;

        if (Angle < 90) { 
            if (a < height) {
                result = "No triangle";
            } else if (a === height) {
                result = "Right triangle";
            } else if (a > b) {
                result = "One triangle";
            } else if (height < a && a < b) {
                result = "Two triangles (Ambiguous Case)";
            }
        } else if (Angle > 90) { 
            if (a <= b) {
                result = "No triangle";
            } else if (a > b) {
                result = "One triangle";
            }
        } else {
            result = "Angle Must Be Acute Or Obtuse. Please Try Again";
        }

        document.getElementById('answerAmbiCase').value = result;
    }

}
);