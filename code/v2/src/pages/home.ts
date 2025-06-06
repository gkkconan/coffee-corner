import chevronIcon from '/icons/chevron.svg';
import cartIcon from '/icons/cart.svg';

import quoteIcon from '/icons/quote.svg';
import testimonialsReviews from '@/data/testimonialsReviews';
import { carousel } from '@/components/carousel';

const testimonialsCards = testimonialsReviews.map(review => `
  <div class="testimonial">
      <div class="header">
          <div class="pfp">
              <img src="${review.pic}" alt="pic" />
              <img src="${quoteIcon}" alt="quote" />
          </div>
          <h2>${review.name} ${review.surname}</h2>
      </div>
      <p>${review.message}</p>
      <span class="rating"></span>
  </div>
`).join("\n")

export function homePage(): string {
  return `
    <!-- CAROUSEL -->
    ${carousel()}

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
        <div class="testimonial-container">${testimonialsCards}</div>

        <!-- WIP -->
        <!-- <div class="controls">
            <img src="${chevronIcon}" alt="left chevron" />
            <img src="${chevronIcon}" alt="right chevron" />
        </div> -->
    </section>
  `;
}