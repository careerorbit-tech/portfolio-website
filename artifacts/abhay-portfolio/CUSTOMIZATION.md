# Portfolio Customization Guide

This file explains how to update, modify, or extend the portfolio without needing to dig into complex component code. All the most common changes can be made by editing one or two specific files.

---

## 🧑 1. Update Personal Details (Name, Image, Bio)

**File:** `src/profileConfig.ts`

This is the single source of truth for your personal branding. Edit it to update:

```ts
export const profileConfig = {
  name: "Abhay Ayare",           // Your full name
  initials: "AA",                // Shown as avatar fallback
  profileImage: "",              // Path to your photo, e.g. "/profile.jpg"
  shortIntro: "...",             // Your short intro paragraph (used in About section)
  keywords: ['Builder', ...],   // Tags shown in About section
};
```

### Adding a Profile Photo
1. Drop your image (e.g. `profile.jpg`) inside the `public/` folder.
2. Set `profileImage: "/profile.jpg"` in `profileConfig.ts`.
3. The image will appear in both the **Hero** and **About** sections automatically.

---

## 🗂️ 2. Add / Edit / Remove Projects

**File:** `src/components/Projects.tsx`

Each project is an object in the `projects` array at the top of the file. Here's the shape:

```ts
{
  id: 6,                           // Unique number (increment for each new project)
  title: 'My Project',
  subtitle: 'Short subtitle',
  tagline: 'One punchy line',
  stack: ['React', 'Node.js'],     // Tech badges shown on the card
  description: 'What it does...',
  impact: 'Who uses it / results',
  problem: 'What problem it solves',
  architecture: 'How it is built',
  challenges: [                    // Array of bullet points
    'Challenge 1',
    'Challenge 2',
  ],
  githubUrl: 'https://github.com/username/repo',
  liveUrl: 'https://myproject.com',
  hasVideo: true,                  // ✅ Shows video play button in modal
                                   // ❌ false = shows a static preview panel
}
```

### Rules for `hasVideo`
Only these 4 projects should have `hasVideo: true`:
- AlgoVista (DSA Visualization)
- CareerOrbit.Tech (Career Guidance)
- Matrix Astronomy Platform
- EmoSense AI

All others should be `hasVideo: false`.

### GitHub Link for Explore More
The GitHub "See All Projects" card at the end of the scroll uses a hardcoded link.
To update it, search for `href="https://github.com"` in `Projects.tsx` (there are 2 — the header link and the card).

---

## 📅 3. Update the Journey / Timeline

**File:** `src/components/Journey.tsx`

Edit the `milestones` array:

```ts
const milestones = [
  { year: '2021', title: 'Title Here', desc: 'Short description', tag: 'Education' },
  // ...
];
```

Valid tags: `Education`, `Project`, `Research`, `Leadership`

---

## 🔭 4. Update the Astronomy Section

**File:** `src/components/Astronomy.tsx`

### Events List
Update the `events` array at the top of the file with your actual outreach events:
```ts
const events = [
  { title: "Event Name", date: "Month YYYY", desc: "Description.", attendees: "N attendees" },
];
```

### Gallery Titles
Update the `gallery` array to reflect your real astrophotography captures:
```ts
const gallery = [
  { title: 'Object Name', color: 'from-pink-500/20 to-purple-600/40' },
];
```

---

## 🔬 5. Update AI Research Areas

**File:** `src/components/AIResearch.tsx`

Edit the `researchAreas` array. Each item has an icon (Lucide icon component), title, and desc.

Edit the `papers` array to list the papers you are currently reading:
```ts
const papers = [
  { title: 'Paper Title', authors: 'Authors (Year)', topic: 'Topic Area' },
];
```

---

## 📊 6. Update DSA Stats

**File:** `src/components/DSA.tsx`

Update the numbers in the LeetCode card:
- The `300+` Solved count appears on line ~58 and inside the circular chart on line ~73.
- The Easy / Medium / Hard counts are in the three `<div>` blocks below the chart.

Also update the category bar chart data at the top:
```ts
const categoryData = [
  { name: 'Arrays', count: 120 },
  // ...
];
```

---

## ⚒️ 7. Update Tech Arsenal

**File:** `src/components/Arsenal.tsx`

Look for the skills / categories data array and update the skills listed.

---

## 📬 8. Update Contact / Social Links

**File:** `src/components/Contact.tsx` and `src/components/Hero.tsx`

In `Hero.tsx`, update the social links in the icons row:
```tsx
{ icon: <Github />, label: 'GitHub', href: 'https://github.com/your-username' },
{ icon: <Linkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' },
```

---

## 🗺️ Navigation Items

**File:** `src/components/Navigation.tsx`

Update section IDs or labels if you add new sections.

---

## 💡 Quick Reference: File Map

| What to Change              | File                                  |
|-----------------------------|---------------------------------------|
| Name, photo, bio, keywords  | `src/profileConfig.ts`                |
| Projects, GitHub link       | `src/components/Projects.tsx`         |
| Journey / timeline          | `src/components/Journey.tsx`          |
| Astronomy events + gallery  | `src/components/Astronomy.tsx`        |
| AI research areas + papers  | `src/components/AIResearch.tsx`       |
| DSA stats / bar chart       | `src/components/DSA.tsx`              |
| Skills / tech stack         | `src/components/Arsenal.tsx`          |
| Social links in hero        | `src/components/Hero.tsx`             |
| Contact section             | `src/components/Contact.tsx`          |
| Navigation items            | `src/components/Navigation.tsx`       |
| Project modal (video logic) | `src/components/ProjectModal.tsx`     |

---

## 🚀 Running Locally

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# From the root of the monorepo (Abhay-Ayare-Digital/)
pnpm install

# Start the dev server
pnpm dev
```

The portfolio will be live at `http://localhost:5173`.
