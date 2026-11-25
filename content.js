/* ==================================================================
   REDRAWING THE MAP: site content
   This is the only file you need to edit.

   MAP IMAGES need no entry here. Upload screenshots to the maps/
   folder named <state>-current.png and <state>-optimal.png,
   all lowercase, e.g. maps/tx-current.png and maps/tx-optimal.png.
   They appear on the site automatically.

   FOR EACH STATE, add a block below with:
     link:      the map's share link from Dave's Redistricting App
     narrative: a paragraph explaining the map
     ratings:   the five ratings from the Analyze tab (0 to 100)
   ================================================================== */

/* What makes a map "optimal". Shown on the home and About pages.
   Edit, add, or remove lines. Each line is one principle. */
window.PRINCIPLES = [
  "Equal population in every district",
  "Compact, contiguous districts",
  "Counties and cities kept whole wherever possible",
  "Communities with shared interests kept together",
  "Seat outcomes that reflect how the state votes",
];

window.CONTENT = {

  // Copy this block for each state. Remove the // at the start of each line.
  // TX: {
  //   current: {
  //     link: "https://davesredistricting.org/...",
  //     narrative: "Texas's current map ...",
  //     ratings: { proportionality: 0, competitiveness: 0, minority: 0, compactness: 0, splitting: 0 }
  //   },
  //   optimal: {
  //     link: "https://davesredistricting.org/...",
  //     narrative: "My optimal map ...",
  //     ratings: { proportionality: 0, competitiveness: 0, minority: 0, compactness: 0, splitting: 0 }
  //   },
  // },

};
