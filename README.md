# ReactDemo-AudioPlayer

A minimal Next.js demo that evolved from a task-timer prototype into a simple "chapter reader + audio player" demo. It demonstrates a lightweight context-backed track list, an active player component using `react-howler`, and a small UI for selecting chapters.

This repository is intended as a small starting point for turning a todo-list UI into an ebook-style reader with optional audio playback.

## What you get
- Single-page Next.js app (pages/index.js) that mounts a TracksProvider and renders the main reader.
- A context provider for tracks and selection state: `components/tracksProvider.js`.
- An active reader/player component that uses `react-howler`: `components/taskTimer.js`.
- A compact list UI and shell: `components/main.js`.

## Prerequisites
- Node.js (recommended >= 18; CI used Node 24 in this workspace)
- Yarn (the project uses yarn, but npm will also work after installing dependencies)

## Install

Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd ReactDemo-AudioPlayer
yarn install
```

## Run (development)

Start the Next.js dev server:

```bash
yarn dev
# or
yarn next dev
```

Open http://localhost:3000

## Build / Production

```bash
yarn build
yarn start
```

## Project structure (important files)

- `pages/index.js` — App entry: wraps the main UI with `TracksProvider`.
- `components/tracksProvider.js` — React context and reducer holding `tracks` and `activeTrackId`.
- `components/main.js` — Main UI: shows active reader panel and chapter list.
- `components/taskTimer.js` — Reader/player component (audio playback via `react-howler`).
- `components/utils.js` — Small helpers (time formatting).
- `pages/styles.css` — App styling.

## Notes about recent upgrades
- Dependencies were updated to modern releases (Next.js, React) to resolve a transitive PostCSS compatibility issue during build. The app builds successfully with the updated dependency set.

## Next steps to turn this into a full ebook/music player
- Replace the sample `tracks` initializer with real content metadata (title, excerpt, audio URL, duration, and text content).
- Add persistent progress (localStorage or backend) to resume reading/listening.
- Add a reader view for full chapter text in addition to the excerpt.
- Add keyboard shortcuts and accessible controls for play/pause and navigation.

## Development notes
- The provider reducer is intentionally small. To add CRUD on tracks, extend `tracksProvider` actions (`add`, `remove`, `update`) and update `main.js` list handlers accordingly.
