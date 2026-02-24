function calculateBMI() {
    // 1. Get user inputs
    const mass = document.getElementById('mass').value;
    const height = document.getElementById('height').value;
    const output = document.getElementById('output');

    if (mass > 0 && height > 0) {
        // 2. Perform calculations
        const bmi = (mass / (height * height)).toFixed(1);
        let category = "";

        // 3. Use if/else to classify results
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        // 4. Display results in #output
        output.innerHTML = `Your BMI is ${bmi} (${category})`;
    } else {
        output.innerHTML = "Please enter valid numbers!";
    }
}
