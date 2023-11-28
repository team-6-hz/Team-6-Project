

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profilepage/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.378f0f2a.js","_app/immutable/chunks/index.0496fe33.js","_app/immutable/chunks/NavBar.d1fd0070.js"];
export const stylesheets = [];
export const fonts = [];
