import cartIcon from "/icons/cart.svg";
import profileIcon from "/icons/profile.svg";
import hamburgerMenuIcon from "/icons/hamburger-menu.svg";

const isActive = (path: string) => (location.hash || "#/home") === `#/${path}` ? "active" : "";

const links = [
  { path: "home", label: "Home" },
  { path: "shop", label: "Shop" },
  { path: "ourStory", label: "Our Story" },
  { path: "cart", label: "Cart", img: cartIcon },
  { path: "profile", label: "Profile", img: profileIcon },
];

export function navbar(): string {
  const navLinks = links
    .map(link => `
      <li><a href="#/${link.path}" class="${!['cart', 'profile'].includes(link.path) ? isActive(link.path) : ""}">
        ${link.img ? `<img src="${link.img}" alt="${link.label}" />` : link.label}
      </a></li>
    `).join("\n");

  return `
    <header>
      <div class="inline-logo"></div>
      <nav>
        <ul>
          ${navLinks}
        </ul>
      </nav>
      <div class="icons">
        <button onclick="toggleMenu()"> <img src="${hamburgerMenuIcon}" alt="hamburger-menu" /> </button>
        <a href="#/cart"> <img src="${cartIcon}" alt="cart" /> </a>
        <a href="#/profile"> <img src="${profileIcon}" alt="profile" /> </a>
      </div>
    </header>
  `;
}