
const appendData = (data, container) => {

    //console.log(data);
    container.innerHTML = null;
    data.forEach((ele) => {

        let div = document.createElement("div");
        div.id = "mainAs"


        let div1 = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.thumbnail;
        div1.append(image);
        div1.id = "mainImageDiv";
        div1.addEventListener("click", () => {

            addData(ele);
        });

        let divFi = document.createElement("div");
        divFi.id = "mainDivFi";
        divFi.addEventListener("click", () => {

            addData(ele);
        });

        let title = document.createElement("p");
        title.innerText = ele.title;
        title.id = "titleP"
        let pric = document.createElement("p");
        if (ele.price.raw == undefined) {
            pric.innerText = ele.price.to.raw;
        }
        else {
            pric.innerText = ele.price.raw;
        }


        pric.id = "raw";

        let ship = document.createElement("p");

        if (ele.shipping == undefined) {
            ship.innerText = "Free Shipping";
        }
        else {
            ship.innerText = ele.shipping;
        }

        ship.id = "ship";

        let sold = document.createElement("p");
        sold.id = "soldA"

        if (ele.extensions[1] == undefined) {
            sold.innerText = "few ones";
        }
        else {
            sold.innerText = ele.extensions[1];
        }

        let divH = document.createElement("div");
        divH.innerHTML = `<i id="anandH" class="far fa-heart"></i>`;
        divH.id = "heartAs"

        divH.addEventListener("click", () => {

            savedData(ele);

        });

        divFi.append(title, pric, sold, ship);
        div.append(div1, divFi, divH);

        container.append(div);


    })


}

export default appendData;




var click = JSON.parse(localStorage.getItem("Database")) || [];
const addData = (ele) => {



    click.push(ele);
    localStorage.setItem("Database", JSON.stringify(click));
    window.location.href = "review.html";

}




let saved = JSON.parse(localStorage.getItem("savedItems")) || [];

function savedData(ele) {
    let x = document.getElementById("anandH");
    x.style.backgroundColor = "red";
    x.style.color = "white";
    saved.push(ele);
    localStorage.setItem("savedItems", JSON.stringify(saved));
}