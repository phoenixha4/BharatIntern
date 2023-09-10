document.getElementById('convert').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const toUnit = document.getElementById('toUnit').value;

    if (!isNaN(temperatureInput)) {
        let result;

        if (toUnit === 'fahrenheit') {
            result = (temperatureInput * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = temperatureInput + 273.15;
        } else {
            result = temperatureInput; // If the units are the same (Celsius)
        }

        document.getElementById('result').value = result.toFixed(2) + ' ' + toUnit;
        document.querySelector('.result-container').style.display = 'block'; // Show the result container
    }
});
