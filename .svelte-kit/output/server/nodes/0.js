

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.61ff50f1.js","_app/immutable/chunks/index.0496fe33.js"];
export const stylesheets = ["_app/immutable/assets/0.0f37f22b.css"];
export const fonts = [];
