# 🚀 AI Chat UI

A modern ChatGPT-inspired frontend built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed with a sleek AI-native experience inspired by ChatGPT, Claude, and Perplexity.

---

## ✨ Features

- 💬 ChatGPT-style interface
- 🌙 Modern dark theme
- 📱 Fully responsive layout
- 📂 Sidebar conversation history
- 🤖 Fake AI responses with local state
- ✍️ Auto-growing textarea
- 📜 Markdown rendering
- 🧠 Syntax highlighted code blocks
- 📋 Copy code button
- ⚡ Typing indicators
- 🎨 Smooth animations & transitions
- 🔥 Glassmorphism UI
- 👤 Authentication modal flow
- 📌 Sticky chat input
- 🔄 Conversation switching
- ⬇️ Auto-scroll to latest messages
- 🧱 Loading skeletons
- 🧩 Clean component architecture

---

# 🛠 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React
- React Markdown
- React Syntax Highlighter

---

# 📁 Folder Structure

```bash
app/
├── chat/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── auth/
│   ├── auth-modal.tsx
│   └── user-menu.tsx
│
├── chat/
│   ├── chat-layout.tsx
│   ├── chat-header.tsx
│   ├── chat-input.tsx
│   ├── message-list.tsx
│   ├── message-bubble.tsx
│   ├── code-block.tsx
│   ├── typing-indicator.tsx
│   ├── empty-state.tsx
│   └── loading-skeleton.tsx
│
├── sidebar/
│   ├── sidebar.tsx
│   ├── sidebar-item.tsx
│   └── mobile-sidebar.tsx
│
└── shared/
    └── theme-toggle.tsx

hooks/
├── use-auto-scroll.ts
└── use-mobile.ts

types/
└── chat.ts

utils/
├── format-date.ts
└── generate-id.ts
```

---

# ⚡ Getting Started

## Clone the repository

```bash
git clone https://github.com/asadullah009/gpt-2.0.git
```

## Navigate into the project

```bash
cd ai-chat-ui
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

---

# 📦 Install Packages

```bash
npm install next react react-dom typescript @types/react @types/node tailwindcss @tailwindcss/postcss react-markdown remark-gfm react-syntax-highlighter lucide-react
```

---

# 🎨 Tailwind CSS v4

Inside `app/globals.css`:

```css
@import "tailwindcss";
```

---

# 🔐 Authentication Flow

Includes a frontend-only authentication system:

- Sign in modal
- Sign up modal
- Local user state
- User profile section
- Logout functionality

No backend required.

---

# 📱 Responsive Design

Optimized for:

- Desktop
- Tablets
- Mobile devices

Includes:

- Mobile sidebar drawer
- Responsive spacing
- Touch-friendly interactions

---

# 🧠 UI Design

Inspired by:

- ChatGPT
- Claude
- Perplexity

Design focuses on:

- clean typography
- subtle borders
- glassmorphism
- smooth animations
- modern AI aesthetics

---

# ❌ No Backend

This project is frontend-only.

No:

- API routes
- Database
- Authentication providers
- shadcn/ui
- clsx
- tailwind-merge
- cn() utility

Everything runs with local React state.

---

# 📄 License

MIT License

---

# 👨‍💻 Author

Built with ❤️ using Next.js 16 + React 19 + Tailwind CSS v4.