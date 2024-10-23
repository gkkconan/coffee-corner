navbar = document.querySelector('nav ul')
carouselElement = document.querySelector(".carousel")
carouselText = document.querySelector(".carousel h1")
leftControl = document.querySelector(".controls > img:nth-child(1)")
rightControl = document.querySelector(".controls > img:nth-child(3)")
productPage = 1, counter = 0
menu = false
let carousel = "assets/json/carousel.json";
let products = "assets/json/products.json";
let testimonials = "assets/json/testimonials.json";





function retrieveData(file){
    return fetch(file)
        .then(response => response.json())
        .catch(error => { return null });
}

function changeCarouselBG(control, count){
    retrieveData(carousel).then(carouselSlides => {
        if(count != undefined){ counter = count }
        else{ control == 'leftControl' ? counter-- : counter++ }

        carouselElement.style.backgroundImage = `url('${carouselSlides[counter].src}')`;
        carouselText.innerHTML = carouselSlides[counter].text;
    })
}

function createProducts(productsList, page){
    retrieveData(productsList).then(products => {
        min = (page - 1) * 4
        max = min + 4
        document.querySelector(".cards").remove()
        
        for(let i = min; i < max; i++){
            if(products[i]){
                const controls = document.querySelector("#products .controls")
                const cards = document.createElement("div");
                cards.className = "cards";
                
                const card = document.createElement("div");
                card.className = "card center-flex";
                
                const img = document.createElement("span");
                img.style.background = `url('${products[i].img}') center/cover no-repeat`;
                img.className = "img"
                card.appendChild(img);
                
                const textSpan = document.createElement("span");
                textSpan.className = "text";
                card.appendChild(textSpan);
                
                const h3 = document.createElement("h3");
                h3.textContent = products[i].name;
                textSpan.appendChild(h3);
                
                const ratingAndPriceSpan = document.createElement("span");
                ratingAndPriceSpan.className = "rating-and-price center-flex";
                textSpan.appendChild(ratingAndPriceSpan);
                
                const ratingDiv = document.createElement("div");
                ratingDiv.className = "rating";
                ratingAndPriceSpan.appendChild(ratingDiv);
                
                const h2 = document.createElement("h2");
                h2.textContent = products[i].price
                ratingAndPriceSpan.appendChild(h2);
                
                const button = document.createElement("button");
                button.className = "center-grid";
                card.appendChild(button);
                
                const cartImg = document.createElement("img");
                cartImg.src = "assets/images/icons/cart.svg";
                button.appendChild(cartImg);
                
                document.querySelector("#products").insertBefore(cards, controls);
                document.querySelector("#products .cards").appendChild(card);
            }
        }
    })
}

function changeProductPage(action){
    retrieveData(products).then(allProducts => {
        if(productPage == 1 && action == 'inc'){ productPage++ }
        else if(productPage != 1 && action != 'inc'){ productPage-- }
        else if(productPage != 1 && (allProducts.length - (4 * productPage)) > 0 && action == 'inc'){ productPage++ }
        createProducts(products, productPage)
    })
}

function createTestimonials(testimonialList){
    retrieveData(testimonialList).then(testimonials => {
        for(let i = 0; i < 3; i++){
            const testimonial = document.createElement("div");
            testimonial.className = "testimonial";

            const header = document.createElement("div");
            header.className = "header";

            const pfp = document.createElement("div");
            pfp.className = "pfp";

            const pic = document.createElement("img");
            pic.src = testimonials[i].pic;

            const quote = document.createElement("img");
            quote.src = "assets/images/icons/quote.svg";

            pfp.appendChild(pic);
            pfp.appendChild(quote);

            const h2 = document.createElement("h2");
            h2.textContent = `${testimonials[i].name} ${testimonials[i].surname}`;

            header.appendChild(pfp);
            header.appendChild(h2);

            const p = document.createElement("p");
            p.textContent = testimonials[i].message;

            const rating = document.createElement("span");
            rating.className = "rating";

            testimonial.appendChild(header);
            testimonial.appendChild(p);
            testimonial.appendChild(rating);

            document.querySelector(".testimonial-container").appendChild(testimonial);
        }
    })
}

function toggleMenu(){
    if(menu){navbar.style.display = "none"; menu = false}
    else{navbar.style.display = "flex"; menu = true}
}



leftControl.addEventListener("click", () => {
    retrieveData(carousel).then(carouselSlides => {
        counter <= 0 ? changeCarouselBG('leftControl', carouselSlides.length - 1) : changeCarouselBG('leftControl')
    })
});
rightControl.addEventListener("click", () => {
    retrieveData(carousel).then(carouselSlides => {
        counter < carouselSlides.length - 1 ? changeCarouselBG('rightControl') : changeCarouselBG('rightControl', 0)
    })
});

window.addEventListener('resize', () => {
    if( window.innerWidth > 768){ navbar.style.display = 'flex'; menu = true }
    else{ navbar.style.display = 'none'; menu = false }
})



createProducts(products, productPage)
createTestimonials(testimonials)