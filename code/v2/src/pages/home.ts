import chevronIcon from '/icons/chevron.svg';
import quoteIcon from '/icons/quote.svg';
import { productCard } from '@/components/product';
import { carousel } from '@/components/carousel';
import products from '@/data/products';
import type { Product } from '@/data/products';
import testimonialsReviews from '@/data/testimonialsReviews';

const productsPerPage = 6;
let productPage = 0;

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

const renderProducts = (products: Product[], page: number) => {
  if(!products || products.length === 0) return "<p>No products available.</p>";
  const productsToRender = products.slice(page * productsPerPage, (page + 1) * productsPerPage);
  return productsToRender.map(product => productCard(product.name, product.price, product.img)).join("\n");
};

export function changeProductPage(action: "inc" | "dec") {
  if(!products || products.length === 0) return;
  const totalPages = Math.ceil(products.length / productsPerPage);

  if(action === "inc") productPage = productPage < totalPages - 1 ? productPage + 1 : 0;
  else productPage = productPage > 0 ? productPage - 1 : totalPages - 1;

  const cardsContainer = document.querySelector(".cards");
  if(cardsContainer) cardsContainer.innerHTML = renderProducts(products, productPage);
}

export function initProductSectionControls() {
  document.getElementById("productSectionLeftControl")?.addEventListener("click", () => changeProductPage("dec"));
  document.getElementById("productSectionRightControl")?.addEventListener("click", () => changeProductPage("inc"));
}


export function homePage(): string {
  return `
    <!-- CAROUSEL -->
    ${carousel()}

    <!-- PRODUCT SECTION -->
    <section id="products" class="center-grid">
        <h2 class="title">Products</h2>

        <div class="cards">${renderProducts(products, productPage)}</div>

        <div class="controls">
            <img id="productSectionLeftControl" src="${chevronIcon}" alt="left chevron" />
            <img id="productSectionRightControl" src="${chevronIcon}" alt="right chevron" />
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