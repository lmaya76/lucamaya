# Redrawing the Map (lucamaya.com)

A static site: no build step, no framework.

- `index.html`: the site (layout and pages).
- `content.js`: all map content. Edit this to add a state.
- `maps/`: map images exported from Dave's Redistricting App.

## Adding a state

1. Screenshot both maps in Dave's Redistricting App and name them `<state>-current.png` and `<state>-optimal.png`, e.g. `oh-current.png`.
2. Upload the images to the `maps` folder. They appear on the site automatically.
3. Add the state's links, ratings, and narratives for both maps to `content.js` (see the example at the top of that file).
4. Commit. The site updates in about a minute.

`content.js` also holds the list of principles behind an optimal map.
