# Coffee Corner

<div align="center">

![](https://img.shields.io/github/last-commit/gkkconan/coffee-corner?&style=for-the-badge&color=a7856c&logoColor=D9E0EE&labelColor=292324)
![](https://img.shields.io/github/stars/gkkconan/coffee-corner?style=for-the-badge&logo=andela&color=775a41&logoColor=D9E0EE&labelColor=292324)
![](https://img.shields.io/github/repo-size/gkkconan/coffee-corner?color=e2ccba&label=SIZE&logo=googledrive&style=for-the-badge&logoColor=D9E0EE&labelColor=292324)

</div>

☕ **Coffee Corner** is an online store entirely dedicated to the world of coffee, featuring products, stories, and tools for true coffee lovers.

This project was designed from scratch, starting with the brand identity, color palette, and UI wireframes. A full customer experience was imagined by defining user personas, crafting a visual style, creating example product data, customer testimonials, and imagery.

The result is a fully responsive e-commerce prototype — a complete design and development exercise that blends thoughtful branding with a modular frontend structure.

---

## 📁 Project Structure (One-Level View)
``` plaintext
.
├── code/                  # Source code
│   ├── v1/
│   └── v2/
├── design/                # Visual identity and UI design
│   ├── brand-identity/    # Brand guidelines and exports
│   ├── images/            # Coffee and shop imagery (placeholders)
│   ├── logo/              # Logo assets in various formats
│   ├── mockups/           # High-fidelity product previews
│   ├── palette/           # Color palette
│   └── ui/                # Wireframes (low-fidelity and detailed) and Figma prototype
├── marketing/             # User journey map
└── readme.md              # Project documentation
```


## 🔧 Versions
Both versions feature a fully responsive layout and are built using example data and copyright-free images.

### `v1` – Static Version
- Built with HTML, CSS, and JavaScript
- Pages: Home, Our Story
- Basic interactivity powered by local JSON files (e.g., products, testimonials)
- To view this version correctly, you need to run it via a local development server (e.g., **Live Server extension**, `php -S`, or `python -m http.server`) to ensure assets and JSON files load properly.

### `v2` – Vite + TypeScript Version
- Built using [Vite](https://vite.dev/) for fast development and hot module reloading
- Uses **TypeScript** and a modular structure (`components`, `core`, `css`, `data`, `pages`)
- Improved code organization for scalability and maintainability
- Managed via [PNPM](https://pnpm.io/) for efficient package handling
- Pages: Home, Cart, Our Story, Product Details, 404 Not Found


## 🌐 Features
- Custom carousel (with images and captions) based on TypeScript modules
- Products catalog with images, ratings, and prices
- Responsive layout for all devices
- Modular architecture
- Data-driven content via TypeScript modules
- Custom branding and UI
- Navigation bar with mobile support
- Testimonials section


## 🚀 Getting Started

### Run v1 (static)
- `cd code/v1`
- `python -m http.server 5500` to run the project

### Run v2 (Vite + TS)
- `cd code/v2`
- `pnpm install` to install all dependencies
- `pnpm run dev` to run the project


## ✒️ Author
Developed by [@gkkconan](https://github.com/gkkconan/)
Feel free to explore, fork, or contribute to the project.