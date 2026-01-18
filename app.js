document.querySelector("#footer").addEventListener("click",() => {
    window.scrollTo(0,0);
})

document.querySelector("#b1").addEventListener("click",() => {
    window.location.href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
})

document.querySelector("#pp").addEventListener("click",() => {
    window.location.href="https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
})

let a = document.querySelectorAll(".boxxx");

a.forEach((b) =>{
    b.addEventListener("click",() => {
        window.location.href="https://www.amazon.com/events/wintersale?discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522493964%252F541966%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_wg=5kaeB&ref_=nav_cs_gb&pd_rd_w=L4LR3&content-id=amzn1.sym.d5b550a4-aad3-4202-91c0-fa4013f74c17&ie=UTF8&pd_rd_r=a98ad07b-6f2d-4160-8642-a43e52a8f856";
    })
})

let x = document.querySelectorAll("#option");

x.forEach((z) => {
    z.addEventListener("click",() => {
        let y = z.value;
        document.querySelector("#implang").innerText= y;
    });
})

document.querySelector("#cart").addEventListener("click", () => {
    window.location.href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart";
})

document.querySelector("#message2").addEventListener("click", () => {
    window.location.href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-orders%2Forders%3F_encoding%3DUTF8%26ref_%3Dnav_orders_first&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_retail_yourorders_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
})

document.querySelector("#navlogo").addEventListener("click",() => {
    window.location.href="https://www.amazon.com/ref=nav_logo";
})

document.querySelector("#message").addEventListener("click", () => {
    window.location.href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
})

document.querySelector("#navaddress").addEventListener("click" , () => {
    window.location.href="https://www.amazon.in/customer-preferences/country?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_icp_cp";
})