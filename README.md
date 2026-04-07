# AI Native App

โปรเจกต์ Full-stack Web Application สร้างด้วย **Next.js 16** พร้อม TypeScript, Tailwind CSS v4 และ shadcn/ui — พัฒนาในหลักสูตร **Next.js 16: The AI-Native Developer Masterclass**

---

## Tech Stack

| เทคโนโลยี | เวอร์ชัน | หน้าที่ |
|-----------|---------|--------|
| [Next.js](https://nextjs.org) | 16.1.6 | Full-stack React Framework |
| [React](https://react.dev) | 19.2.3 | UI Library |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Type Safety |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com) | ^4 | Component Library |
| [Radix UI](https://www.radix-ui.com) | ^1.4.3 | Accessible Primitives |
| [Lucide React](https://lucide.dev) | ^0.577.0 | Icon Library |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Class Name Utilities |
| [Prisma ORM](https://www.prisma.io) | ^7.5.0 | Type-safe ORM + Migrations + pgvector |
| [Better Auth](https://www.better-auth.com) | ^1.5.5 | Authentication Library |
| [Nodemailer](https://nodemailer.com) | ^8.0.4 | Email (SMTP) |
| [qrcode](https://github.com/soldair/node-qrcode) | ^1.5.4 | QR Code สำหรับ 2FA |
| [OpenAI SDK](https://github.com/openai/openai-node) | ^6.33.0 | Embeddings + AI API |
| [pdf-parse](https://github.com/modesty/pdf-parse) | ^2.4.5 | อ่านไฟล์ PDF |
| [csv-parse](https://csv.js.org) | ^6.2.1 | อ่านไฟล์ CSV |

---

## Requirements

ก่อนเริ่มต้น ให้ตรวจสอบว่าติดตั้งเครื่องมือต่อไปนี้แล้ว:

- **Node.js** LTS version 20+
- **npm** (มากับ Node.js)
- **Git**
- **VS Code** (แนะนำ Extensions: ESLint, Prettier, Tailwind CSS IntelliSense)

ตรวจสอบเวอร์ชันด้วยคำสั่ง:

```bash
node --version
npm --version
git --version
```

---

## Getting Started

### 1. Clone โปรเจกต์

```bash
git clone <repository-url>
cd ai-native-app
```

### 2. ติดตั้ง Dependencies

```bash
pnpm install
```

### 3. ตั้งค่า Environment Variables

สร้างไฟล์ `.env` ที่ root ของโปรเจกต์:

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://neondb_owner:password@ep-xxx-pooler.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000" # Client-side
BETTER_AUTH_URL="http://localhost:3000"             # Server-side

# GitHub OAuth
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Google OAuth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# LINE Login
LINE_CLIENT_ID=""
LINE_CLIENT_SECRET=""

# Facebook Login
FACEBOOK_CLIENT_ID=""
FACEBOOK_CLIENT_SECRET=""

# Admin Seed
ADMIN_EMAIL="admin@ainative.com"

# Email (Gmail SMTP สำหรับ Email Verification & Reset Password)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
GMAIL_USER="your-gmail@gmail.com"
GMAIL_APP_PASSWORD="your-app-password"

# OpenAI (สำหรับ Embeddings + Vector Search + RAG)
OPENAI_API_KEY="your-openai-api-key"
OPENAI_EMBEDDING_MODEL="text-embedding-3-small"
OPENAI_CHAT_MODEL="gpt-4o-mini"
```

### 4. รัน Development Server

```bash
pnpm dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

```bash
pnpm dev      # รัน development server
pnpm build    # Build สำหรับ production
pnpm start    # รัน production server
pnpm lint     # ตรวจสอบ ESLint
```

## Prisma Commands

```bash
pnpx prisma generate          # Generate Prisma Client จาก schema
pnpx prisma migrate dev       # สร้าง migration + push ไปยัง Database
pnpx prisma migrate deploy    # Deploy migrations สำหรับ production
pnpx prisma db push           # Push schema โดยตรง (ไม่สร้าง migration file)
pnpx prisma studio            # เปิด Prisma Studio GUI
```

> **หมายเหตุ:** หากย้ายมาใช้ `pnpm` ให้แทน `npx` ด้วย `pnpx` และ `npm run` ด้วย `pnpm`

---

## Project Structure

```
ai-native-app/
├── app/
│   ├── layout.tsx                      ← Root Layout (html, body, fonts, globals.css)
│   ├── globals.css                     ← Design System (oklch, dark mode)
│   │
│   ├── (landing)/                      ← Route Group: Landing Page
│   │   ├── page.tsx                    ← Server Component + Metadata + ChatButton (floating)
│   │   ├── Navbar.tsx                  ← Client Component (dark mode toggle)
│   │   ├── Hero.tsx                    ← Hero section
│   │   ├── Features.tsx                ← Features cards
│   │   ├── About.tsx                   ← About section
│   │   ├── TechStack.tsx               ← Tech badges
│   │   ├── Team.tsx                    ← Team members
│   │   ├── Testimonial.tsx             ← Reviews
│   │   └── Footer.tsx                  ← Footer
│   │
│   ├── (auth)/auth/                    ← Route Group: Authentication
│   │   ├── layout.tsx                  ← Split-screen layout + auth redirect guard
│   │   ├── auth-branding.tsx           ← Animated branding
│   │   ├── signin/
│   │   │   ├── page.tsx                ← Sign In page
│   │   │   └── LoginForm.tsx           ← Sign In form (+ Social Login buttons)
│   │   ├── signup/
│   │   │   ├── page.tsx                ← Sign Up page
│   │   │   └── SignupForm.tsx          ← Sign Up form
│   │   ├── forgot-password/
│   │   │   ├── page.tsx                ← Forgot Password page
│   │   │   └── ForgotPasswordForm.tsx  ← Forgot Password form
│   │   ├── reset-password/
│   │   │   └── page.tsx                ← Reset Password page
│   │   ├── verify-email/
│   │   │   └── page.tsx                ← Email Verification page
│   │   └── verify-2fa/
│   │       └── page.tsx                ← 2FA Verification page
│   │
│   ├── (main)/                         ← Route Group: Authenticated Pages
│   │   ├── layout.tsx                  ← Shared layout + auth guard + Sidebar
│   │   ├── _components/
│   │   │   ├── header/
│   │   │   │   ├── header.tsx          ← Header component (dynamic title + UserMenu)
│   │   │   │   ├── UserMenu.tsx        ← User dropdown menu (dark mode, sign out)
│   │   │   │   └── index.ts            ← Re-exports
│   │   │   └── sidebar/
│   │   │       ├── sidebar.tsx         ← Sidebar component (collapsible)
│   │   │       ├── sidebar-data.ts     ← Navigation menu data (+ allowedRoles per section)
│   │   │       ├── nav-item.tsx        ← NavItem component (active state)
│   │   │       ├── nav-section.tsx     ← NavSection component (collapsible group)
│   │   │       └── index.ts            ← Re-exports
│   │   ├── dashboard/
│   │   │   ├── page.tsx                ← Dashboard page
│   │   │   ├── DashboardContent.tsx    ← Dashboard content component
│   │   │   └── SignOutButton.tsx       ← Sign Out button component
│   │   ├── admin/
│   │   │   ├── users/
│   │   │   │   ├── page.tsx            ← Admin: User Management page (Admin only)
│   │   │   │   └── UsersManagement.tsx ← User table + role/ban actions
│   │   │   └── knowledge/
│   │   │       ├── page.tsx            ← Admin: Knowledge Base page (Admin only)
│   │   │       └── KnowledgeBase.tsx   ← Document list + add/edit/delete + index actions
│   │   └── profile/
│   │       ├── page.tsx                ← Profile page
│   │       └── ProfileForm.tsx         ← Update profile form
│   │
│   ├── api/
│   │   ├── auth/[...all]/route.ts      ← Better Auth catch-all handler
│   │   ├── admin/change-role/route.ts  ← POST /api/admin/change-role (custom)
│   │   ├── hello/route.ts              ← GET /api/hello (ตัวอย่าง)
│   │   ├── search/route.ts             ← POST /api/search (Vector Search)
│   │   ├── chat/
│   │   │   ├── route.ts                ← POST /api/chat (RAG Chat + History)
│   │   │   ├── sessions/route.ts       ← GET, POST /api/chat/sessions
│   │   │   └── stream/route.ts         ← POST /api/chat/stream (SSE Streaming)
│   │   ├── knowledge/
│   │   │   ├── route.ts                ← GET, POST /api/knowledge
│   │   │   ├── upload/route.ts         ← POST /api/knowledge/upload (File Upload)
│   │   │   └── [id]/
│   │   │       ├── route.ts            ← GET, PUT, DELETE /api/knowledge/:id
│   │   │       └── index/route.ts      ← POST /api/knowledge/:id/index (Vectorize)
│   │   └── users/
│   │       ├── route.ts                ← GET, POST /api/users
│   │       └── [id]/route.ts           ← GET, DELETE /api/users/:id
│   │
│   └── generated/prisma/               ← Prisma Client (auto-generated)
│
├── components/
│   ├── chat/
│   │   ├── ChatButton.tsx               ← Floating Chat Button (toggle)
│   │   └── ChatWindow.tsx               ← Chat UI (messages + input + sources)
│   ├── knowledge/
│   │   └── FileUpload.tsx               ← File Upload component (PDF/CSV/TXT)
│   └── ui/                             ← shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
│
├── documents/
│   ├── shop_info.txt                   ← ข้อมูลร้านค้า (TXT)
│   ├── sample_product.csv              ← ข้อมูลสินค้า (CSV)
│   └── CustomerFAQ.pdf                 ← คำถามที่พบบ่อย (PDF)
│
├── lib/
│   ├── auth.ts                         ← Better Auth server config (admin + twoFactor plugins, SMTP email)
│   ├── auth-client.ts                  ← Better Auth client (signIn, signUp, signOut, useSession, adminClient, twoFactorClient)
│   ├── permissions.ts                  ← RBAC: Access Control definitions (admin/manager/user roles)
│   ├── prisma.ts                       ← Prisma Client singleton
│   ├── openai.ts                       ← OpenAI client + generateEmbedding()
│   ├── document-loader.ts              ← โหลดไฟล์ TXT / CSV / PDF
│   ├── text-splitter.ts                ← แบ่งข้อความเป็น chunks (overlap)
│   ├── vector-search.ts                ← Cosine Similarity search ด้วย pgvector
│   ├── rag-service.ts                  ← RAG pipeline: search + build context + call OpenAI
│   ├── context-builder.ts              ← สร้าง context string จาก search results (token limit)
│   ├── ingestion.ts                    ← Ingestion helper สำหรับ Knowledge Base API
│   ├── theme-store.ts                  ← Shared dark mode store (useSyncExternalStore)
│   └── utils.ts                        ← cn() utility
│
├── prisma/
│   ├── schema.prisma                   ← Database Schema (Better Auth Core + twoFactor + Document/pgvector)
│   ├── seed.ts                         ← Seed script: เปลี่ยน role ผู้ใช้เป็น admin
│   └── migrations/                     ← Migration history
│
├── scripts/
│   ├── ingest.ts                       ← นำเข้าเอกสารและสร้าง embeddings ลง DB
│   ├── test-embedding.ts               ← ทดสอบ generateEmbedding()
│   ├── test-loader.ts                  ← ทดสอบ document-loader
│   ├── test-splitter.ts                ← ทดสอบ text-splitter
│   ├── test-rag-service.ts             ← ทดสอบ RAG pipeline ทั้งระบบ
│   └── test-context-builder.ts         ← ทดสอบ context builder
│
├── .env                                ← Environment Variables
├── .env.example                        ← ตัวอย่าง Environment Variables
├── next.config.ts                      ← Next.js Config
├── prisma.config.ts                    ← Prisma Config
└── package.json
```

> **Route Groups** `(landing)`, `(auth)`, `(main)` จะไม่ปรากฏใน URL — ใช้สำหรับจัดกลุ่ม routes และแยก layouts เท่านั้น

---

## Key Concepts

### Server Components vs Client Components

ใน App Router ทุก component เป็น **Server Component** โดย default ใช้ `"use client"` เมื่อต้องการ:

- `useState`, `useEffect`, `useRef` (React Hooks)
- Event handlers (`onClick`, `onChange`)
- Browser-only APIs (`window`, `document`)

```tsx
// Server Component (default) — ไม่ต้องประกาศ
export default async function Page() {
  const data = await fetch("https://api.example.com/data")
  return <div>...</div>
}

// Client Component — ต้องประกาศ
"use client"
import { useState } from "react"
export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### shadcn/ui

shadcn/ui ไม่ใช่ library แบบดั้งเดิม — โค้ด component จะถูก **copy มาไว้ในโปรเจกต์โดยตรง** ทำให้แก้ไขได้เต็มที่

```bash
# เพิ่ม component ใหม่
npx shadcn@latest add <component-name>

# ตัวอย่าง
npx shadcn@latest add button card input label
```

### REST API — Route Handlers

Next.js App Router ใช้ **Route Handlers** สร้าง API ด้วยไฟล์ `route.ts` สนับสนุนทุก HTTP Method (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  // ...
  return NextResponse.json({ users })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  // ...
  return NextResponse.json({ user }, { status: 201 })
}
```

> **หมายเหตุ (Next.js 16):** Dynamic params เป็น `Promise` ต้องใช้ `await params` ก่อนเข้าถึงค่า:
> ```typescript
> export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
>   const { id } = await params
> }
> ```

### Better Auth

โปรเจกต์ใช้ **Better Auth** เป็น Authentication Library โดยมีสถาปัตยกรรมดังนี้:

| ไฟล์ | หน้าที่ |
|------|--------|
| `lib/auth.ts` | Server config — `betterAuth()` + `prismaAdapter` + `admin` plugin + Social Providers |
| `lib/auth-client.ts` | Client helper — `signIn`, `signUp`, `signOut`, `useSession`, `adminClient`, `twoFactorClient` |
| `lib/permissions.ts` | RBAC — `createAccessControl` + roles: `admin`, `manager`, `user` |
| `app/api/auth/[...all]/route.ts` | Catch-all route ส่งต่อทุก request ไปยัง Better Auth |

**Social Providers ที่รองรับ:** GitHub, Google, LINE, Facebook

**Account Linking** — เปิดใช้งาน `account.accountLinking` เพื่อให้ระบบเชื่อมบัญชีอัตโนมัติเมื่ออีเมลตรงกัน (ป้องกัน `account_not_linked` error)

**RBAC — Role-Based Access Control:**
| Role | สิทธิ์ |
|------|-------|
| `admin` | จัดการผู้ใช้ได้ทั้งหมด, เปลี่ยน role, ban/unban, เข้าถึงทุกเมนู |
| `manager` | Create, Read, Update (ไม่สามารถ Delete หรือจัดการผู้ใช้คนอื่นได้) |
| `user` | Create, Read เท่านั้น |

**2FA (Two-Factor Authentication):** ใช้ `twoFactor` plugin (สเกน TOTP) พร้อม QR Code ผ่าน `/auth/verify-2fa`

**Email Features ผ่าน Nodemailer + Gmail SMTP:**
- Email Verification — ยืนยันอีเมลหลังสมัคร
- Password Reset — ส่ง email รีเซ็ตรหัสผ่าน

**Admin Seed Script:**
```bash
# สมัครสมาชิกปกติ แล้ว set ADMIN_EMAIL ใน .env จากนั้น run:
pnpx tsx --env-file=.env prisma/seed.ts
```

**ตรวจสอบ Session ใน Server Component:**
```typescript
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

const session = await auth.api.getSession({ headers: await headers() })
```

**ตรวจสอบ Session ใน Client Component:**
```typescript
"use client"
import { useSession } from "@/lib/auth-client"

const { data: session, isPending } = useSession()
```

**OAuth Callback URLs (สำหรับ Development):**
```
http://localhost:3000/api/auth/callback/github
http://localhost:3000/api/auth/callback/google
http://localhost:3000/api/auth/callback/line
http://localhost:3000/api/auth/callback/facebook
```

### AI — Embeddings & Vector Search

โปรเจกต์ใช้ **OpenAI Embeddings** + **pgvector** สำหรับ Semantic Search ผ่าน pipeline ดังนี้:

```
เอกสาร (TXT/CSV/PDF)
    → document-loader.ts   (อ่านไฟล์)
    → text-splitter.ts     (แบ่งเป็น chunks)
    → openai.ts            (สร้าง embedding vector)
    → prisma / Document    (เก็บลง PostgreSQL + pgvector)
    → vector-search.ts     (ค้นหาด้วย Cosine Similarity)
    → POST /api/search     (API endpoint)
```

**RAG Chat Pipeline (Day 7):**
```
คำถามผู้ใช้
    → vector-search.ts     (ค้นหาเอกสารที่เกี่ยวข้อง)
    → context-builder.ts   (สร้าง context + จำกัด token)
    → rag-service.ts       (ส่ง context + คำถาม → OpenAI)
    → POST /api/chat       (API endpoint + บันทึก history)
    → POST /api/chat/stream (Streaming SSE response)
```

**Ingest เอกสารเข้า Database:**
```bash
pnpx tsx --env-file=.env scripts/ingest.ts
```

**ทดสอบแต่ละ module:**
```bash
pnpx tsx --env-file=.env scripts/test-loader.ts
pnpx tsx --env-file=.env scripts/test-splitter.ts
pnpx tsx --env-file=.env scripts/test-embedding.ts
pnpx tsx --env-file=.env scripts/test-rag-service.ts
pnpx tsx --env-file=.env scripts/test-context-builder.ts
```

**ค้นหาผ่าน API:**
```bash
curl -X POST http://localhost:3000/api/search \
  -H "Content-Type: application/json" \
  -d '{"query": "สินค้ามีอะไรบ้าง", "topK": 5}'
```

**ทดสอบ RAG Chat API:**
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "สินค้ามีอะไรบ้าง"}'
```

**ทดสอบ Streaming:**
```bash
curl -N -X POST http://localhost:3000/api/chat/stream \
  -H "Content-Type: application/json" \
  -d '{"message": "วิธีสั่งซื้อสินค้า"}'
```

---

## Database Schema

โปรเจกต์ใช้ **Better Auth Core Schema** บน PostgreSQL (Neon) พร้อม **pgvector** extension สำหรับ Vector Search:

| ตาราง | หน้าที่ |
|-------|--------|
| `user` | ข้อมูลผู้ใช้ (รองรับ `role`, `banned`, `banReason`, `banExpires`) |
| `session` | Session management (รองรับ `impersonatedBy`) |
| `account` | OAuth accounts / Credential provider |
| `verification` | Email verification, Password reset tokens |
| `twoFactor` | 2FA secret + backup codes |
| `document` | เนื้อหาจากเอกสาร + `embedding vector(1536)` สำหรับ Semantic Search |
| `chat_session` | Session การสนทนา (เชื่อมกับ user) |
| `chat_message` | ข้อความใน session (role: user/assistant + sources) |
| `knowledge_document` | เอกสารฐานความรู้ที่จัดการผ่าน UI (title, content, fileType, isIndexed) |

---

## Online Services

| บริการ | ลิงก์ | หน้าที่ |
|-------|------|--------|
| Neon | https://neon.tech | PostgreSQL Serverless Database |
| Better Auth | https://www.better-auth.com | Authentication Library |
| OpenAI Platform | https://platform.openai.com | Embeddings API + Billing |
| GitHub Settings | https://github.com/settings/developers | GitHub OAuth |
| Google Cloud Console | https://console.cloud.google.com | Google OAuth |
| LINE Developers | https://developers.line.biz | LINE Login |
| Meta for Developers | https://developers.facebook.com | Facebook Login |

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon Documentation](https://neon.tech/docs)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [pgvector Documentation](https://github.com/pgvector/pgvector)

---

## Deploy on Vercel

วิธีที่ง่ายที่สุดในการ deploy คือใช้ [Vercel Platform](https://vercel.com/new) จากทีมผู้สร้าง Next.js

อย่าลืมตั้งค่า Environment Variables บน Vercel Dashboard ให้ครบก่อน deploy
