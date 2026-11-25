# Redrawing the Map (lucamaya.com)

A static site: no build step, no framework.

- `index.html`: the site (layout, pages, method descriptions).
- `content.js`: all map content. Edit this to add a state.
- `maps/`: map images exported from Dave's Redistricting App.

## Adding a state

1. In Dave's Redistricting App, export the map image and copy the share link.
2. Save the image as `maps/<state>-<method>.png`, e.g. `maps/oh-communities.png`.
3. Add the state's block to `content.js` (see the example at the top of that file).
4. Deploy. Every page that shows that state updates automatically.

Method names used in `content.js`: `current`, `geographic`, `communities`, `partisan`.
