/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

Create this file with:

# Cyber Statics — Ultra (Cinematic Neon Edition)

This PR adds a premium Remotion project that generates cinematic GitHub statistics videos for a GitHub profile (default: AshrafMorningstar).

Highlights:
- Multi-scene cinematic composition (Hero, Timeline, Spotlight)
- Language ring with layered neon arcs
- Star distribution visualizer
- Holographic overlays, parallax layers, and glow effects
- Configurable heavy fetch (per-repo commit counts) — disabled by default
- Multi-resolution outputs: 1080p & 720p via GitHub Actions
- Offline fixture for development

How to run:
npm ci
npm run start
npm run render:1080 # or npm run render:720


Notes:
- Provide `PERSONAL_TOKEN` in repo secrets for higher rate limits.
- The Ultra pipeline may be computationally heavy — prefer Actions for final renders.