# JP Rent vs Buy Calculator

A minimalist static website to help you decide whether to rent or buy a house in Japan.

## Tech Stack
- **Backend:** Deno (Oak framework)
- **Frontend:** React + TypeScript (Vite)

## Project Structure
```
/backend   # Deno Oak backend (serves static files, optional API)
/frontend  # React app (Vite)
```

## Setup

### 1. Frontend (React)
```
cd frontend
npm install
npm run dev
```

### 2. Backend (Deno)
```
cd backend
deno run --allow-net --allow-read server.ts
```

### 3. Build for Production
```
cd frontend
npm run build
# Serve with backend
cd ../backend
deno run --allow-net --allow-read server.ts
```

---

## TODO
- [ ] Implement rent vs buy calculator UI
- [ ] Add calculation logic
- [ ] Connect backend (if needed)
- [ ] Polish UI/UX 