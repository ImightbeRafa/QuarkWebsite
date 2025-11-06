# Images Directory

Place your images here:

## Suggested Structure

```
images/
├── logo.png or logo.svg          # Company logo
├── hero/
│   └── hero-image.jpg           # Main hero section image
├── products/
│   ├── wood-engraving.jpg       # Wood product examples
│   ├── steel-engraving.jpg      # Steel product examples
│   ├── tumblers.jpg             # Tumbler examples
│   └── stone-glass.jpg          # Stone/glass examples
├── gallery/
│   └── *.jpg                    # Gallery images
└── partners/
    └── *.png                    # Partner logos

```

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
