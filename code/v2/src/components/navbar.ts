import cartIcon from "/icons/cart.svg";
import profileIcon from "/icons/profile.svg";
import hamburgerMenuIcon from "/icons/hamburger-menu.svg";

const isActive = (path: string) => (location.hash || "#/home") === `#/${path}` ? "active" : "";
let menu = false;

const links = [
  { path: "home", label: "Home" },
  { path: "shop", label: "Shop" },
  { path: "ourStory", label: "Our Story" },
  { path: "cart", label: "Cart", img: cartIcon },
  { path: "profile", label: "Profile", img: profileIcon },
];

export function initNavbarToggle(): void {
  const navbar = document.querySelector("nav ul") as HTMLElement;
  const toggleBtn = document.getElementById("toggleNavbarBtn");
  if (!navbar || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if(menu){navbar!.style.display = "none"; menu = false}
    else{navbar!.style.display = "flex"; menu = true}
  });

  if(window.innerWidth <= 768){
    navbar.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => { navbar.style.display = "none"; menu = false; });
    });
  }

  const handleResize = () => {
    if(window.innerWidth > 768){ navbar.style.display = "flex"; menu = true; }
    else{ navbar.style.display = "none"; menu = false; }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
}

export function navbar(): string {
  const navLinks = links
    .map(link => `
      <li><a href="#/${link.path}" class="${!['cart', 'profile'].includes(link.path) ? isActive(link.path) : ""}">
        ${link.img ? `<img src="${link.img}" alt="${link.label}" />` : link.label}
      </a></li>
    `).join("\n");

  return `
    <header>
      <div class="logo"></div>
      <nav>
        <ul>
          ${navLinks}
        </ul>
      </nav>
      <div class="icons">
        <button id="toggleNavbarBtn"> <img src="${hamburgerMenuIcon}" alt="hamburger-menu" /> </button>
        <a href="#/cart"> <img src="${cartIcon}" alt="cart" /> </a>
        <a href="#/profile"> <img src="${profileIcon}" alt="profile" /> </a>
      </div>
    </header>
  `;
}