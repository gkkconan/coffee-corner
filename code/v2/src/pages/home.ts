import chevronWhiteIcon from '/icons/chevron-white.svg';
import chevronIcon from '/icons/chevron.svg';
import cartIcon from '/icons/cart.svg';

export function homePage(): string {
  return `
    <!-- CAROUSEL -->
    <section id="carousel" class="center-grid">

        <div class="carousel center-grid">
            <h3>Discover all our products!</h3>

            <div class="controls">
                <img src="${chevronWhiteIcon}" alt="left chevron" />
                <h1>Where passion <br> and coffee blend</h1>
                <img src="${chevronWhiteIcon}" alt="right chevron" />
            </div>
        </div>

    </section>

    <!-- PRODUCT SECTION -->
    <section id="products" class="center-grid">
        <h2 class="title">Products</h2>

        <div class="cards">
            <!-- <div class="card center-flex">
                <span class="img"></span>
                <span class="text">
                    <h3>Qualità Oro - Caffè d'Altura Grani</h3>
                    <span class="rating-and-price center-flex">
                        <span class="rating"></span>
                        <h2>11.69€</h2>
                    </span>
                </span>
                <button class="center-grid"> <img src="${cartIcon}" alt="cart buy" /> </button>
            </div> -->
        </div>

        <div class="controls">
            <img src="/icons/chevron.svg" onclick="changeProductPage('dec')" alt="left chevron" />
            <img src="/icons/chevron.svg" onclick="changeProductPage('inc')" alt="right chevron" />
        </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section id="testimonials">

        <h2 class="title">Testimonials</h2>

        <div class="testimonial-container">
            <!-- <div class="testimonial">
                <div class="header">
                    <div class="pfp">
                        <img src="assets/images/testimonials/jessica-cooper.jpg" alt="pic" />
                        <img src="assets/images/icons/quote.svg" alt="quote" />
                    </div>
                    <h2>Name Surname</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi porro nostrum sunt nisi commodi ex, ducimus
                    saepe tenetur iusto et, dignissimos eaque dolor a
                    debitis facilis veritatis quibusdam maxime ipsum.
                </p>
                <span class="rating"></span>
            </div> -->
        </div>

        <!-- <div class="controls">
            <img src="${chevronIcon}" alt="left chevron" />
            <img src="${chevronIcon}" alt="right chevron" />
        </div> -->
    </section>
  `;
}