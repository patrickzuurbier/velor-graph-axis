/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
const a = [
  {
    type: "axis.bar",
    version: 1,
    load: async () => {
      const { createBarGraphRenderer: r } = await import("./assets/barGraphRenderer-Baq_5n-3.js");
      return r;
    }
  },
  {
    type: "axis.line",
    version: 1,
    load: async () => {
      const { createLineGraphRenderer: r } = await import("./assets/lineGraphRenderer-D15kmxg0.js");
      return r;
    }
  },
  {
    type: "axis.mixed",
    version: 1,
    load: async () => {
      const { createMixedGraphRenderer: r } = await import("./assets/mixedGraphRenderer-BBu53vrC.js");
      return r;
    }
  },
  {
    type: "axis.pictorial-bar",
    version: 1,
    load: async () => {
      const { createPictorialBarGraphRenderer: r } = await import("./assets/pictorialBarGraphRenderer-D9A2vjnj.js");
      return r;
    }
  },
  {
    type: "axis.scatter",
    version: 1,
    load: async () => {
      const { createScatterGraphRenderer: r } = await import("./assets/scatterGraphRenderer-8FcVu95d.js");
      return r;
    }
  }
];
window.velorGraphRenderers ?? (window.velorGraphRenderers = []);
for (const r of a)
  window.velorGraphRenderers.some((e) => e.type === r.type && e.version === r.version) || window.velorGraphRenderers.push(r);
