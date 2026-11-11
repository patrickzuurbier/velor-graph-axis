/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
const a = [
  {
    type: "axis.bar",
    version: 1,
    load: async () => {
      const { createBarGraphRenderer: r } = await import("./assets/barGraphRenderer-By6_6HF0.js");
      return r;
    }
  },
  {
    type: "axis.line",
    version: 1,
    load: async () => {
      const { createLineGraphRenderer: r } = await import("./assets/lineGraphRenderer-B4Kw7Jog.js");
      return r;
    }
  },
  {
    type: "axis.pictorial-bar",
    version: 1,
    load: async () => {
      const { createPictorialBarGraphRenderer: r } = await import("./assets/pictorialBarGraphRenderer-BuA0vFwF.js");
      return r;
    }
  },
  {
    type: "axis.scatter",
    version: 1,
    load: async () => {
      const { createScatterGraphRenderer: r } = await import("./assets/scatterGraphRenderer-B0A89jw1.js");
      return r;
    }
  }
];
window.velorGraphRenderers ?? (window.velorGraphRenderers = []);
for (const r of a)
  window.velorGraphRenderers.some((e) => e.type === r.type && e.version === r.version) || window.velorGraphRenderers.push(r);
