//Non-Manufacturing NMI
function getNMIScore() {
    // Selecting the input element and get its value 
    var nmiVal = document.getElementById("nmiVal").value;
    var prevnmiVal = document.getElementById("prevNmiVal").value;


    var bgColor;
    var score;

    //processing scores
    if (nmiVal > 50) {

        bgColor = "#ec7063";

        if (nmiVal < prevnmiVal) {
            alert(prevnmiVal + "\t" + nmiVal);

            score = aboveSlowing();
        } else {
            score = aboveGrowing();
        }

        document.getElementById("nmi-nmi-card").style.backgroundColor = bgColor;
        document.getElementById("nmi-nmi-card").style.color = " #5d6d7e";
        document.getElementById("nmiVal").style.backgroundColor = bgColor;
        document.getElementById("prevNmiVal").style.backgroundColor = bgColor;
        document.getElementById("nmiScore").style.backgroundColor = bgColor;
        document.getElementById("nmi-nmi-card").style.color = "#273746"
        document.getElementById("nmiScore").value = score;

        //alert(bgColor + "\t" + score);

    } else {

        bgColor = "#4287f5";
        if (nmiVal > prevnmiVal) {
            score = belowGrowing();
        } else {
            score = belowSlowing();
        }
        document.getElementById("nmi-card").style.backgroundColor = bgColor;
        document.getElementById("nmi-card").style.color = " #5d6d7e";
        document.getElementById("nmiVal").style.backgroundColor = bgColor;
        document.getElementById("prevNmiVal").style.backgroundColor = bgColor;
        document.getElementById("nmiScore").style.backgroundColor = bgColor;
        document.getElementById("nmi-card").style.color = "#273746"
        document.getElementById("nmiScore").value = score;

    }


}

function aboveGrowing() {
    var nmiVal = document.getElementById("nmiVal").value;
    var prevnmiVal = document.getElementById("prevNmiVal").value;
    var score;
    var change = nmiVal - prevnmiVal;

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
    var nmiVal = document.getElementById("nmiVal").value;
    var prevnmiVal = document.getElementById("prevNmiVal").value;
    var score;
    var change = nmiVal - prevnmiVal;

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
    var nmiVal = document.getElementById("nmiVal").value;
    var prevnmiVal = document.getElementById("prevNmiVal").value;
    var score;
    var change = nmiVal - prevnmiVal;

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
    var nmiVal = document.getElementById("nmiVal").value;
    var prevnmiVal = document.getElementById("prevNmiVal").value;
    var score;
    var change = nmiVal - prevnmiVal;

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