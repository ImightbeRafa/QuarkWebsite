# Quark Costa Rica - Laser Engraving Website

A modern, elegant showcase website for Quark Costa Rica's laser engraving services. Built with Next.js, TypeScript, and Tailwind CSS for optimal performance and aesthetics.

## 🌟 Features

- **Responsive Design**: Beautiful on all devices from mobile to desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Static Export**: Optimized for fast loading and SEO
- **Product Catalog**: Showcase your laser engraving services
- **B2B Solutions**: Dedicated section for business partnerships
- **Partners Section**: Display your collaborators and partners
- **Easy to Deploy**: Ready for Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd d:/code/quark
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🎨 Customization

### Update Company Information

Edit the following files to update your company information:

- **Navigation & Footer**: `src/components/Navigation.tsx` and `src/components/Footer.tsx`
- **Hero Section**: `src/components/Hero.tsx`
- **Products**: `src/components/Products.tsx`
- **Services**: `src/components/Services.tsx`
- **B2B Solutions**: `src/components/B2BSolutions.tsx`
- **Partners**: `src/components/Partners.tsx`

### Add Your Images

Replace placeholder images in the components with your actual product photos:

1. Create a `public` folder in the project root
2. Add your images to the `public` folder
3. Update the image references in the components

Example:
```tsx
<img src="/your-image.jpg" alt="Description" />
```

### Update Colors

The color scheme is defined in `tailwind.config.ts`. The current palette uses light blue tones. To adjust:

```typescript
colors: {
  primary: {
    // Update these values
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... etc
  },
}
```

### Update Metadata

Edit `src/app/layout.tsx` to update SEO metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  keywords: "your, keywords",
};
```

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` folder.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Custom Domain Setup

After deployment:

1. Go to your project settings in Vercel
2. Click on "Domains"
3. Add `quarkcostarica.com`
4. Follow the instructions to update your DNS settings

## 📱 Sections Overview

### Hero Section
- Eye-catching introduction with call-to-action buttons
- Gradient background with modern design

### Products Catalog
- Grid layout showcasing different materials (wood, steel, tumblers, stone)
- Interactive hover effects

### Services
- Highlights your value propositions
- Step-by-step process overview

### B2B Solutions
- Dedicated section for business clients
- Features bulk orders, dedicated support, custom branding

### Partners
- Grid display of partner companies
- Call-to-action for new partnerships

### Footer
- Contact information
- Quick links
- Social media links (Instagram)

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Next Steps

1. **Add Real Content**: Replace placeholders with your actual images and text
2. **Set Up Analytics**: Add Google Analytics or similar
3. **Add Contact Form**: Integrate a contact form service (e.g., Formspree, EmailJS)
4. **Optimize Images**: Use Next.js Image component for better performance
5. **Add More Pages**: Consider adding a blog, gallery, or detailed service pages

## 📞 Contact Information

The website is configured with:
- **WhatsApp**: +506 7174 6307 (wa.me/50671746307)
- **Instagram**: [@quark.cr](https://www.instagram.com/quark.cr/)
- **Email**: quarkdesign.cr@gmail.com

## 📄 License

Copyright © 2024 Quark Costa Rica. All rights reserved.
