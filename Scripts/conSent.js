//Consumer sentiment index/Connsumer confidence

function getConsumerSent() {
    var conVal = document.getElementById("conSent").value;
    var conSocre = 0;
    var bgColor = " ";
    //inflation
    if (conVal > 54 && conVal < 63) {
        bgColor = "#ec7063";
        conScore = between55and66();
        document.getElementById("conSent-card").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = " #5d6d7e";
        document.getElementById("conSent").style.backgroundColor = bgColor;
        document.getElementById("conSntScore").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = "#273746"
        document.getElementById("conSntScore").value = conScore;

    }
    if (conVal > 75 && conVal < 96) {
        bgColor = "#ec7063";
        document.getElementById("conSent-card").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = " #5d6d7e";
        document.getElementById("conSent").style.backgroundColor = bgColor;
        document.getElementById("conSntScore").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = "#273746"
        document.getElementById("conSntScore").value = conScore;
    }
    //deflation

    if (conVal > 62 && conVal < 73) {
        bgColor = "#4287f5";
        document.getElementById("conSent-card").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = " #5d6d7e";
        document.getElementById("conSent").style.backgroundColor = bgColor;
        document.getElementById("conSntScore").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = "#273746"
        document.getElementById("conSntScore").value = score;

    }
    if (conVal > 95 && conVal < 95) {
        bgColor = "#4287f5";
        document.getElementById("conSent-card").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = " #5d6d7e";
        document.getElementById("conSent").style.backgroundColor = bgColor;
        document.getElementById("conSntScore").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = "#273746"
        document.getElementById("conSntScore").value = score;

    }
}

function between55and66() {
    var conVal = document.getElementById("conSent").value;
    var conSocre = 0;

    if (conval == 55 && conval == 65) {
        conScore = 10;
    }

}