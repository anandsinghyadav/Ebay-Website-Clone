
let flag = true;
const openSomething = (value) => {
    if (value == 'anti' && flag == true) {
        document.getElementById("anti").style.display = "block";
        flag = false;
    }
    else {
        document.getElementById("anti").style.display = "none";
        flag = true;
    }
    if (value == 'art') {
        document.getElementById("art").style.display = "block";

    }
    else {
        document.getElementById("art").style.display = "none";

    }
    if (value == 'collectibles') {
        document.getElementById("collectibles").style.display = "block";
    }
    else {
        document.getElementById("collectibles").style.display = "none";

    }
    if (value == 'artAndCraft') {
        document.getElementById("artAndCraft").style.display = "block";

    }
    else {
        document.getElementById("artAndCraft").style.display = "none";

    }
    if (value == 'coins') {
        document.getElementById("coins").style.display = "block";

    }
    else {
        document.getElementById("coins").style.display = "none";

    }
    if (value == 'dollsAndTeddy') {
        document.getElementById("dollsAndTeddy").style.display = "block";

    }
    else {
        document.getElementById("dollsAndTeddy").style.display = "none";

    }
    if (value == 'entertainment') {
        document.getElementById("entertainment").style.display = "block";

    }
    else {
        document.getElementById("entertainment").style.display = "none";

    }
    if (value == 'pottery') {
        document.getElementById("pottery").style.display = "block";

    }
    else {
        document.getElementById("pottery").style.display = "none";

    }
    if (value == 'stamps') {
        document.getElementById("stamps").style.display = "block";

    }
    else {
        document.getElementById("stamps").style.display = "none";

    }
    if (value == 'vintage') {
        document.getElementById("vintage").style.display = "block";

    }
    else {
        document.getElementById("vintage").style.display = "none";

    }

}



const goFun = (value) => {

    if (value == '1') {
        localStorage.setItem("search_term", "stamps");
        window.location.href = "stamps.html";
    }
    else if (value == '2') {
        localStorage.setItem("search_term", "comics");
        window.location.href = "comics.html";
    }
    else if (value == '3') {
        localStorage.setItem("search_term", "coins and paper money");
        window.location.href = "coinsAndPaperMoney.html";
    }
    else if (value == '4') {
        localStorage.setItem("search_term", "records");
        window.location.href = "recordandPlayer.html";
    }
    else if (value == '5') {
        localStorage.setItem("search_term", "antique");
        window.location.href = "antiques.html";
    }
    else if (value == '6') {
        localStorage.setItem("search_term", "vintage");
        window.location.href = "vintage.html";
    }
    else if (value == '7') {
        localStorage.setItem("search_term", "postcard");
        window.location.href = "collectibles.html";
    }
    else if (value == '8') {
        localStorage.setItem("search_term", "action");
        window.location.href = "actionAndFigure.html";
    }
    else if (value == '9') {
        localStorage.setItem("search_term", "entertainment");
        window.location.href = "entertainment.html";
    }




}
