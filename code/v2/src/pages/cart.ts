import chevronIcon from '/icons/chevron.svg';
import { productCard } from "@/components/product";
import cartItems from "@/data/cartItems";

// WIP
const renderCartItems = () => {
  return cartItems.slice(0, 3).map((item) => productCard(item.name, item.price, item.img)).join('');
};

export function cartPage(): string {
  return `
    <section id="cart" class="center-flex column">
      <h1 class="title">Your shopping cart</h1>

      <div id="cart-info" class="center-flex row">
        <div id="cart-items">
          ${renderCartItems()}

          <div class="controls">
              <img id="productSectionLeftControl" src="${chevronIcon}" alt="left chevron" />
              <img id="productSectionRightControl" src="${chevronIcon}" alt="right chevron" />
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
    </section>
  `;
}