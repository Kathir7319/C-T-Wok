# C&T Wok - Modern React Website & Web Application

An elegant, eye-catching, multi-page, and mobile-responsive website for **C&T Wok** (Authentic Szechuan, Chinese & Thai Cuisine in Morrisville, NC).

Built with **React 18**, **Vite**, and **React Router 6**, configured for instant deployment to **Vercel** and ready for version control with **Git**.

---

## 🌟 Key Features

* **Custom Vector Brand Logo**: Bespoke SVG emblem and typography in burnished gold (`#D4AF37`) and Szechuan crimson (`#C52B1E`).
* **Balanced & Aligned Navigation Bar**:
  * Centered navigation links (`Home`, `Full Menu`, `Lunch Specials`, `About Us`, `Catering & Inquiries`, `Contact & Hours`).
  * Live Open/Closed indicator badge based on Morrisville, NC local time.
  * Prominent "Order Pickup / Call (919) 467-8860" primary CTA.
  * Off-canvas mobile navigation drawer with touch gestures.
* **Google Reviews Live Running Slides (Marquee)**:
  * Pulls real diner reviews directly from [Google Maps listing](https://share.google/GyPwGe88mPGrpRE6F).
  * Dual-track infinite scrolling marquee with pause-on-hover and step navigation (`←` / `→`).
  * Verified 4.4★ score based on 936+ Google reviews with direct link to read and write reviews.
* **Interactive Full Menu (`/menu`)**:
  * Real-time search filter and category tab filtering (*Szechuan, Chinese, Thai, Lunch, Appetizers*).
  * Includes customer cult-favorite **Famous Coffee Popcorn Chicken** alongside authentic Szechuan Boiled Fish and Thai specialties.
  * One-click **"+ Add to Call List"** on every dish.
* **Takeout "Call Order List" Tray**:
  * Persistent drawer and badge that calculates running subtotals.
  * **"📋 Copy Order"** button formatted to easily read orders over the phone to `(919) 467-8860`.
* **Interactive Catering Estimator (`/catering`)**:
  * Automatically calculates recommended Half Trays and Full Trays based on guest count (15 to 100+ guests).
  * One-click prefill into the catering inquiry form with validation and confirmation modal.
* **Live Operating Hours Tracker**:
  * Real-time hook (`useLiveHours`) tracking restaurant hours in US Eastern Time.
  * Highlights current day in footer hours table automatically.
* **Mobile-First 390px Safeguard**:
  * Fluid typography and container padding tuned to eliminate truncated text on mobile screens.
  * Thumb-friendly fixed bottom action bar for tap-to-call pickup orders.

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📦 How to Push to Git (GitHub / GitLab)

The repository has been initialized with `git` and `.gitignore` configured to exclude `node_modules` and build artifacts.

To push to your GitHub account:

1. Create a new empty repository on [GitHub](https://github.com/new) (e.g. `ct-wok-restaurant`).
2. Run the following commands in your project folder:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```

---

## ⚡ How to Deploy on Vercel

The project includes a ready-to-deploy [`vercel.json`](./vercel.json) configured with SPA route rewrites.

### Method 1: Connect via GitHub (Recommended)
1. Push your code to GitHub (see instructions above).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your `ct-wok-restaurant` repository.
5. Vercel automatically detects **Vite** as the framework with:
   * Build Command: `npm run build`
   * Output Directory: `dist`
6. Click **Deploy**. Your site will be live on a `*.vercel.app` URL with free automatic SSL and continuous deployment on every Git push!

### Method 2: Deploy using Vercel CLI
If you prefer deploying directly from the command line:
```bash
npx vercel
```
Follow the interactive prompts to log in and select your scope. To deploy straight to production:
```bash
npx vercel --prod
```

---

## 📁 Project Structure

```
.
├── index.html                  # Vite SPA HTML entry point
├── package.json                # Dependencies and build scripts
├── vite.config.js              # Vite React configuration
├── vercel.json                 # Vercel deployment & SPA rewrites configuration
├── .gitignore                  # Git ignore rules
├── public/                     # Static assets served at root
│   ├── favicon.svg             # Browser tab icon
│   ├── logo.svg                # Full horizontal vector logo
│   └── logo-emblem.svg         # Circular vector emblem
├── src/
│   ├── main.jsx                # React root bootstrap
│   ├── App.jsx                 # Routes & global layout wrapper
│   ├── components/             # Reusable UI components
│   │   ├── AnnouncementBar.jsx # Top announcement & hours banner
│   │   ├── Navbar.jsx          # Aligned header & mobile navigation drawer
│   │   ├── Footer.jsx          # Site footer with live hours highlight
│   │   ├── GoogleReviewsMarquee.jsx # Live running slides review carousel
│   │   ├── OrderTrayDrawer.jsx # Takeout phone order drawer widget
│   │   ├── MobileStickyBar.jsx # Mobile thumb-friendly action bar
│   │   └── Toast.jsx           # Animated feedback toast
│   ├── context/
│   │   └── OrderContext.jsx    # Takeout cart state management
│   ├── hooks/
│   │   └── useLiveHours.js     # US Eastern Time live hours hook
│   ├── data/
│   │   ├── menuData.js         # Menu dishes database with Coffee Chicken
│   │   └── reviewsData.js      # Google Reviews data & Google Maps URL
│   ├── pages/                  # Page routes
│   │   ├── HomePage.jsx        # Homepage with hero, categories & reviews
│   │   ├── MenuPage.jsx        # Interactive searchable menu
│   │   ├── LunchSpecialsPage.jsx # Weekday lunch combos
│   │   ├── AboutPage.jsx       # Our Story & Wok Hei heritage
│   │   ├── CateringPage.jsx    # Party tray estimator & inquiry form
│   │   └── ContactPage.jsx     # Contact, map embed, hours & FAQ
│   └── styles/
│       ├── style.css           # Global typography, tokens & reset
│       ├── components.css      # Component layouts & aligned navbar rules
│       └── pages.css           # Page hero & form styling
└── legacy-static/              # Archived standalone HTML files
```
