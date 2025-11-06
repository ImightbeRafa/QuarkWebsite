# CNC Laser Cutting Section

A new section has been added to showcase your precision metal cutting services.

## 📍 Location

The CNC Laser Cutting section is positioned:
- **After**: Products catalog
- **Before**: Services section
- **Section ID**: `#cnc-cutting`

## 🎨 Features

### 4 Feature Cards
1. **High Precision** - CNC-controlled cutting with ±0.1mm tolerances
2. **Fast Production** - Rapid turnaround times
3. **Custom Design** - CAD to finished parts
4. **Quality Assured** - Consistent automated processes

### 3 Application Showcases (with Stock Images)
1. **Industrial Parts**
   - Shows: Precision metal manufacturing
   - Stock Image: Unsplash photo of CNC machinery
   
2. **Custom Brackets & Mounts**
   - Shows: Metal fabrication
   - Stock Image: Unsplash photo of machinery
   
3. **Decorative Metal Work**
   - Shows: Intricate patterns
   - Stock Image: Unsplash photo of decorative metal

### Materials Section
Displays 4 materials with thickness capabilities:
- **Steel**: Up to 20mm thick
- **Aluminum**: Up to 15mm thick  
- **Stainless Steel**: Up to 12mm thick
- **Brass & Copper**: Up to 10mm thick

### Call to Action
- WhatsApp link with pre-filled message about CNC services
- "Request a Quote" button

## 🔗 Navigation

The section is linked in:
- ✅ Top navigation menu (CNC Cutting)
- ✅ Footer quick links
- ✅ Direct anchor link: `#cnc-cutting`

## 🖼️ Stock Images in Use

All 3 images are from Unsplash (free to use):

1. **Industrial Parts**: `https://images.unsplash.com/photo-1565008576549-57569a49371d`
2. **Custom Brackets**: `https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1`
3. **Decorative Work**: `https://images.unsplash.com/photo-1587293852726-70cdb56c2866`

## 📝 Replacing Stock Images

When you have your own CNC cut parts photos:

1. **Create folder**: `public/images/cnc/`

2. **Add images**:
   - `industrial-parts.jpg`
   - `brackets-mounts.jpg`
   - `decorative-metal.jpg`

3. **Update** `src/components/CNCLaserCutting.tsx`:

```tsx
const applications = [
  {
    title: "Industrial Parts",
    description: "Precision metal components for machinery and equipment",
    imageUrl: "/images/cnc/industrial-parts.jpg", // Change this
  },
  {
    title: "Custom Brackets & Mounts",
    description: "Tailored mounting solutions and structural components",
    imageUrl: "/images/cnc/brackets-mounts.jpg", // Change this
  },
  {
    title: "Decorative Metal Work",
    description: "Intricate patterns and designs for architectural elements",
    imageUrl: "/images/cnc/decorative-metal.jpg", // Change this
  },
];
```

## 🎯 Customization

Edit `src/components/CNCLaserCutting.tsx` to:
- Update material types and thickness capabilities
- Change feature descriptions
- Modify application showcases
- Update WhatsApp message text
- Add or remove features

## 📱 Mobile Responsive

The section is fully responsive:
- **Desktop**: 4 features in a row, 3 applications in a row
- **Tablet**: 2 features, 3 applications
- **Mobile**: Stacked single column layout

## 🎨 Design Details

- **Background**: Gradient from gray-50 to white
- **Icons**: Lucide React (Cpu, Zap, Settings, CheckCircle)
- **Hover Effects**: Cards lift on hover, images scale
- **Colors**: Primary blue theme matching site design
- **Spacing**: py-24 (consistent with other sections)
