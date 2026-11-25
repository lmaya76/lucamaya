# Redrawing the Map (lucamaya.com)

A static site: no build step, no framework.

- `index.html`: the site (layout, pages, method descriptions).
- `content.js`: all map content. Edit this to add a state.
- `maps/`: map images exported from Dave's Redistricting App.

## Adding a state

1. Screenshot each map in Dave's Redistricting App and name it `<state>-<method>.png`, e.g. `oh-communities.png`.
2. Upload the images to the `maps` folder. They appear on the site automatically.
3. Add the state's links, ratings, and narratives to `content.js` (see the example at the top of that file).
4. Commit. The site updates in about a minute.

Method names used in `content.js`: `current`, `geographic`, `communities`, `partisan`.
