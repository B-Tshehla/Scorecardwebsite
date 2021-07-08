function getInterestRatesScore() {


    var change = getPercentageChange();
    var interestScore = 0;



    if (change > 30) {
        interestScore = 0;
    }
    if (change > 0 && change < 21) {
        interestScore = betweeen4and21();
        inflation();
        document.getElementById("interestScore").value = interestScore;
    }
    if (change > -6 && change < 1) {
        interestScore = 0;
    }
    if (change > -30 && change < -5) {
        interestScore = betweenN6andN20();
        deflation();
        document.getElementById("interestScore").value = interestScore;
    }
    if (change < -29) {
        inflation();
        interestScore = LessThanN20();
        document.getElementById("interestScore").value = interestScore;
    }

}

function getPercentageChange() {
    var currInterest = document.getElementById("interestVal").value;
    var prevInterest = document.getElementById("prevInterestVal").value;
    var change = 0;

    change = ((currInterest - prevInterest) / prevInterest) * 100;

    return change;

}

function inflation() {
    bgColor = "#ec7063";

    document.getElementById("interest-card").style.backgroundColor = bgColor;
    document.getElementById("interest-card").style.color = " #5d6d7e";
    document.getElementById("interestVal").style.backgroundColor = bgColor;
    document.getElementById("prevInterestVal").style.backgroundColor = bgColor;
    document.getElementById("interestScore").style.backgroundColor = bgColor;
    document.getElementById("interest-card").style.color = "#273746"
}

function deflation() {
    bgColor = "#4287f5";

    document.getElementById("interest-card").style.backgroundColor = bgColor;
    document.getElementById("interest-card").style.color = " #5d6d7e";
    document.getElementById("interestVal").style.backgroundColor = bgColor;
    document.getElementById("prevInterestVal").style.backgroundColor = bgColor;
    document.getElementById("interestScore").style.backgroundColor = bgColor;
    document.getElementById("interest-card").style.color = "#273746"
}

//inflation prosssesing

function betweeen4and21() {

    if (getPercentageChange() > 14 && getPercentageChange() < 21) {
        return -10;
    }
    if (getPercentageChange() > 9 && getPercentageChange() < 15) {
        return -9;
    }
    if (getPercentageChange() > 5 && getPercentageChange() < 10) {
        return -6;
    }
    if (getPercentageChange() > 0 && getPercentageChange() < 5) {
        return -3;
    }

}

function betweenN6andN20() {
    if (getPercentageChange() < -4 && getPercentageChange() > -10) {
        return 3;
    }
    if (getPercentageChange() < -9 && getPercentageChange() > -15) {
        return 5;
    }
    if (getPercentageChange() < -14 && getPercentageChange() > -30) {
        return 7;
    }

}

function LessThanN20() {
    if (getPercentageChange() < -29 && getPercentageChange() > -40) {
        return -8;
    }
    if (getPercentageChange() < -39 && getPercentageChange() > -50) {
        return -9;
    }
    if (getPercentageChange() < -49) {
        return -10;
    }
}