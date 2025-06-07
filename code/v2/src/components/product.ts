import cartIcon from "/icons/cart.svg";

export function productCard(name: string, price: number, img: string, id?: number): string {
  return `
    <div class="card center-flex">
        <span class="img" style="background: url(${img}) center/cover no-repeat"></span>
        <span class="text">
            <h3>${name}</h3>
            <span class="rating-and-price center-flex">
                <span class="rating"></span>
                <h2>${price}€</h2>
            </span>
        </span>
        <button class="center-grid"> <img src="${cartIcon}" alt="buy" /> </button>
    </div>
  `;
}