

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.fb3101a1.js","_app/immutable/chunks/index.0496fe33.js","_app/immutable/chunks/NavBar.d1fd0070.js"];
export const stylesheets = [];
export const fonts = [];
