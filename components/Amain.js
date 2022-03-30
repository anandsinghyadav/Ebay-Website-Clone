
async function comicFunction(url) {

    try {

        let res = await fetch(`${url}`);

        let data = await res.json();

        console.log(data[0].organic_results);
        return data[0].organic_results;

    }
    catch (err) {
        console.log(err);
    }

}

const appendData = (data, container) => {

    //console.log(data);
    container.innerHTML = null;
    data.forEach((ele) => {

        let div = document.createElement("div");
        div.addEventListener("click", () => {

            addData(ele);
        });

        let div1 = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.thumbnail;
        div1.append(image);
        div1.id = "mainImageDiv";

        let title = document.createElement("p");
        title.innerText = ele.title;
        title.id = "titleP"

        let pric = document.createElement("p");
        pric.innerText = ele.price.raw;
        pric.id = "raw";

        let ship = document.createElement("p");
        ship.innerText = ele.shipping;
        ship.id = "ship";

        div.append(div1, title, pric, ship);

        container.append(div);


    })


}

export { comicFunction, appendData };




var click = []
const addData = (ele) => {



    click.push(ele);
    localStorage.setItem("Database", JSON.stringify(click));
    window.location.href = "review.html";

}