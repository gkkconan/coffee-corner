import chevronIcon from "/icons/chevron.svg";
import socialXIcon from "/icons/social/x.svg";
import socialInstagramIcon from "/icons/social/instagram.svg";
import socialLinkedInIcon from "/icons/social/linkedin.svg";

const links = [
  { path: "home", label: "Home" },
  { path: "shop", label: "Shop" },
  { path: "ourStory", label: "Our Story" },
  { path: "contacts", label: "Contacts" },
  { path: "privacyPolicy", label: "Privacy Policy" },
  { path: "termsAndConditions", label: "Terms and Conditions" },
];

const social = [
  { label: "X", href: "https://x.com", icon: socialXIcon },
  { label: "Instagram", href: "https://instagram.com", icon: socialInstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: socialLinkedInIcon },
]

const footerLinks = links.map(link => `<li><a href="#/${link.path}">${link.label}</a></li>`).join("\n");
const socialLinks = social.map(link => `<li><a href="${link.href}"> <img src="${link.icon}" alt="${link.label}" /> </a></li>`).join("\n");

export function footer(): string {
  return `
    <footer>
        <ul>
            <li class="upper">
                <ul class="text"> ${footerLinks} </ul>
                <div class="logo"></div> <!-- BACKGROUND IMAGE -->
            </li>

            <li class="lower">
                <img src="${chevronIcon}" class="back-to-top" alt="up chevron"/>
                <ul class="social-icons"> ${socialLinks} </ul>
            </li>
        </ul>
    </footer>
  `;
}

export function initFooterEvents(): void {
  const btn = document.querySelector<HTMLImageElement>(".back-to-top");
  if(!btn) return;
  btn.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }) });
}