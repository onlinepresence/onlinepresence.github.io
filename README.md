# 🚀 GitHub Pages Deployment Guide for Seth's Portfolio

## Step 1: Create Your GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Fill in the details:
   - **Repository name**: `username.github.io` (replace with YOUR GitHub username)
     - Example: If your username is `sethboye`, the repo name should be `sethboye.github.io`
   - **Description**: `Personal Portfolio Website`
   - **Public** ✓ (must be public for GitHub Pages)
   - **Initialize with**: Leave empty (we'll push our files)
4. Click **Create repository**

## Step 2: Clone the Repository

Open Terminal (Mac/Linux) or Command Prompt/PowerShell (Windows):

```bash
# Navigate to where you want to store the project
cd ~/Documents  # or any folder you prefer

# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Enter the directory
cd YOUR_USERNAME.github.io
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Copy Portfolio Files

Copy these files into the cloned repository folder:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`

**Using Command Line:**
```bash
# From the folder containing the portfolio files
cp index.html styles.css script.js README.md ~/Documents/YOUR_USERNAME.github.io/
```

Or simply drag and drop the files into the folder in File Explorer.

## Step 4: Commit and Push

```bash
# Check status
git status

# Add all files
git add .

# Commit with a message
git commit -m "Initial portfolio deployment"

# Push to GitHub
git push origin main
```

If you get an error about branch names, use `master` instead of `main`:
```bash
git push origin master
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select branch: **main** (or **master**) and folder: **/(root)**
6. Click **Save**

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io
```

## Optional: Use a Custom Domain

If you have a custom domain (e.g., `www.sethboye.dev`):

1. Add a **CNAME** file in your repository with your domain name
2. Configure DNS settings with your domain provider
3. GitHub Pages will automatically detect it

---

## Portfolio Features

✅ Bold & distinctive dark theme  
✅ Responsive design (mobile-friendly)  
✅ Smooth animations & interactions  
✅ Contact form with Formspree integration  
✅ Sections: About, Skills, Experience, Projects, Contact  
✅ GitHub integration  

---

## Files Included

| File | Description |
|------|-------------|
| `index.html` | Main portfolio page |
| `styles.css` | Bold dark theme styling |
| `script.js` | Interactions & animations |
| `README.md` | This file |

---

Need help? Open an issue on GitHub or contact me directly!