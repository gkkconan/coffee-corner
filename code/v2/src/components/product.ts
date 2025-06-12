import type { Product } from "@/data/products";
import cartIcon from "/icons/cart.svg";

export function generateStars(rating: number): string {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = (rating - fullStars) >= 0.5 ? 1 : 0;
  const emptyStars = maxStars - fullStars - halfStar;
  let starsHTML = ``;

  for(let i = 0; i < fullStars; i++) starsHTML += `<span class="full-star"></span>`;
  if(halfStar) starsHTML += `<span class="half-star"></span>`;
  for(let i = 0; i < emptyStars; i++) starsHTML += `<span class="empty-star"></span>`;

  return starsHTML;
}

export function productCard(product: Product): string {
  return `
    <div class="card center-flex">
        <a href="#/product/${product.id}" class="img" style="background: url(${product.img}) center/cover no-repeat"></a>
        <span class="text">
            <h3>${product.name}</h3>
            <span class="rating-and-price flex">
                <span class="rating">
                ${generateStars(product.rating)}
                </span>
                <h2>${product.price}€</h2>
            </span>
        </span>
        <button data-id="${product.id}" class="add-to-cart center-grid"> <img src="${cartIcon}" alt="buy" /> </button>
    </div>
  `;
}