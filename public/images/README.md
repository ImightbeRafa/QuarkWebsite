# Images Directory

Place your images here:

## Current Structure

```
images/
├── logo.png                     # ✅ Company logo (active)
├── hero/
│   └── hero-image.jpg          # ✅ Main hero section image (active)
├── products/
│   ├── wood-engraving.jpg      # ✅ Wood product (active)
│   ├── steel-engraving.jpg     # ✅ Steel product (active)
│   ├── tumblers.jpg            # ✅ Tumbler product (active)
│   └── leather.jpg             # ✅ Leather product (active)
└── partners/
    ├── 1.png                   # ✅ Partner logos (active)
    ├── 2.png                   # ✅
    ├── 3.png                   # ✅
    ├── 4.jpg                   # ✅
    ├── 5.png                   # ✅
    └── 6.jpg                   # ✅

```

All images are now being used on the website!

## Image Optimization Tips

- Use WebP format when possible for better compression
- Recommended sizes:
  - Hero image: 1920x1080px
  - Product images: 800x600px
  - Partner logos: 400x400px (transparent PNG)
- Compress images before uploading (use tools like TinyPNG)

## Usage in Components

```tsx
// For static images
<img src="/images/logo.png" alt="Quark Costa Rica" />

// Or with Next.js Image (better performance, but requires server mode)
import Image from 'next/image'
<Image src="/images/logo.png" width={200} height={100} alt="Quark Costa Rica" />
```
