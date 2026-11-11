/*! Third-party licenses: see THIRD_PARTY_NOTICES.md and licenses/ in the Composer package. */
const r = {
  type: "axis.line",
  version: 1,
  load: async () => {
    const { createLineGraphRenderer: e } = await import("./assets/lineGraphRenderer-DxZ05t80.js");
    return e;
  }
};
window.velorGraphRenderers ?? (window.velorGraphRenderers = []);
window.velorGraphRenderers.some((e) => e.type === r.type && e.version === r.version) || window.velorGraphRenderers.push(r);
