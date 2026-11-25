/* ==================================================================
   REDRAWING THE MAP: site content
   This is the only file you need to edit to add maps.

   Add one block per state, keyed by its two-letter code. Each block
   can have: current, geographic, communities, partisan.
   Every field is optional. Anything missing shows a placeholder.

     image:     path to a map image in the maps/ folder,
                e.g. "maps/tx-geographic.png"
                (in Dave's Redistricting App: Export > Map image)
     link:      the map's share link from Dave's Redistricting App
     narrative: a paragraph explaining the map
     ratings:   Dave's Redistricting ratings, 0 to 100:
                proportionality, competitiveness, minority,
                compactness, splitting
     stats:     any extra figures, { "Label": "value" }

   Example (remove the // to switch it on):
   ================================================================== */

window.CONTENT = {

  // TX: {
  //   current: {
  //     image: "maps/tx-current.png",
  //     link: "https://davesredistricting.org/join/...",
  //     narrative: "Texas's current map ...",
  //     ratings: { proportionality: 0, competitiveness: 0, minority: 0, compactness: 0, splitting: 0 }
  //   },
  //   geographic: {
  //     image: "maps/tx-geographic.png",
  //     link: "https://davesredistricting.org/join/...",
  //     narrative: "This map keeps ...",
  //     ratings: { proportionality: 0, competitiveness: 0, minority: 0, compactness: 0, splitting: 0 }
  //   },
  //   communities: { ... },
  //   partisan: { ... }
  // },

};
