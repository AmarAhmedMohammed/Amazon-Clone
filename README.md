<div align="center">

<!-- Header Banner -->
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Clone Logo" width="280"/>

<br/>
<br/>

# 🛒 Amazon Clone — Full-Stack E-Commerce

<p align="center">
  <em>A pixel-perfect, feature-rich Amazon e-commerce clone built with React, Firebase & Material UI</em>
</p>

<br/>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Firebase-12.4.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
  <img src="https://img.shields.io/badge/MUI-7.3.4-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI"/>
  <img src="https://img.shields.io/badge/React_Router-7.8.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="Styled Components"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License"/>
  <img src="https://img.shields.io/badge/PRs-Welcome-orange?style=flat-square" alt="PRs Welcome"/>
</p>

<br/>

<!-- Separator -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

</div>

<br/>

## 📋 Table of Contents

<details open>
<summary><b>Click to expand / collapse</b></summary>

<br/>

| # | Section |
|---|---------|
| 🎯 | [Overview](#-overview) |
| ✨ | [Features](#-features) |
| 🏗️ | [Architecture](#️-architecture) |
| 🛠️ | [Tech Stack](#️-tech-stack) |
| 📁 | [Folder Structure](#-folder-structure) |
| 🚀 | [Getting Started](#-getting-started) |
| ⚙️ | [Environment Setup](#️-environment-setup) |
| 📸 | [Screenshots](#-screenshots) |
| 🧩 | [Components](#-components) |
| 🗺️ | [Routes](#️-routes) |
| 🤝 | [Contributing](#-contributing) |
| 📄 | [License](#-license) |

</details>

<br/>

---

<br/>

## 🎯 Overview

<table>
<tr>
<td>

**Amazon Clone** is a fully functional e-commerce web application that replicates the core shopping experience of Amazon.com. Built with **React 19**, powered by **Firebase** for authentication & database, and styled with **Material UI** and **Styled Components**, this project demonstrates modern front-end development practices including state management with Context API + `useReducer`, client-side routing, and responsive design.

> 💡 *This project uses the [Fake Store API](https://fakestoreapi.com/) for product data, providing realistic product listings across multiple categories.*

</td>
</tr>
</table>

<br/>

## ✨ Features

<div align="center">

| Feature | Description | Status |
|:--------|:------------|:------:|
| 🏠 **Landing Page** | Hero carousel with category cards & product listings | ✅ |
| 🔐 **Authentication** | Email/password sign-in & sign-up via Firebase Auth | ✅ |
| 🛍️ **Product Browsing** | Browse products by category with detailed views | ✅ |
| 📦 **Product Details** | Individual product pages with full descriptions & ratings | ✅ |
| 🛒 **Shopping Cart** | Add/remove items with real-time subtotal calculations | ✅ |
| 💳 **Checkout Flow** | Seamless checkout with payment page | ✅ |
| 📋 **Order History** | View past orders for authenticated users | ✅ |
| 🔍 **Search Bar** | Category-filtered search with Amazon-style dropdown | ✅ |
| 🌐 **Multi-language** | Language selector (EN, ES, AR, DE, HE, KO, PT, ZH) | ✅ |
| 📍 **Delivery Location** | Location-aware delivery display | ✅ |
| 💰 **Currency Formatting** | Professional currency display with `numeral.js` | ✅ |
| 🔄 **Loading States** | Smooth loading spinners with `react-spinners` | ✅ |
| 🚫 **404 Page** | Custom error page for undefined routes | ✅ |
| 📱 **Responsive Design** | Optimized for all screen sizes | ✅ |

</div>

<br/>

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     🌐 Browser                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  React   │  │ React Router │  │  Context API +   │  │
│  │  19.1.0  │──│    v7.8.0    │──│   useReducer     │  │
│  └──────────┘  └──────────────┘  └──────────────────┘  │
│       │                                    │            │
│  ┌────▼─────────────────────────────────────▼────────┐  │
│  │              Component Layer                      │  │
│  │  ┌────────┐ ┌──────────┐ ┌────────┐ ┌─────────┐  │  │
│  │  │ Header │ │ Carousel │ │Category│ │Products │  │  │
│  │  └────────┘ └──────────┘ └────────┘ └─────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
│       │                                                 │
│  ┌────▼──────────────────────────────────────────────┐  │
│  │                Pages Layer                        │  │
│  │  ┌─────┐ ┌────┐ ┌───────┐ ┌──────┐ ┌─────────┐  │  │
│  │  │Auth │ │Cart│ │Payment│ │Orders│ │ Details │  │  │
│  │  └─────┘ └────┘ └───────┘ └──────┘ └─────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
│       │                                                 │
├───────▼─────────────────────────────────────────────────┤
│                  🔥 Firebase Backend                    │
│  ┌─────────────────┐  ┌─────────────────────────────┐  │
│  │  Authentication  │  │      Cloud Firestore        │  │
│  │  (Email/Pass)    │  │  (Orders & User Data)       │  │
│  └─────────────────┘  └─────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

<br/>

## 🛠️ Tech Stack

<div align="center">

### 🎨 Frontend

<table>
<tr>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br /><b>React 19</b>
<br /><sub>UI Library</sub>
</td>
<td align="center" width="120">
<img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite" />
<br /><b>Vite 7</b>
<br /><sub>Build Tool</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" width="48" height="48" alt="MUI" />
<br /><b>MUI v7</b>
<br /><sub>UI Components</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
<br /><b>JavaScript</b>
<br /><sub>Language</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3" />
<br /><b>CSS3</b>
<br /><sub>Styling</sub>
</td>
</tr>
</table>

### 🔥 Backend & Services

<table>
<tr>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width="48" height="48" alt="Firebase" />
<br /><b>Firebase</b>
<br /><sub>Auth & Database</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React Router" />
<br /><b>React Router</b>
<br /><sub>Navigation</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="48" height="48" alt="npm" />
<br /><b>npm</b>
<br /><sub>Package Manager</sub>
</td>
</tr>
</table>

### 📦 Key Dependencies

| Package | Version | Purpose |
|:--------|:--------|:--------|
| `react` | `^19.1.0` | Core UI library |
| `react-dom` | `^19.1.0` | DOM rendering |
| `react-router-dom` | `^7.8.0` | Client-side routing |
| `firebase` | `^12.4.0` | Authentication & Firestore |
| `@mui/material` | `^7.3.4` | Material UI components |
| `@mui/icons-material` | `^7.3.4` | Material Design icons |
| `@emotion/react` | `^11.14.0` | CSS-in-JS (MUI dependency) |
| `@emotion/styled` | `^11.14.1` | Styled components for MUI |
| `styled-components` | `^6.1.19` | Styled components library |
| `react-responsive-carousel` | `^3.2.23` | Image carousel/slider |
| `react-spinners` | `^0.17.0` | Loading spinner animations |
| `numeral` | `^2.0.6` | Number & currency formatting |
| `boxicons` | `^2.1.4` | Icon library |

</div>

<br/>

## 📁 Folder Structure

```
Amazon-Clone/
│
├── 📄 index.html                      # Entry HTML file
├── 📄 package.json                    # Project metadata & dependencies
├── 📄 vite.config.js                  # Vite bundler configuration
├── 📄 eslint.config.js                # ESLint configuration
├── 📄 .gitignore                      # Git ignore rules
│
├── 📁 public/                         # Static assets
│   ├── 🖼️ amazon.png                  # Favicon
│   ├── 🖼️ amazon-black-logo.png       # Black Amazon logo (Auth page)
│   ├── 🖼️ amazon-text-logo.png        # Amazon text logo (Header)
│   ├── 🖼️ america-flag.png            # US flag icon (Language selector)
│   ├── 🖼️ cart-logo.png               # Shopping cart icon
│   ├── 📄 data.json                   # Product catalog (20 products)
│   └── 📄 loginData.json              # Authentication related data
│
└── 📁 src/                            # Source code
    ├── 📄 App.jsx                     # Root component with route definitions
    ├── 📄 main.jsx                    # Entry point with providers
    │
    ├── 📁 components/                 # Reusable UI components
    │   ├── 📁 Carousel/               # Hero image slider
    │   │   ├── Carousels.jsx
    │   │   ├── carousel.css
    │   │   └── 📁 Image/              # Carousel images (10001-10005.jpg)
    │   │
    │   ├── 📁 Category/               # Product category cards
    │   │   ├── Category.jsx
    │   │   ├── category.css
    │   │   └── categoryInfo.js        # Category metadata
    │   │
    │   ├── 📁 CurrenctFormat/         # Currency display utility
    │   │   └── CurrencyFormat.jsx
    │   │
    │   ├── 📁 DataProvider/           # Global state management
    │   │   └── DataProvider.jsx       # Context API provider
    │   │
    │   ├── 📁 Footer/                 # Site footer
    │   │
    │   ├── 📁 Header/                 # Navigation header
    │   │   ├── Header.jsx             # Search, auth, cart, location
    │   │   └── header.css
    │   │
    │   ├── 📁 Products/               # Product card component
    │   │
    │   └── 📁 Sub_header/             # Secondary navigation bar
    │
    └── 📁 Pages/                      # Route-level page components
        ├── 📁 404/                    # Not found page
        │   ├── Four04.jsx
        │   └── four04.css
        │
        ├── 📁 Auth/                   # Authentication pages
        │   ├── Authentication.jsx     # Sign In / Sign Up form
        │   ├── SignUp.jsx
        │   ├── authentication.css
        │   └── signUp.css
        │
        ├── 📁 Cart/                   # Shopping cart page
        │   ├── Cart.jsx               # Cart overview
        │   ├── CartDescription.jsx    # Cart item details
        │   ├── ProductCard.jsx        # Product in cart
        │   ├── PaymentCardDescription.jsx
        │   └── *.css                  # Associated styles
        │
        ├── 📁 CheckoutProduct/        # Checkout item component
        │   ├── CheckoutProduct.jsx
        │   └── CheckoutProduct.css
        │
        ├── 📁 Landing/                # Homepage
        │   ├── Landing.jsx            # Carousel + Categories + Products
        │   └── landing.css
        │
        ├── 📁 Loader/                 # Loading spinner
        │   └── Loader.jsx
        │
        ├── 📁 Orders/                 # Order history page
        │   ├── Orders.jsx
        │   └── orders.css
        │
        ├── 📁 Payment/                # Checkout payment page
        │   ├── Payment.jsx
        │   └── payment.css
        │
        ├── 📁 ProductDetail/          # Individual product page
        │   ├── ProductDetail.jsx
        │   └── productDetail.css
        │
        ├── 📁 Results/                # Search results page
        │   ├── Results.jsx
        │   └── results.css
        │
        ├── 📁 categoryDetail/         # Category listing page
        │   ├── CategoryDetail.jsx
        │   └── categoryDetail.css
        │
        ├── 📁 sharedLayout/           # Persistent layout wrapper
        │   ├── SharedLayout.jsx       # Header + Footer + Outlet
        │   └── sharedLayout.css
        │
        └── 📁 Utility/                # Shared utilities
            ├── action.type.jsx        # Action type constants
            ├── firebase.jsx           # Firebase config & initialization
            └── reducer.jsx            # Global state reducer
```

<br/>

## 🚀 Getting Started

### 📋 Prerequisites

<table>
<tr>
<td>

| Requirement | Version |
|:------------|:--------|
| **Node.js** | `≥ 18.x` |
| **npm** | `≥ 9.x` |
| **Git** | Latest |

</td>
</tr>
</table>

### 📥 Installation

<details open>
<summary><b>Step-by-step guide</b></summary>

<br/>

**1️⃣ Clone the repository**

```bash
git clone https://github.com/your-username/Amazon-Clone.git
cd Amazon-Clone
```

**2️⃣ Install dependencies**

```bash
npm install
```

**3️⃣ Start the development server**

```bash
npm run dev
```

**4️⃣ Open in browser**

```
🌐 http://localhost:5173
```

</details>

### 📜 Available Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | 🔄 Start development server with hot reload |
| `npm run build` | 📦 Create optimized production build |
| `npm run preview` | 👁️ Preview the production build locally |
| `npm run lint` | 🔍 Run ESLint for code quality checks |

<br/>

## ⚙️ Environment Setup

### 🔥 Firebase Configuration

The project uses Firebase for authentication and database services. To set up your own Firebase instance:

<details>
<summary><b>Click to expand Firebase setup guide</b></summary>

<br/>

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → **Email/Password** sign-in method
4. Enable **Cloud Firestore** database
5. Get your Firebase config and update `src/Pages/Utility/firebase.jsx`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

> ⚠️ **Security Note:** Never commit sensitive API keys to public repositories. Use environment variables (`.env`) in production.

</details>

<br/>

## 📸 Screenshots

<div align="center">

> 🖼️ *Screenshots coming soon — run the project locally to explore the full UI!*

<table>
<tr>
<td align="center"><b>🏠 Landing Page</b><br/><sub>Hero carousel, category cards, product grid</sub></td>
<td align="center"><b>🔐 Authentication</b><br/><sub>Sign in / Sign up with Firebase</sub></td>
</tr>
<tr>
<td align="center"><b>🛒 Shopping Cart</b><br/><sub>Add/remove items, subtotal calculation</sub></td>
<td align="center"><b>📦 Product Details</b><br/><sub>Full product info with ratings</sub></td>
</tr>
</table>

</div>

<br/>

## 🧩 Components

<div align="center">

### Reusable Components

| Component | File | Description |
|:----------|:-----|:------------|
| 🎠 **Carousel** | `components/Carousel/Carousels.jsx` | Responsive hero image slider with 5 banner images |
| 📂 **Category** | `components/Category/Category.jsx` | Product category cards (Electronics, Men's, Women's, Jewellery) |
| 💵 **CurrencyFormat** | `components/CurrenctFormat/CurrencyFormat.jsx` | Formats prices using `numeral.js` |
| 📊 **DataProvider** | `components/DataProvider/DataProvider.jsx` | Global state management via Context API + `useReducer` |
| 🔝 **Header** | `components/Header/Header.jsx` | Full navigation bar with search, auth, cart, location |
| 🔻 **Footer** | `components/Footer/` | Site-wide footer component |
| 🏷️ **Products** | `components/Products/` | Product card with add-to-cart functionality |
| 📎 **Sub Header** | `components/Sub_header/` | Secondary navigation menu |

### Page Components

| Page | Route | Description |
|:-----|:------|:------------|
| 🏠 **Landing** | `/` | Homepage with carousel, categories & products |
| 🔐 **Authentication** | `/Authentication` | Sign in & registration with loading states |
| ✍️ **SignUp** | `/signUp` | Account creation page |
| 🛒 **Cart** | `/cart` | Shopping cart with item management & subtotals |
| 💳 **Payment** | `/payment` | Checkout payment processing |
| 📋 **Orders** | `/order` | Order history for authenticated users |
| 📦 **ProductDetail** | `/products/:productId` | Individual product detail view |
| 🗂️ **CategoryDetail** | `/category/:category` | Category-filtered product listings |
| 🚫 **404** | `*` | Custom not-found error page |

</div>

<br/>

## 🗺️ Routes

```
📍 Route Map
│
├── /                        → 🏠 Landing Page (SharedLayout)
├── /Authentication          → 🔐 Sign In / Sign Up
├── /signUp                  → ✍️ Registration
├── /cart                    → 🛒 Shopping Cart
├── /payment                 → 💳 Checkout
├── /order                   → 📋 Order History
├── /products                → 🏷️ All Products
├── /products/:productId     → 📦 Product Detail
├── /category/:category      → 🗂️ Category View
└── *                        → 🚫 404 Not Found
```

<br/>

## 🔄 State Management

<div align="center">

The app uses **React Context API** combined with `useReducer` for global state management.

```
┌─────────────────────────────┐
│       DataProvider          │
│    (Context + Reducer)      │
├─────────────────────────────┤
│                             │
│  State:                     │
│  ├── 🛒 basket: []          │
│  └── 👤 user: null          │
│                             │
│  Actions:                   │
│  ├── ADD_TO_BASKET          │
│  ├── REMOVE_FROM_BASKET     │
│  └── SET_USER               │
│                             │
└─────────────────────────────┘
```

</div>

<br/>

## 🤝 Contributing

<table>
<tr>
<td>

Contributions are always welcome! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔃 **Open** a Pull Request

</td>
</tr>
</table>

<br/>

## 📄 License

<div align="center">

This project is licensed under the **MIT License**.

<br/>

```
MIT License — feel free to use this project for learning and development.
```

<br/>

---

<br/>

<p align="center">
  <b>⭐ If you found this project helpful, please give it a star!</b>
</p>

<p align="center">
  Made with ❤️ and ☕
</p>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Thanks_for_visiting!-😊-blue?style=for-the-badge" alt="Thanks"/>
</p>

</div>
