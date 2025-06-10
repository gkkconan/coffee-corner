import { navbar, initNavbarToggle } from "@/components/navbar";
import { footer, initFooterEvents } from "@/components/footer";
import { initCarouselControls } from "@/components/carousel";
import { initProductsList } from "@/components/productsList";

import { homePage } from "@/pages/home";
import { shopPage } from "@/pages/shop";
import { cartPage } from "@/pages/cart";
import { profilePage } from "@/pages/profile";
import { ourStoryPage } from "@/pages/ourStory";
import { notFoundPage } from "@/pages/notFound";

import { isAuthenticated } from "@/core/auth";

import cartItems from "@/data/cartItems";
import products from "@/data/products";

interface Route {
  page: () => string;
  protected?: boolean;
}

const routes: Record<string, Route> = {
  home: { page: homePage },
  shop: { page: shopPage },
  cart: { page: cartPage },
  ourStory: { page: ourStoryPage },
  profile: { page: profilePage, protected: true },
};

export function router(): void {
  const path = location.hash.slice(2) || "home";
  const route = routes[path] ?? { page: notFoundPage };
  const app = document.getElementById("app");
  if(!app) return;

  const render = (content: string) => {
    app.innerHTML = `${navbar()}<main>${content}</main>${footer()}`;
  };

  if(route.protected && !isAuthenticated()){
    render(`<h1>Access Denied</h1>`);
    return;
  }

  requestAnimationFrame(() => {
    render(route.page());

    initNavbarToggle();
    initFooterEvents();
    initCarouselControls();

    initProductsList(products, "bestsellers", 6)        // home page bestsellers
    initProductsList(cartItems, "cart-items", 3)        // cart items
    initProductsList(cartItems, "related-products", 4)  // related products
  });
}