import products from "@/data/products";
import cartItems from "@/data/cartItems";
import { generateStars } from "@/components/product";
import { relatedProducts } from '@/components/relatedProducts';
import productIcon from "/icons/product-placeholder.svg";
import minusIcon from "/icons/minus.svg";
import plusIcon from "/icons/plus.svg";
import cartIcon from "/icons/cart.svg";
import shape from "/icons/shape.svg";

export function productPage(id: number): string {
  const product = products.find(p => p.id === id);
  const quantity = cartItems.find(p => p.id === product?.id)?.quantity ?? 0;
  if(!product) return `<h2>Product not found</h2>`;

  // Product Details
  let productInfo = `<p> No information available. </p>`;
  if(product.otherInfo) productInfo = Object.entries(product.otherInfo)
    .map(([key, link]) => `<li><strong>${key}:</strong> ${link}</li>`).join('\n');

  return `
    <section id="product-details-page">
      <img class="shape n1" src="${shape}" />

      <div class="main-info center-flex row">
        <img src="${product.img}" alt="${product.name}" />
        <div class="product-info">
          <h1 class="title">${product.name}</h1>
          <p class="description">${product.description || "No description available."}</p>

          <div class="price-size-quantity-container flex row">
            <div class="left">
              <span class="rating">${generateStars(product.rating)}</span>
              <div class="size">
                <label>Size:</label>
                <span> <img src="${productIcon}" /> ${product.size}</span>
              </div>

              <div class="quantity">
                <label>Quantity:</label>
                <button> <img src="${minusIcon}" /> </button>
                <p>${quantity}</p>
                <button> <img src="${plusIcon}" /> </button>
              </div>
            </div>

            <div class="right flex row">
              <p class="price">${product.price.toFixed(2)}€</p>
              <button class="add-to-cart center-grid" data-id="${product.id}"> <img src="${cartIcon}" alt="buy" /> </button>
            </div>
          </div>

        </div>
      </div>

      <div class="other-info product-details">
        <h2>Product Details</h2>
        <ul>${productInfo}</ul>
      </div>

      <div class="other-info product-photos">
        <img class="shape n2" src="${shape}" />
        <h2>Product Photos</h2>
        <div class="container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>

      ${relatedProducts()}

    </section>
  `;
}