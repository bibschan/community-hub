# ILF Community Website

A modern community website built with Next.js, TypeScript, and Tailwind CSS, designed to bring together developers and creators around shared projects and activities.

## Features

### 🏠 Homepage
- Prominent CTAs for joining the community (GitHub Stars, Slack)
- Information about monthly community calls
- Showcase of year-round activities (Hacktoberfest, Scavenger Hunt, Holiday Advent Calendar)
- Quick links to all major sections

### 📅 Events Calendar
- Calendar-style view of all upcoming events
- Events organized by month
- Filter by event type:
  - Community Calls
  - Sponsoring Events
  - Attending Events
  - Build-in-Public Sessions
- Dynamic event detail pages with registration links

### 🏆 Leaderboard
- Top contributors showcase with podium display
- Full leaderboard with rankings, points, and badges
- Community statistics (total members, contributions, active projects)
- Point system explanation
- Member profiles with GitHub integration

### 💬 Feedback Section
- Submit feedback form (Feature Requests, Bug Reports, Improvements)
- View and vote on existing feedback
- Filter feedback by type and status
- Track feedback status (Planned, In Progress, Under Review, Completed)

### 📚 Knowledge Base
- Curated directory of external resources (tutorials, demos, walkthroughs)
- Links to documentation from Interledger, Open Payments, and related sites
- Search and filter by category, difficulty level, and tags
- Featured content highlighting
- Source attribution with external link indicators

### 🎯 Community Features
- Monthly community calls
- Build-in-public project sessions
- Annual activities:
  - Hacktoberfest participation
  - Community scavenger hunts
  - Holiday advent calendar coding challenges

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** SVG icons (GitHub, Slack, etc.)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd ILF-community-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ILF-community-site/
├── app/
│   ├── events/
│   │   ├── [id]/
│   │   │   └── page.tsx      # Dynamic event detail pages
│   │   └── page.tsx          # Events calendar page
│   ├── feedback/
│   │   └── page.tsx          # Feedback submission page
│   ├── knowledge-base/
│   │   └── page.tsx          # Knowledge base with external resources
│   ├── leaderboard/
│   │   └── page.tsx          # Community leaderboard
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Homepage
├── components/
│   ├── Navigation.tsx        # Navigation bar
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Update GitHub and Slack Links

Replace placeholder links throughout the site:
- Update `https://github.com/your-org` with your GitHub organization URL
- Update `https://slack.com/your-workspace` with your Slack workspace URL

Files to update:
- `app/page.tsx`
- `app/events/[id]/page.tsx`
- `app/leaderboard/page.tsx`
- `app/feedback/page.tsx`
- `components/Navigation.tsx`
- `components/Footer.tsx`

### Add Event Data

Currently, events are stored as sample data in the page files. To connect to a real data source:

1. Create an API route or use a CMS (Contentful, Sanity, etc.)
2. Update the event data fetching in:
   - `app/events/page.tsx`
   - `app/events/[id]/page.tsx`

### Add Knowledge Base Resources

The knowledge base links to external documentation. To add your own resources:

1. Update the `knowledgeBaseContent` array in `app/knowledge-base/page.tsx`
2. Add entries with:
   - `title`, `description`, `category`, `difficulty`
   - `source`: Display name of the source site
   - `sourceUrl`: Homepage of the source site
   - `externalUrl`: Direct link to the resource
   - `tags`: Array of relevant tags
   - `featured`: Boolean to highlight important resources

### Customize Styling

- Update colors in `tailwind.config.ts`
- Modify global styles in `app/globals.css`
- Adjust component styles directly in the TSX files

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any platform supporting Node.js

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Community

- **GitHub:** [Star our projects](https://github.com/your-org)
- **Slack:** [Join the conversation](https://slack.com/your-workspace)
- **Monthly Calls:** First Saturday of every month

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by [Vercel's Community Site](https://community.vercel.com)
- Built with ❤️ by the ILF Community
