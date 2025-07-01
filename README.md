# JP Rent vs Buy Calculator

A minimalist static website to help you decide whether to rent or buy a house in Japan.

## Tech Stack
- **Frontend:** React + TypeScript (Vite)

## Project Structure
```
/frontend  # React app (Vite)
/scripts   # Utility scripts (e.g., Excel extraction)
```

## Setup

### 1. Install dependencies
```
cd frontend
npm install
```

### 2. Launch the website (from project root)

You can run the following command from the project root to start the frontend dev server:

```
npm run start-frontend
```

Or, from the frontend directory:
```
cd frontend
npm run dev
```

### 3. Build for Production
```
cd frontend
npm run build
# Deploy the contents of frontend/dist to your static host (Netlify, Vercel, GitHub Pages, etc.)
```

---

## Utility Scripts
- See `/scripts/extract_excel_rows.py` for Excel field extraction (requires Python and openpyxl).

## TODO
- [ ] Implement rent vs buy calculator logic
- [ ] Add calculation breakdown and results
- [ ] Polish UI/UX and deploy as static site 