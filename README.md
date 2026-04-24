# Exoape Motion Research

This repository contains source captures of several Exo Ape-designed sites.

The goal is not to clone the sites or reuse proprietary assets.

The goal is to reverse-engineer the reusable design-motion architecture behind the sites and build a clean Nuxt/Vue prototype that captures the system:

- fixed viewport shell
- layered render planes
- overlay page transitions
- manual scroll/progress systems
- paused GSAP timelines
- state-class driven interactions
- masked typography
- loader/intro systems
- nav/menu systems

## Reference sites

1. exoape.com homepage
2. exoape.com/studio
3. pixelflakes.com
4. ottografie.nl

## Folder policy

/reference folders are raw evidence. Do not move, delete, or edit files inside references.

Codex should create all normalized, cleaned, analyzed, and prototype files under /work.

Expected generated structure:

/work
  /normalized
  /decompiled
  /humanified
  /analysis
  /prototype
