<div align="center">

# 🛒 Dev-Mart

> A modern, full-stack e-commerce web application built with Next.js, Firebase, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.15.0-FFCA28?logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## ✨ Features

- 🔐 **Authentication** — Secure user login & signup with Firebase Auth (Email/Password & Google Sign-In)
- 🏠 **Home Page** — Browse all available products with a clean, responsive grid layout
- 🔍 **Product Details** — Dedicated product pages with full descriptions, specifications, and related items
- 🛒 **Shopping Cart** — Add, remove, and manage items in your cart before checkout
- ❤️ **Wishlist** — Save your favorite products for later
- 📦 **Orders** — View your complete order history
- 👤 **User Profile** — Manage your profile information and settings
- ✏️ **Edit Profile** — Update your name, mobile number, and gender
- 🏠 **Address Management** — Add, edit, and delete multiple delivery addresses
- 💳 **Checkout Flow** — Smooth buy-now and buy-all cart checkout experience
- 📱 **Responsive Design** — Fully optimized for mobile, tablet, and desktop

---

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Frontend** | [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/) |
| **Backend** | [Firebase](https://firebase.google.com/) (Auth, Firestore, Storage) |
| **Language** | JavaScript (ES6+) |
| **Icons** | Lucide React |

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
<img src="readme photos/Screenshot (912).png" width="80%" alt="Home Page" />

### 📦 Product Details
<img src="readme photos/Screenshot (913).png" width="80%" alt="Product Details" />

### 🛒 Shopping Cart
<img src="readme photos/Screenshot (914).png" width="80%" alt="Shopping Cart" />

### ❤️ Wishlist
<img src="readme photos/Screenshot (915).png" width="80%" alt="Wishlist" />

### 📋 Orders
<img src="readme photos/Screenshot (916).png" width="80%" alt="Orders" />

### 👤 User Profile
<img src="readme photos/Screenshot (917).png" width="80%" alt="User Profile" />

### ✏️ Edit Profile
<img src="readme photos/Screenshot (918).png" width="80%" alt="Edit Profile" />

### 🏠 Address Management
<img src="readme photos/Screenshot (919).png" width="80%" alt="Address Management" />

### 💳 Checkout
<img src="readme photos/Screenshot (920).png" width="80%" alt="Checkout" />

### 🔐 Authentication
<img src="readme photos/Screenshot (921).png" width="80%" alt="Authentication" />

### 📱 Mobile Responsive
<img src="readme photos/Screenshot (922).png" width="40%" alt="Mobile View" />
<img src="readme photos/Screenshot (923).png" width="40%" alt="Mobile View 2" />

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
git clone https://github.com/ajay11110/web-developent.git
cd dev-mart
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
│   │   └── lists/           # Admin: Add products
│   ├── auth/                # Authentication page
│   ├── firebase.js          # Firebase configuration
│   ├── authprovider.jsx     # Auth context provider
│   ├── layout.jsx           # Root layout
│   └── page.jsx             # Landing page (redirects)
├── components/              # Reusable components
├── public/                  # Static assets
├── firebase.json            # Firebase config
├── firestore.rules          # Firestore security rules
├── firestore.indexes.json   # Firestore indexes
└── package.json
```

---

## 🧩 Key Components

| Component | Description |
|-----------|-------------|
| `Itemcard` | Product card displayed in grids |
| `Cartcard` | Cart item with quantity & remove |
| `Wishlistcard` | Wishlist item with move-to-cart |
| `Ordercard` | Order history item card |
| `Buycard` | Checkout product summary |
| `Addresscard` | Address display & management |
| `Navbar` | Top navigation with cart/wishlist counts |
| `Loading` | Loading spinner component |
| `Signin` | Authentication form |
| `Productpage` | Product detail layout |

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` Start production server |
| `npm run lint` | Run ESLint |

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
