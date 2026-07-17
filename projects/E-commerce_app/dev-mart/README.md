<div align="center">

# 🛒 Dev-Mart

> A modern, full-stack e-commerce web application built with Next.js, Firebase, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.15.0-FFCA28?logo=firebase)](https://firebase.google.com/)

</div>

---

## ✨ Features

- 🔐 **Authentication** — Secure sign-in and sign-up with Firebase Auth using email/password and Google sign-in
- 🏠 **Home Page** — Browse products in a responsive grid layout with category-based navigation
- 🔍 **Product Details** — Dedicated product pages with title, description, pricing, and image preview
- 🛒 **Shopping Cart** — Add, remove, and manage cart items before checkout
- ❤️ **Wishlist** — Save favorite products for later viewing
- 📦 **Orders** — Track completed purchases and order history
- 👤 **User Profile** — View and manage profile information
- ✏️ **Edit Profile** — Update name, phone number, and gender
- 🏠 **Address Management** — Add and manage delivery addresses
- 💳 **Checkout Flow** — Smooth single-item and cart-wide purchase flow
- 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop screens

---

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js](https://nextjs.org/) 16.2.9 (App Router) |
| **Frontend** | [React](https://react.dev/) 19.2.4 |
| **Backend** | [Firebase](https://firebase.google.com/) 12.15.0 (Auth + Firestore) |
| **Language** | JavaScript (ES6+) |
| **Styling** | CSS Modules |
| **Utilities** | UUID, dotenv |

---


---

## Check it live

1. **Open this link in browser**

```bash
https://e-commerce-swart-three-85.vercel.app
```
2. **Use this temporary email or create new account**

```bash
test@example.com
```
3. **Password**

```bash
123456
```
---

## 📸 Screenshots

<div align="center">

### 🔐 Authentication
<img src="readme photos/login.png" width="80%" alt="Authentication" />

### 🏠 Home Page
<img src="readme photos/home.png" width="80%" alt="Home Page" />

### 📦 Product Details
<img src="readme photos/producct page.png" width="80%" alt="Product Details" />

### 🛒 Shopping Cart
<img src="readme photos/cart.png" width="80%" alt="Shopping Cart" />

### ❤️ Wishlist
<img src="readme photos/wishlist.png" width="80%" alt="Wishlist" />

### 📋 Orders
<img src="readme photos/orders.png" width="80%" alt="Orders" />

### 👤 User Profile
<img src="readme photos/profile.png" width="80%" alt="User Profile" />

### 🛒 Buy single product
<img src="readme photos/buy product page.png" width="80%" alt="User Profile" />

### 🛒 Buy multiple products
<img src="readme photos/buy multiple products.png" width="80%" alt="User Profile" />

</div>

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Firebase](https://firebase.google.com/) project

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/ajay11110/web-developent/tree/main/projects/E-commerce_app/dev-mart.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up Firebase**

   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable **Authentication** (Email/Password and Google Sign-In)
   - Create a **Firestore Database** in test mode
   - Add your Firebase config to `app/firebase.js`

4. **Run the development server**

```bash
npm run dev
```

5. **Open in browser**

```
http://localhost:3000
```

---

## 📁 Project Structure

```
dev-mart/
├── app/
│   ├── (main)/              # Main app routes (protected)
│   │   ├── home/            # Home page
│   │   ├── [slug]/          # Product detail page
│   │   ├── cart/            # Shopping cart
│   │   ├── wishlist/        # Wishlist page
│   │   ├── orders/          # Order history
│   │   ├── profile/         # User profile
│   │   ├── editprofile/     # Edit profile
│   │   ├── addresses/       # Manage addresses
│   │   ├── buy/             # Checkout (single item)
│   │   ├── buyall/          # Checkout (cart)
│   │   └── lists/           # Product listing/admin flow
│   ├── auth/                # Authentication UI
│   ├── firebase.js          # Firebase configuration
│   ├── authprovider.jsx     # Auth context provider
│   ├── layout.jsx           # Root layout
│   └── page.jsx             # Landing/redirect entry
├── components/              # Reusable UI components
├── public/                  # Static assets
├── firebase.json            # Firebase hosting config
├── firestore.rules          # Firestore security rules
├── firestore.indexes.json   # Firestore indexes
└── package.json
```

---

## 🧩 Key Components

| Component | Description |
|-----------|-------------|
| `Itemcard` | Product card shown in the home page grid |
| `Cartcard` | Cart item card with removal actions |
| `Wishlistcard` | Wishlist item card with move-to-cart support |
| `Ordercard` | Order history item card |
| `Buycard` | Checkout summary card |
| `Addresscard` | Address display and management UI |
| `Navbar` | Top navigation with cart and wishlist state |
| `Loading` | Loading spinner component |
| `Popup` | Reusable popup modal |
| `Productpage` | Product detail layout |

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the project |

---

## 🔒 Firebase Security Rules

This project uses Firestore security rules to protect user data. Make sure to update `firestore.rules` before deploying to production.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### Made with ❤️ by [Ajay Yadav](https://github.com/ajay11110)

</div>

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
