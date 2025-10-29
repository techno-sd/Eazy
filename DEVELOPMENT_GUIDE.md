# Development Guide - PISA RTL

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- pnpm (recommended), npm, or yarn

### Installation
```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
pisa-rtl/
├── src/
│   ├── app/
│   │   └── [locale]/          # Internationalized routes
│   │       ├── layout.tsx     # Root layout with i18n
│   │       ├── page.tsx       # Home page
│   │       └── ...            # Other pages
│   ├── components/
│   │   ├── Common/            # Shared components
│   │   ├── HomeOne/           # Home page 1 components
│   │   ├── Layouts/           # Layout components
│   │   └── ...
│   └── i18n/
│       ├── config.ts          # i18n configuration
│       └── request.ts         # i18n request handler
├── messages/
│   ├── en.json                # English translations
│   └── ar.json                # Arabic translations
├── public/                    # Static assets
├── styles/                    # Global styles
│   ├── style.css             # Main styles
│   ├── accessibility.css     # A11y enhancements
│   └── rtl.css               # RTL-specific styles
└── next.config.mjs           # Next.js configuration
```

---

## 🌐 Internationalization

### Adding New Translation Keys

1. **Add to message files** (`messages/en.json` and `messages/ar.json`):
```json
{
  "namespace": {
    "key": "Translation value"
  }
}
```

2. **Use in components**:
```tsx
import { useTranslations } from 'next-intl';

const MyComponent = () => {
  const t = useTranslations('namespace');
  return <h1>{t('key')}</h1>;
};
```

### Locale-aware Links
```tsx
import { useLocale } from 'next-intl';
import Link from 'next/link';

const MyComponent = () => {
  const locale = useLocale();
  return <Link href={`/${locale}/about`}>About</Link>;
};
```

### Available Locales
- `en` - English (default in messages, but UI defaults to Arabic)
- `ar` - Arabic (RTL)

---

## 🎨 Styling Guidelines

### Using CSS
- Global styles in `styles/style.css`
- Accessibility styles in `styles/accessibility.css`
- RTL-specific styles in `styles/rtl.css`

### Class Naming
- Use Bootstrap classes where applicable
- Use semantic class names
- Prefer specific classes over global selectors

### Responsive Design
Bootstrap breakpoints:
- `xs`: < 576px
- `sm`: ≥ 576px
- `md`: ≥ 768px
- `lg`: ≥ 992px
- `xl`: ≥ 1200px

---

## ♿ Accessibility Best Practices

### Images
```tsx
// ❌ Bad
<Image src="/img/logo.png" alt="Image" />

// ✅ Good
<Image src="/img/logo.png" alt="Pisa Cyber Security company logo" />
```

### Buttons
```tsx
// ❌ Bad
<button onClick={handler}>Click</button>

// ✅ Good
<button
  onClick={handler}
  aria-label="Close navigation menu"
>
  <i className="bx bx-x" aria-hidden="true" />
</button>
```

### Links
```tsx
// ✅ Descriptive link text
<Link href="/services">View our security services</Link>

// ❌ Avoid
<Link href="/services">Click here</Link>
```

### Forms
```tsx
// ✅ Good
<label htmlFor="email">Email Address</label>
<input
  id="email"
  type="email"
  required
  aria-required="true"
  aria-invalid={errors.email ? "true" : "false"}
/>
```

---

## 🧪 Code Quality

### Before Committing
```bash
# Run all checks
pnpm validate

# Or run individually
pnpm type-check   # TypeScript
pnpm lint        # ESLint
pnpm format:check # Prettier
```

### Auto-fix Issues
```bash
pnpm lint:fix     # Fix linting issues
pnpm format       # Format all files
```

### ESLint Rules
- No `console.log` (use `console.error` or `console.warn`)
- Prefer `const` over `let`
- No `var` keyword
- Must use Next.js `<Image>` component

---

## 🔒 Security

### Environment Variables
- Never commit `.env.local`
- Use `.env.example` as template
- Prefix public variables with `NEXT_PUBLIC_`

### Security Headers
Automatically applied (see `next.config.mjs`):
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options
- X-Content-Type-Options
- CSP headers

---

## 📦 Component Development

### Creating a New Component

1. **Create the file**:
```tsx
// src/components/MySection/MyComponent.tsx
"use client";

import React from "react";
import { useTranslations } from 'next-intl';

interface MyComponentProps {
  title?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  const t = useTranslations('namespace');

  return (
    <section className="my-component">
      <h2>{title || t('defaultTitle')}</h2>
    </section>
  );
};

export default MyComponent;
```

2. **Add translations**:
```json
// messages/en.json
{
  "namespace": {
    "defaultTitle": "Default Title"
  }
}
```

3. **Export from index** (if using barrel exports):
```tsx
// src/components/MySection/index.ts
export { default as MyComponent } from './MyComponent';
```

---

## 🎯 Performance Tips

### Images
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/img/photo.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={isAboveFold} // For LCP images
  loading={isAboveFold ? undefined : "lazy"}
/>
```

### Dynamic Imports
```tsx
// For heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  { loading: () => <p>Loading...</p> }
);
```

### Font Loading
- Fonts are automatically optimized
- Variables defined in `layout.tsx`
- Use CSS variables in styles

---

## 🐛 Debugging

### Common Issues

**Translation Not Showing**:
1. Check if key exists in message files
2. Verify namespace is correct
3. Check for typos in translation keys

**Images Not Loading**:
1. Ensure image exists in `/public`
2. Check file path (case-sensitive)
3. Verify Image component props

**Build Errors**:
1. Run `pnpm type-check` first
2. Check for unused imports
3. Verify all translations are defined

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm validate`
4. Commit with descriptive message
5. Create pull request

---

**Happy Coding! 🚀**
