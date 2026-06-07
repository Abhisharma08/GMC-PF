# Paradise Furniture: GMC-Optimized Lead Generation Engine

![Paradise Furniture](https://res.cloudinary.com/dfb0umklg/images/c_scale,w_170,h_42,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74.png?_i=AA)

A high-performance Next.js application tailored for luxury furniture sales. This application is uniquely architected to serve as a **Lead Generation Funnel** while structurally mimicking a traditional **E-Commerce Checkout Flow**. 

This dual-nature approach ensures strict technical compliance with Google Merchant Center (GMC) policies—which look for "Buy Now" capabilities and full offline payment structures—while seamlessly routing actual customer data straight to your CRM/Google Sheets for manual fulfillment.

## 🌟 Key Features

- **Google Merchant Center (GMC) Compliance**:
  - Full Server-Side Rendering (SSR) for instant crawler hydration.
  - Injected `Product` JSON-LD Structured Data across product pages.
  - Mandatory Compliance Pages actively routed globally (`/terms-of-service`, `/privacy-policy`, `/return-policy`, `/shipping-policy`).
- **Simulated Checkout Flow**: "View & Quote" flows have been refactored into "Secure Checkout", capturing standard shipping metrics and Quantity via a standard eCommerce visual interface without requiring a live Stripe/Razorpay payment gateway.
- **Analytics Ready**: Dedicated `/thank-you` page for crystal clear Google Analytics / Meta Pixel conversion tracking. 
- **Google Sheets API Integration**: Server-secured, seamless dumping of all order inquiries directly into a private Google Workspace Spreadsheet.
- **Premium Monochromatic Theme**: Overhauled UI featuring a highly professional Red, Black, and Light Grey palette.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend Integrations**: `googleapis` (Google Cloud Service Accounts)
- **Typography**: Optimized loading via `next/font` (Geist & Geist Mono)

---

## 📁 Project Architecture

```text
├── app/
│   ├── api/enquiry/route.ts       # Serverless function handling Google Sheets API
│   ├── product/[id]/page.tsx      # Dynamic SSR Product Landing Pages
│   ├── privacy-policy/page.tsx    # GMC Compliance
│   ├── return-policy/page.tsx     # GMC Compliance
│   ├── shipping-policy/page.tsx   # GMC Compliance
│   ├── terms-of-service/page.tsx  # GMC Compliance
│   ├── checkout/[id]/page.tsx     # Product-specific checkout pages
│   ├── thank-you/page.tsx         # Conversion Tracking Goal Page
│   ├── layout.tsx                 # Global Layout (injects Header/Footer)
│   └── page.tsx                   # Main Landing Page / Catalog
├── components/
│   ├── Header.tsx                 # Global Navigation
│   ├── Footer.tsx                 # Global Footer w/ Legal Links
│   ├── LeadForm.tsx               # The Simulated Checkout Form Engine
│   └── ProductGallery.tsx         # Interactive Client-side Image Gallery
├── lib/
│   └── data.ts                    # Local Data Store / Product Schemas
└── .env.local                     # Hidden Keys (Google Credentials)
```

---

## 🚀 Getting Started Locally

### 1. Installation

Clone the repository and install the required dependencies:

```bash
git clone https://github.com/Abhisharma08/GMC-PF.git
cd GMC-PF
npm install
```

### 2. Configure Environment Variables

Create a file named `.env.local` in the root directory. You must supply your Google Service Account credentials to allow the web app to edit your Google Sheet:

```env
GOOGLE_CLIENT_EMAIL="your-service-account@your-project-id.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nVery\nLong\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID="your_google_sheet_id_here"
```

> **Important Setup Step**: You must go to your target Google Sheet, click the "Share" button, and add the `GOOGLE_CLIENT_EMAIL` as an **Editor** to the spreadsheet.

### 3. Setup Your Google Sheet Columns

The Google Sheets integration currently expects your target spreadsheet to have the following columns in exactly this order:
1. `Timestamp`
2. `Name`
3. `Email`
4. `Phone`
5. `City`
6. `Delivery Address`
7. `PIN Code`
8. `Product`
9. `Quantity`
10. `Payment Method`
11. `Order Source`

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the outcome.

---

## ☁️ Deployment

The application is fully optimized for **Vercel** deployment. 
1. Connect your GitHub repository to Vercel.
2. In the deployment settings, paste your **Environment Variables** exactly as they appear in your `.env.local` file. 
3. *Note on Private Keys:* Make sure your `GOOGLE_PRIVATE_KEY` string accurately preserves the `\n` linebreaks if entered strictly as a string, or is pasted accurately if using the multi-line input on Vercel.

---

## 📄 License & Ownership

Created exclusively for **Paradise Furniture**. All rights reserved.
