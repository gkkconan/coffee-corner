import type { Product } from "@/data/products";
import type { CartItem } from "@/data/cartItems";
import { productCard } from "./product";

const productsListState: Record<string, { pageIndex: number; productsPerPage: number }> = {};

export function renderProducts(products: Product[] | CartItem[], page: number, productsPerPage: number): string {
  if(!products || products.length === 0) return "<p>No products available.</p>";
  const productsToRender = products.slice(page * productsPerPage, (page + 1) * productsPerPage);
  return productsToRender.map(product => productCard(product.name, product.price, product.img, product.id)).join("\n");
}

export function changeProductPage(items: Product[] | CartItem[], action: "prev" | "next", scope: string): void {
  const state = productsListState[scope];
  if(!items || items.length === 0) return;
  const totalPages = Math.ceil(items.length / state.productsPerPage);

  if(action === "next") state.pageIndex = state.pageIndex < totalPages - 1 ? state.pageIndex + 1 : 0;
  else state.pageIndex = state.pageIndex > 0 ? state.pageIndex - 1 : totalPages - 1;

  const cardsContainer = document.querySelector(".products");
  if(cardsContainer) cardsContainer.innerHTML = renderProducts(items, state.pageIndex, state.productsPerPage);
}

export function initProductsList(items: Product[] | CartItem[], scope: string, productsPerPage: number = 6): void {
  productsListState[scope] = { pageIndex: 0, productsPerPage };
  const controlsContainer = document.querySelector(`.controls[data-scope="${scope}"]`);
  if (!controlsContainer) return;

  const leftControl = controlsContainer.querySelector('[data-control="prev"]') as HTMLImageElement;
  const rightControl = controlsContainer.querySelector('[data-control="next"]') as HTMLImageElement;
  if(!leftControl || !rightControl) return;

  leftControl.addEventListener("click", () => changeProductPage(items, "prev", scope));
  rightControl.addEventListener("click", () => changeProductPage(items, "next", scope));

  const cardsContainer = document.querySelector(`#${scope}[data-scope="${scope}"]`);
  if (!cardsContainer) return;
  cardsContainer.innerHTML = renderProducts(items, 0, productsPerPage);
}