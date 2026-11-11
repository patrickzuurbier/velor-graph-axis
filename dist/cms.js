/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
const n = [
  {
    type: "axis.bar",
    version: 1,
    load: async () => {
      const { createBarGraphRenderer: r } = await import("./assets/barGraphRenderer-jha9mfJg.js");
      return r;
    }
  },
  {
    type: "axis.line",
    version: 1,
    load: async () => {
      const { createLineGraphRenderer: r } = await import("./assets/lineGraphRenderer-Bvyu9Lz4.js");
      return r;
    }
  }
];
window.velorGraphRenderers ?? (window.velorGraphRenderers = []);
for (const r of n)
  window.velorGraphRenderers.some((e) => e.type === r.type && e.version === r.version) || window.velorGraphRenderers.push(r);
