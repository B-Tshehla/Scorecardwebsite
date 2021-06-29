//Suvery Manufaturing and non-manufauring 
//Manufacturing PMI
function getPMIScore() {
    // Selecting the input element and get its value 
    var pmiVal = document.getElementById("pmiVal").value;
    var prevPmiVal = document.getElementById("prevPmiVal").value;
    var bgColor;
    var score;

    //processing scores
    if (pmiVal > 50) {
        bgColor = "#ec7063";

        if (pmiVal < prevPmiVal) {
            score = aboveSlowing();
        } else {
            score = aboveGrowing();
        }

        document.getElementById("pmi-card").style.backgroundColor = bgColor;
        document.getElementById("pmi-card").style.color = " #5d6d7e";
        document.getElementById("pmiVal").style.backgroundColor = bgColor;
        document.getElementById("prevPmiVal").style.backgroundColor = bgColor;
        document.getElementById("pmiScore").style.backgroundColor = bgColor;
        document.getElementById("pmi-card").style.color = "#273746"
        document.getElementById("pmiScore").value = score;

        //alert(bgColor + "\t" + score);

    } else {
        bgColor = "#4287f5";
        if (pmiVal > prevPmiVal) {
            score = belowGrowing();
        } else {
            score = belowSlowing();
        }
        document.getElementById("pmi-card").style.backgroundColor = bgColor;
        document.getElementById("pmi-card").style.color = " #5d6d7e";
        document.getElementById("pmiVal").style.backgroundColor = bgColor;
        document.getElementById("prevPmiVal").style.backgroundColor = bgColor;
        document.getElementById("pmiScore").style.backgroundColor = bgColor;
        document.getElementById("pmi-card").style.color = "#273746"
        document.getElementById("pmiScore").value = score;

    }

}

function aboveGrowing() {
    var pmiVal = document.getElementById("pmiVal").value;
    var prevPmiVal = document.getElementById("prevPmiVal").value;
    var score;
    var change = pmiVal - prevPmiVal;

    if (Math.round(change) == 1) {

        score = 5;
        return score;
    }
    if (Math.round(change) == 2) {

        score = 6;
        return score;
    }
    if (Math.round(change) == 3) {
        score = 7;
        return score;
    }
    if (Math.round(change) > 3) {
        score = 8;
        return score;
    }

}

function belowSlowing() {
    var pmiVal = document.getElementById("pmiVal").value;
    var prevPmiVal = document.getElementById("prevPmiVal").value;
    var score;
    var change = pmiVal - prevPmiVal;

    if (Math.round(change) == -1) {

        score = -5;
        return score;

    }
    if (Math.round(change) == -2) {

        score = -6;
        return score;
    }
    if (Math.round(change) == -3) {
        score = -7;
        return score;
    }
    if (Math.round(change) < -3) {
        score = -8;
        return score;
    }

}

function aboveSlowing() {
    var pmiVal = document.getElementById("pmiVal").value;
    var prevPmiVal = document.getElementById("prevPmiVal").value;
    var score;
    var change = pmiVal - prevPmiVal;

    if (Math.round(change) == -1) {

        score = 0;
        return score;

    }
    if (Math.round(change) == -2) {

        score = 1;
        return score;
    }
    if (Math.round(change) == -3) {
        score = 2;
        return score;
    }
    if (Math.round(change) == -4) {
        score = 3;
        return score;
    }
    if (Math.round(change) == -5) {
        score = 4;
        return score;
    }

    if (Math.round(change) < -5) {
        score = 5;
        return score;
    }
}

function belowGrowing() {
    var pmiVal = document.getElementById("pmiVal").value;
    var prevPmiVal = document.getElementById("prevPmiVal").value;
    var score;
    var change = pmiVal - prevPmiVal;

    if (Math.round(change) == 1) {

        score = 0;
        return score;

    }
    if (Math.round(change) == 2) {

        score = -1;
        return score;
    }
    if (Math.round(change) == 3) {
        score = -2;
        return score;
    }
    if (Math.round(change) == 4) {
        score = -3;
        return score;
    }
    if (Math.round(change) == 5) {
        score = -4;
        return score;
    }

    if (Math.round(change) < 5) {
        score = -5;
        return score;
    }
}