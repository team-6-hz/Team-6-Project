

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2db12da8.js","_app/immutable/chunks/index.0496fe33.js","_app/immutable/chunks/singletons.38970edc.js"];
export const stylesheets = [];
export const fonts = [];
