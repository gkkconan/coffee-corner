import type { Product } from "@/data/products";
import type { CartItem } from "@/data/cartItems";
import products from "@/data/products";
import { productCard } from "./product";

const productsListListState: Record<string, { pageIndex: number; productsListPerPage: number }> = {};

export function renderproductsList(productsList: Product[] | CartItem[], page: number, productsListPerPage: number): string {
  let mergedProductsList: (Product & Partial<CartItem>)[];
  if(!productsList || productsList.length === 0) return "<p>No productsList available.</p>";

  const isProductArray = (arr: (Product | CartItem)[]): arr is Product[] => {
    return arr.length === 0 || (arr[0] as Product).price !== undefined;
  };

  if(!isProductArray(productsList)){
    mergedProductsList = productsList.map((cartItem: CartItem) => {
        const product = products.find(p => p.id === cartItem.id);
        if(!product) return undefined;
        return { ...product, ...cartItem };
      })
      .filter((item): item is Product & CartItem => item !== undefined);
  }
  else mergedProductsList = productsList;

  const productsListToRender = mergedProductsList.slice(page * productsListPerPage, (page + 1) * productsListPerPage);
  return productsListToRender.map(product => productCard(product)).join("\n");
}


export function changeProductPage(items: Product[] | CartItem[], action: "prev" | "next", scope: string): void {
  const state = productsListListState[scope];
  if(!items || items.length === 0) return;
  const totalPages = Math.ceil(items.length / state.productsListPerPage);

  if(action === "next") state.pageIndex = state.pageIndex < totalPages - 1 ? state.pageIndex + 1 : 0;
  else state.pageIndex = state.pageIndex > 0 ? state.pageIndex - 1 : totalPages - 1;

  const cardsContainer = document.querySelector(`#${scope}[data-scope="${scope}"]`);
  // uncomment these lines to show page number
  // let pageNumber = document.querySelector(`[data-control="page"]`);
  // if(pageNumber) pageNumber.innerHTML = String(productsListListState[scope].pageIndex);
  if(cardsContainer) cardsContainer.innerHTML = renderproductsList(items, state.pageIndex, state.productsListPerPage);
}

export function initProductsList(items: Product[] | CartItem[], scope: string, productsListPerPage: number = 6): void {
  productsListListState[scope] = { pageIndex: 0, productsListPerPage };
  const controlsContainer = document.querySelector(`.controls[data-scope="${scope}"]`);
  if(!controlsContainer) return;

  const leftControl = controlsContainer.querySelector('[data-control="prev"]') as HTMLImageElement;
  const rightControl = controlsContainer.querySelector('[data-control="next"]') as HTMLImageElement;
  if(!leftControl || !rightControl) return;

  leftControl.addEventListener("click", () => changeProductPage(items, "prev", scope));
  rightControl.addEventListener("click", () => changeProductPage(items, "next", scope));

  const cardsContainer = document.querySelector(`#${scope}[data-scope="${scope}"]`);
  if(!cardsContainer) return;
  cardsContainer.innerHTML = renderproductsList(items, 0, productsListPerPage);
}