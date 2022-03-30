const footer=()=>{

    return `<div id="footer">
    <div id="line"></div>

    <div id="footerdiv">

    <div id="footerOne">
        <p><a href="https://www.ebayinc.com/company">About eBay</a></p>
        <p><a href="https://community.ebay.com/t5/Announcements/bg-p/Announcements">Announcements</a></p>
        <p><a href="https://community.ebay.com/">Community</a></p>
        <p><a href="https://pages.ebay.com/securitycenter/index.html">Security Centers</a></p>
        <p><a href="https://pages.ebay.com/seller-center/index.html">Seller Information Center</a></p>
        <p><a href="https://www.ebay.com/help/policies/default/ebays-rules-policies?id=4205">Policies</a></p>
        <p><a href="https://partnernetwork.ebay.com/">Affiliates</a></p>
        <p><a href="https://www.ebay.com/help/home">Help & Contact </a></p>
        <p><a href="https://pages.ebay.com/sitemap.html">Site Map </a></p>
    </div>




    <div id="footerTwo">
        <p>Copyright @ 1995-2022 eBay Inc.All Rights Reserved.</p>
        <p><a href="https://www.ebayinc.com/accessibility/">Accessibility</a></p>
        <p><a href="https://pages.ebay.com/help/policies/user-agreement.html">User Agreement </a></p>
        <p><a href="https://pages.ebay.com/help/policies/privacy-policy.html">Privacy</a></p>
        <p><a href="https://pages.ebay.com/help/account/cookies-web-beacons.html">Cookies</a></p>
        <p><a href="https://www.ebay.com/adchoice/ccpa">Do not sell my personal information </a></p>
        <p>and</p>
        <p><a href="https://www.ebay.com/adchoice">AdChoice</a></p>
       
    </div>
</div>

</div>`


}

export {footer}


function addFun(value) {
    console.log("done");
    // localStorage.setItem("category",JSON.stringify(value))

    // window.location.href=`${value}.html`;
    if (value == '1') {
        localStorage.setItem("category", "fragrances for women");

        window.location.href = "FragrancesforWomen.html";
    }

}
