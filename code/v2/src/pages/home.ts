import chevronIcon from '/icons/chevron.svg';
import { products } from '@/data/products';
import { productCard } from '@/components/product';

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

const productCards = products.slice(0, 6).map(product => productCard(product.name, product.price, product.img)).join("\n")

export function homePage(): string {
  return `
    <!-- CAROUSEL -->
    ${carousel()}

    <!-- PRODUCT SECTION -->
    <section id="products" class="center-grid">
        <h2 class="title">Products</h2>

        <div class="cards">${productCards}</div>

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