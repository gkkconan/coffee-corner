import { relatedProducts } from '@/components/relatedProducts';
import chevronIcon from '/icons/chevron.svg';
import cartItems from "@/data/cartItems";

export function cartPage(): string {
  return `
    <section id="cart" class="center-flex column">
      <h1 class="title">Your shopping cart</h1>

      <div id="cart-info" class="center-flex row">
        <div id="cart-items-container">
          <div id="cart-items" class="products" data-scope="cart-items"></div>

          <div class="controls" data-scope="cart-items">
              <img data-control="prev" src="${chevronIcon}" alt="left chevron" />
              <!-- <p data-control="page">0</p> --> <!-- uncomment these lines to show page number -->
              <img data-control="next" src="${chevronIcon}" alt="right chevron" />
          </div>
        </div>

        <div id="sidebar-summary">
          <div class="order-summary">
            <div class="subtotal">
              <label>Subtotal:</label>
              <span>$${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
            </div>
            <div class="shipping-costs">
              <label>Shipping costs:</label>
              <span>$${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
            </div>
            <hr>
            <div class="total">
              <label>Total:</label>
              <span>$${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
            </div>
          </div>

          <div class="coupon-code center-flex row">
            <input type="text" placeholder="Please enter coupon code">
            <button>Apply</button>
          </div>
        </div>

      </div>

      ${relatedProducts()}
    </section>
  `;
}