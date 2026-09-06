# 🚀 Seth's Portfolio — Deployment Guide

## Quick Start

This is a **Light & Clean** portfolio website with dark/light theme toggle.

## Files Included

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio page |
| `styles.css` | Complete styling with theme variables |
| `script.js` | Theme toggle, animations, interactions |
| `README.md` | This file |

## Theme Toggle Feature

- **Default:** Dark mode
- **Toggle button:** Fixed in top-right corner (sun/moon icon)
- **Memory:** Saves preference to localStorage
- **Smooth transition:** All colors animate between themes

## GitHub Pages Deployment

### Step 1: Create Repository
1. Go to github.com → New repository
2. Name: `yourusername.github.io`
3. Set to **Public**
4. Click **Create repository**

### Step 2: Clone & Deploy
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
cd YOUR_USERNAME.github.io

# Copy all files from this folder
git add .
git commit -m "Initial portfolio"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** → Folder: **/(root)**
4. Save

Visit: `https://yourusername.github.io`

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --accent-primary: #ff6b35;  /* Orange */
    --accent-secondary: #00d4aa; /* Teal */
    --accent-tertiary: #7c3aed;  /* Purple */
}
```

### Content
All content is in `index.html`. Look for:
- About section text
- Experience timeline items
- Project cards
- Contact information

## Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile: iOS Safari, Chrome Android
