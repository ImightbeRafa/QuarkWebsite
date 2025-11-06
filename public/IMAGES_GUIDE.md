# Image Organization Guide

This guide shows you where to place your images and how to reference them in the website.

## 📁 Recommended Folder Structure

```
public/
├── logo.svg or logo.png          # Your Quark Costa Rica logo
├── favicon.ico                   # Browser tab icon
├── images/
│   ├── hero/
│   │   └── main-hero.jpg        # Main showcase image for hero section
│   ├── products/
│   │   ├── wood-engraving.jpg   # Wood engraving examples
│   │   ├── steel-engraving.jpg  # Steel/metal examples
│   │   ├── tumblers.jpg         # Tumbler examples
│   │   └── leather.jpg          # Leather engraving examples
│   ├── gallery/
│   │   └── *.jpg                # Additional portfolio images
│   ├── partners/
│   │   ├── partner-1.png        # Partner logos (transparent PNG)
│   │   ├── partner-2.png
│   │   └── ...
│   └── b2b/
│       ├── corporate-gifts.jpg
│       ├── retail-products.jpg
│       └── event-merch.jpg
```

## 🖼️ Image Specifications

### Logo
- **Format**: SVG (preferred) or PNG with transparent background
- **Size**: 200x200px minimum
- **Colors**: Should work on white background
- **File**: `public/logo.svg` or `public/logo.png`

### Hero Section
- **Format**: JPG or WebP
- **Size**: 1920x1080px (1080p)
- **Focus**: Your best laser engraving work
- **File**: `public/images/hero/main-hero.jpg`

### Product Images
- **Format**: JPG or WebP
- **Size**: 800x600px (4:3 ratio)
- **Background**: Clean, well-lit photos
- **Files**: `public/images/products/`

### Partner Logos
- **Format**: PNG with transparent background
- **Size**: 400x400px (square)
- **Colors**: Should work on light gray background
- **Files**: `public/images/partners/`

### B2B Section Images
- **Format**: JPG or WebP
- **Size**: 1200x900px (4:3 ratio)
- **Files**: `public/images/b2b/`

## 🔄 How to Replace Placeholder Images

### 1. In Hero Component (`src/components/Hero.tsx`)

Replace line ~52-65:
```tsx
// FROM:
<div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl...">
  {/* Placeholder content */}
</div>

// TO:
<div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
  <img 
    src="/images/hero/main-hero.jpg" 
    alt="Quark Costa Rica Laser Engraving"
    className="w-full h-full object-cover"
  />
</div>
```

### 2. In Products Component (`src/components/Products.tsx`)

Replace the placeholder div (around line 73):
```tsx
// FROM:
<div className="mt-6 aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg...">
  <span className="text-gray-400 text-sm">Product Image</span>
</div>

// TO:
<div className="mt-6 aspect-video rounded-lg overflow-hidden">
  <img 
    src={`/images/products/${product.image}`}
    alt={product.title}
    className="w-full h-full object-cover"
  />
</div>
```

Then update the products array to include image filenames:
```tsx
const products = [
  {
    id: 1,
    title: "Wood Engraving",
    description: "Custom designs on various wood types...",
    icon: Box,
    color: "from-amber-400 to-amber-600",
    image: "wood-1.jpg", // ADD THIS
  },
  // ... etc
];
```

### 3. In Navigation (`src/components/Navigation.tsx`)

Replace logo placeholder (around line 37):
```tsx
// FROM:
<div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg...">
  <span className="text-white font-bold text-xl">Q</span>
</div>

// TO:
<img 
  src="/logo.png" 
  alt="Quark Costa Rica Logo" 
  className="w-10 h-10"
/>
```

### 4. In Partners Component (`src/components/Partners.tsx`)

Update the partners array with actual logos:
```tsx
const partners = [
  { id: 1, name: "Partner Name", logo: "partner-1.png" },
  { id: 2, name: "Another Partner", logo: "partner-2.png" },
  // ...
];
```

Then update the map to use the logo:
```tsx
<img 
  src={`/images/partners/${partner.logo}`}
  alt={partner.name}
  className="w-full h-full object-contain p-4"
/>
```

## 🎨 Image Optimization Tips

### Before Uploading:
1. **Resize** images to recommended dimensions
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com/) - For PNG/JPG compression
   - [Squoosh](https://squoosh.app/) - Google's image optimizer
   - [ImageOptim](https://imageoptim.com/) - Mac app
3. **Convert to WebP** for better compression (optional)
4. **Name files clearly**: `wood-engraving-1.jpg` not `IMG_1234.jpg`

### File Naming Convention:
- Use lowercase
- Use hyphens, not spaces
- Be descriptive: `laser-engraved-tumbler.jpg`
- Not: `IMG_1234.jpg` or `photo 1.jpg`

## 📱 Adding Favicon

1. Create a 32x32px or 64x64px icon
2. Save as `favicon.ico`
3. Place in `public/favicon.ico`
4. It will automatically be used by browsers

## ✅ Quick Checklist

- [ ] Create logo (SVG or PNG)
- [ ] Add hero image (1920x1080px)
- [ ] Add product images (4-8 photos)
- [ ] Add partner logos if available
- [ ] Compress all images
- [ ] Update component code to use images
- [ ] Test on localhost
- [ ] Verify images load correctly

## 🤔 Need Help?

If you're not sure how to edit the components to add images:
1. Place your images in the correct folders first
2. Ask for help updating the code
3. The structure is ready - just need to swap placeholders

## 📸 Where to Get Images

- Your own photos of laser engraved products
- Professional product photography
- Instagram posts: [@quark.cr](https://www.instagram.com/quark.cr/)

Remember: High quality, well-lit photos will make your website look much more professional!
