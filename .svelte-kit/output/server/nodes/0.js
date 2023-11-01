

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.12269c7e.js","_app/immutable/chunks/index.5848162e.js"];
export const stylesheets = ["_app/immutable/assets/0.516ffa7c.css"];
export const fonts = [];
