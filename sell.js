

    document.querySelector("#rightdata > ul:nth-child(2) > button").addEventListener("click", function () {
        window.scrollBy(0, 700)
    })

    document.querySelector("#rightdata > ul:nth-child(1) > button").addEventListener("click", function () {
        window.scrollBy(0,432)

    })
    document.querySelector("#rightdata > ul:nth-child(3) > button").addEventListener("click", function () {
        window.scroll(0, 1098)
    })
    document.querySelector("#rightdata > ul:nth-child(4) > button").addEventListener("click", function(){
        window.scroll(0, 1500)
    })

// if( window.scrollBy(0, 557))

document.addEventListener("scroll",function()
{
    if(window.scrollY>500)
    {
        document.querySelector(".chamka").style.display="inline";
    }
    else{
        document.querySelector(".chamka").style.display="none";

    }
    

            document.querySelector("#header").style.top=window.scrollY;
})




    let faqinner = document.querySelectorAll(".faq2");

    let faqmain = document.querySelectorAll(".faqclass");
    for (let i = 0; i < faqmain.length; i++) {
        faqmain[i].addEventListener("click", function () {


            faqinner[i].style.display = "flex";

        })
    }




