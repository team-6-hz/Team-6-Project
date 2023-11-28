

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.7902a5ab.js","_app/immutable/chunks/index.0496fe33.js","_app/immutable/chunks/NavBar.d1fd0070.js"];
export const stylesheets = ["_app/immutable/assets/5.1dd22e31.css"];
export const fonts = ["_app/immutable/assets/fa-brands-400.faae6fc0.woff2","_app/immutable/assets/fa-brands-400.003f1154.ttf","_app/immutable/assets/fa-regular-400.9169d8be.woff2","_app/immutable/assets/fa-regular-400.7d81a1a7.ttf","_app/immutable/assets/fa-solid-900.886c8611.woff2","_app/immutable/assets/fa-solid-900.cea79b34.ttf","_app/immutable/assets/fa-v4compatibility.335fd7d9.woff2","_app/immutable/assets/fa-v4compatibility.455e8e72.ttf"];
