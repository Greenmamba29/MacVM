# MacVM - Kiyomi Bot Dashboard

Web-based management dashboard for VirtualBuddy macOS VMs and Kiyomi bot instances, deployable to Vercel.

## Architecture

```
MacVM/
├── VirtualBuddy/        # VirtualBuddy source (git submodule)
├── dashboard/           # Next.js web dashboard (Vercel deployment)
│   ├── src/app/         # Pages and API routes
│   ├── src/components/  # React components
│   └── ...
├── vercel.json          # Vercel deployment config
└── README.md
```

## Features

- **VM Dashboard** - Monitor and manage macOS virtual machines
- **Kiyomi Bot Panel** - Control your bot instance, view logs, configure settings
- **API Endpoints** - RESTful API for programmatic access
- **Vercel Deployment** - One-click deploy to Vercel

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/kiyomi/status` | Bot status |
| POST | `/api/kiyomi/message` | Send message to bot |
| GET | `/api/kiyomi/logs` | Fetch bot logs |
| POST | `/api/kiyomi/restart` | Restart bot |
| GET | `/api/vm/list` | List all VMs |

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Vercel auto-detects the Next.js framework from `vercel.json`
4. Click **Deploy**

## Local Development

```bash
cd dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## VirtualBuddy

The [VirtualBuddy](https://github.com/insidegui/VirtualBuddy) submodule contains the native macOS VM application source. The dashboard acts as a web-based remote management interface that communicates with VirtualBuddy running on an Apple Silicon Mac.
