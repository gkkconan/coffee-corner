import chevronIcon from '/icons/chevron.svg';
import quoteIcon from '/icons/quote.svg';
import { carousel } from '@/components/carousel';
import testimonialsReviews from '@/data/testimonialsReviews';


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
    <section id="products" class=" products center-grid">
      <h2 class="title">Products</h2>

      <div id="bestsellers" class="cards" data-scope="bestsellers"></div>

      <div class="controls" data-scope="bestsellers">
        <img data-control="prev" src="${chevronIcon}" alt="left chevron" />
        <!-- <p data-control="page">0</p> --> <!-- uncomment these lines to show page number -->
        <img data-control="next" src="${chevronIcon}" alt="right chevron" />
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