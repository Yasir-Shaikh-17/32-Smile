//-----------------HAMBURGER FUNCTIONALITY-----------

let hamburger = document.querySelector(".hamburger")
let ham_menu = document.querySelector(".ham-menu")
let cross = document.getElementById("cross")

hamburger.addEventListener("click", () => {
    ham_menu.style.transform = "translateX(0)";
})

cross.addEventListener("click", () => {
    ham_menu.style.transform = "translateX(-110%)";
})


//--------------LOADING RESEARCH DYNAMICALLY----------

let boxes = document.querySelectorAll(".research-1")
let r_btn = document.querySelectorAll(".btn-ref")
let hidden = document.querySelector(".hidden-research")


//--------------ADDING EVENT-LISTNER TO RESEARCH BUTTONS-----------------

async function loadData(file) {
        let response = await fetch(file);
        let data = await response.json();
        return data;
}

// Add event listeners to buttons
r_btn.forEach(rbtn => {
    rbtn.addEventListener("click", async () => {
        let file = rbtn.getAttribute("data-file");

        let researchData = await loadData(file);

        if (researchData) {
            hidden.innerHTML = `
                    <div class="hidden-img-heading">
                        <div class="hidden-img">
                            <img src="${researchData.image}" alt="">
                        </div>
                        <div class="hidden-heading">
                            <div class="hidden-cross">
                                <img height="30px" width="30px" src="assets/svgs/cross.svg" alt="">
                            </div>
                            <h1>${researchData.heading}</h1>
                        </div>
                    </div>
                    <div class="hidden-para">
                        <p>${researchData.para}</p>
                    </div>
                `;
            hidden.classList.add("hidden-research-active")
        }


        let h_cross = document.querySelector(".hidden-cross")

        document.addEventListener("click", (e) => {
            if (researchData) {
                if (!hidden.contains(e.target) && !e.target.classList.contains("box")) {
                    hidden.classList.remove("hidden-research-active")
                }
            }
        })

        h_cross.addEventListener("click", () => {
            hidden.classList.remove("hidden-research-active")
        })

    });
});

// ADIING ANIMATION CLASS DYNAMICALLY

window.addEventListener("scroll", () => {


    let screenPosition = window.innerHeight / 1.2;   // SCREEN POSITION 



    // ANIMATION ON WLCOME    
    let about = document.querySelector(".welcome");
    let aboutPosition = about.getBoundingClientRect().top;

    if (aboutPosition < screenPosition) {
        about.classList.add("active-left")
    } else {
        about.classList.remove("active-left")
    }



    // ANIMATION ON PIC AND INTRO    
    let pic = document.querySelector(".pic")
    let picPosition = pic.getBoundingClientRect().top;
    let intro = document.querySelector(".intro")

    if (picPosition < screenPosition) {
        pic.classList.add("active-pic")
        intro.classList.add("active-intro")
    } else {
        pic.classList.remove("active-pic")
        intro.classList.remove("active-intro")
    }



    // ANIMATION ON QUOTE
    let quote = document.querySelector(".quote")
    let quotePosition = quote.getBoundingClientRect().top;

    if (quotePosition < screenPosition) {
        quote.classList.add("quote-active")
    } else {
        quote.classList.remove("quote-active")
    }



    // ANIMATION ON TOP RESEARCH
    let r_head = document.querySelector(".r-head")
    let r_headPosition = quote.getBoundingClientRect().top;

    if (r_headPosition < screenPosition) {
        r_head.classList.add("r-head-active")
    } else {
        r_head.classList.remove("r-head-active")
    }



    //ANIMATION ON SERVICES HEAD
    let service_head = document.querySelector(".services-head")
    let service_headPosition = service_head.getBoundingClientRect().top;

    if (service_headPosition < screenPosition) {
        service_head.classList.add("services-head-active")
    } else {
        service_head.classList.remove("services-head-active")
    }



    //ANIMATION ON SERVICES CONTAINER
    let s_c_container = document.querySelector(".s-card-container")
    let s_c_containerPosition = s_c_container.getBoundingClientRect().top;

    if (s_c_containerPosition < screenPosition) {
        s_c_container.classList.add("s-card-container-active")
    } else {
        s_c_container.classList.remove("s-card-container-active")
    }

    //ANIMATION ON CONTACT-TEXT
    let contact_text = document.querySelector(".contact-text")
    let contact_textPosition = contact_text.getBoundingClientRect().top;

    if (contact_textPosition < screenPosition) {
        contact_text.classList.add("contact-text-active")
    } else {
        contact_text.classList.remove("contact-text-active")
    }

})


//GEOLOCATION API

let map = document.querySelector(".map")
let last_li = document.querySelector(".last-li")
let defaultLocation = { lat: 24.981949764492548, lng: 67.06525615332131 };
const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${defaultLocation.lat},${defaultLocation.lng}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;


last_li.addEventListener("click", () => {

    map.innerHTML = `
    <div class="map-cross"><img src="/assets/svgs/cross.svg" alt=""></div>
    <iframe id="mapFrame" style="border:0;"></iframe>
    `
    map.classList.add("map-active")

    let mapFrame = document.getElementById("mapFrame")
    mapFrame.src = mapUrl;
    map.classList.add("map-active")

    let map_cross = document.querySelector(".map-cross")
    map_cross.addEventListener("click", () => {
        map.classList.remove("map-active")
    })

    document.addEventListener("click", (e) => {

        if (!mapFrame.contains(e.target) && !e.target.classList.contains("last-li")) {
            map.classList.remove("map-active")
        }

    })

})

//LOADING HOME PAGE ON CLICKING LOGO AND NAME 

let name = document.querySelector(".nav-left").firstElementChild
name.addEventListener("click", () => {
    window.location.href = "index.html"
})

// LOADING CONTACT PAGE BY CLICKING BOOK NOW BUTTON
let book_Now = document.querySelector(".contact-btn").firstElementChild

book_Now.addEventListener("click", () => {
    window.location.href = "/html/contact.html"
})

//LOADING SITE MAP IN MOBILE IN HAM-MENU


let ham_site = document.querySelector(".ham-menu").childNodes[3].childNodes[13]
ham_site.addEventListener("click", () => {

    map.innerHTML = `
    <div class="map-cross-ham"><img src="/assets/svgs/cross.svg" alt=""></div>
    <iframe id="mapFrame-ham" style="border:0;"></iframe>
    `
    map.classList.add("map-active")

    let mapFrame = document.getElementById("mapFrame-ham")
    mapFrame.src = mapUrl;
    map.classList.add("map-active")

    document.addEventListener("click", (e) => {

        if (!mapFrame.contains(e.target) && !e.target.classList.contains("last-li")) {
            map.classList.remove("map-active")
        }

        let map_cross = document.querySelector(".map").children[0]
        console.log(map_cross)
        map_cross.addEventListener("click", () => {
            map.classList.remove("map-active")
        })

    })

})