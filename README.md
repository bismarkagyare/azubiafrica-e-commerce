# Audiophile E-Commerce

## For AzubiAfrica Technical Assessment

A modern, multi-page e-commerce web application for audio products, built with React, TypeScript, and a suite of best-in-class frontend tools. This project features a fully functional cart, product catalog, and checkout flow, all designed for a seamless and responsive user experience.

---

## 🚀 Project Overview

Audiophile E-Commerce is a demo online store for high-end audio products. Users can browse categories, view detailed product pages, add items to a persistent cart, and complete a checkout process with form validation and order confirmation. The UI is fully responsive and includes modern UX touches like modals, notifications, and animated interactions.

---

## ✨ Key Features

- **Responsive UI**: Optimized for mobile, tablet, and desktop.
- **Product Catalog**: Browse by category and view detailed product pages.
- **Persistent Cart**: Add, remove, and update product quantities; cart state is saved in localStorage.
- **Cart Modal**: Accessible from the navbar, with real-time updates and outside/Esc click handling.
- **Checkout Flow**: Multi-step checkout with form validation, order summary, and confirmation modal.
- **Form Validation**: Built with React Hook Form and Zod for robust, user-friendly validation.
- **Notifications**: Success messages for cart actions using react toastify notifications.
- **API/Data**: Product data loaded from a local JSON file (can be swapped for a real API).
- **Modern UX**: Animated transitions, hover states, and accessible components.

---

## 🛠️ Technologies Used

- **React** (with TypeScript)
- **React Router** (multi-page navigation)
- **Tailwind CSS** (utility-first styling)
- **Ant Design** (notifications, UI polish)
- **React Hook Form** + **Zod** (form state & validation)
- **Axios** (data fetching)
- **React Query** (data caching & async state)
- **Lucide React** (icons)
- **Vite** (build tool)
- **localStorage** (cart persistence)

---

## 📁 Folder Structure Overview

```
src/
  components/
    button/         # Reusable button components
    cards/          # Card components (e.g., CheckoutCard)
    loaders/        # Loading skeletons
    shared/         # Shared UI sections (e.g., CategorySection)
    ui/             # UI primitives
  contexts/
    CartContext.tsx # Global cart state and logic
  hooks/
    useCart.ts      # Cart context hook
    useProductFetch.ts # Product data fetching
  pages/
    product-details/ # Product detail page and subcomponents
    checkout/        # Checkout flow (form, summary, confirmation)
    earphones/       # Earphones category page
    speakers/        # Speakers category page
    headphones/      # Headphones category page
    home/            # Home page
  types/
    product.ts      # Product and related types
    cartItem.ts     # Cart item type
  constants/        # App-wide constants (e.g., fees, tax rates)
  services/         # API/axios setup
  utils/            # Utility functions (e.g., scrollToTop)
  assets/           # Images and static assets
  styles/           # Global and custom styles
  data.json         # Product data
  App.tsx           # App entry point
  main.tsx          # Vite entry point
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/bismarkagyare/audiophile-ecommerce.git
cd audiophile-ecommerce
npm install
# or
yarn install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (or as specified by Vite).

---

## 🗺️ Future Improvements / Roadmap

- User authentication and order history
- Payment gateway integration
- Product reviews and ratings
- Backend API for real orders and inventory
- Improved accessibility and keyboard navigation
- More advanced filtering and search
- Admin dashboard for product management


