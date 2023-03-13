// Calculate the score for a given value based on the min and max range, ideal value, sensitivity and function type

function getScore(passed_value, min_range, max_range, ideal_value, sensitivity, shift_x=0, function_type="sigmoid_unipolar") {
    if (!["linear", "sigmoid_unipolar", "sigmoid_bipolar"].includes(function_type)) {
        throw new Error("Invalid function type");
    }

    if (passed_value <= min_range) {
        return 1.0;
    } else if (passed_value >= max_range) {
        return 0.0;
    }

    // Calculate the distance to the ideal value
    let distance = Math.abs(passed_value - ideal_value);

    // Scale the distance by the sensitivity
    distance = distance * sensitivity;

    // Calculate the y value (score) based on the function type
    let y;
    if (function_type === "linear") {
        y = (distance+shift_x) / (max_range - min_range);
    } else if (function_type === "sigmoid_unipolar") {
        y = 1 / (1 + Math.exp(-distance+shift_x));
    } else if (function_type === "sigmoid_bipolar") {
        y = (Math.exp(distance+shift_x) - Math.exp(-distance+shift_x)) / (Math.exp(distance+shift_x) + Math.exp(-distance+shift_x));
    }

    return 1-y;
}

function getGradeColour(score) {
    if (score >= 9) {
        return "#00cb00";
    } else if (score >= 7) {
        return "#7faa00";
    } else if (score >= 5) {
        return "#ab8400";
    } else if (score >= 3) {
        return "#c45600";
    } else {
        return "#cc0000";
    }
}


module.exports = {
    getScore,
    getGradeColour
}