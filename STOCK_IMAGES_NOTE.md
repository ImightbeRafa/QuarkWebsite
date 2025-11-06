# Stock Images Currently in Use

The B2B Solutions section is currently using stock images from Unsplash. These are free to use and will work perfectly until you're ready to replace them with your own photos.

## Current Stock Images

### Corporate Gifts
- **Current URL**: `https://images.unsplash.com/photo-1513885535751-8b9238bd345a`
- **Shows**: Business gifts/branded items
- **Replace with**: Your actual corporate gift engravings

### Retail Products  
- **Current URL**: `https://images.unsplash.com/photo-1441986300917-64674bd600d8`
- **Shows**: Retail store shelves
- **Replace with**: Your engraved retail merchandise

### Event Merchandise
- **Current URL**: `https://images.unsplash.com/photo-1540575467063-178a50c2df87`
- **Shows**: Conference/event setting
- **Replace with**: Your event merchandise examples

## How to Replace with Your Own Images

When you have your own photos ready:

1. **Add images to**: `public/images/b2b/`
   - `corporate-gifts.jpg`
   - `retail-products.jpg`
   - `event-merchandise.jpg`

2. **Update** `src/components/B2BSolutions.tsx`:

```tsx
const useCases = [
  {
    title: "Corporate Gifts",
    description: "Personalized items for employees, clients, and partners",
    imageUrl: "/images/b2b/corporate-gifts.jpg",  // Change this line
  },
  {
    title: "Retail Products",
    description: "Custom merchandise for your store or online business",
    imageUrl: "/images/b2b/retail-products.jpg",  // Change this line
  },
  {
    title: "Event Merchandise",
    description: "Branded items for conferences, trade shows, and events",
    imageUrl: "/images/b2b/event-merchandise.jpg",  // Change this line
  },
];
```

## Stock Images Work Fine

✅ **These Unsplash images are completely free to use**
✅ **They load fast from Unsplash's CDN**
✅ **Professional quality**
✅ **No attribution required**

You can leave them as-is if you prefer, or replace them when you have your own product photos ready!

## Photo Tips

When taking your own B2B photos:
- **Corporate Gifts**: Show engraved items in professional gift boxes or office settings
- **Retail Products**: Display multiple items together, well-lit retail presentation
- **Event Merchandise**: Show branded items at events, trade show booths, or conferences
- **Size**: 1200x900px (4:3 ratio) works best
- **Format**: JPG or WebP
