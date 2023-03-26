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

// Get the colour for a given score
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

// Get the overall score for a given set of parameter scores
function getOverallScore(paramScores) {
    let weightedSum = 0;
    let weightSum = 0;

    for (let i = 0; i < paramScores.length; i++) {
        let weight = 1 - paramScores[i];
        weightedSum += paramScores[i] * weight;
        weightSum += weight;
    }

    if (weightedSum == 0 && weightSum == 0) return 1;
    return weightedSum / weightSum;
}

module.exports = {
    getScore,
    getGradeColour,
    getOverallScore
}