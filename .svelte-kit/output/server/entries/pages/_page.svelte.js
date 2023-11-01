import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Example = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h2>Very basic component</h2></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container w-full mx-auto grid" style="grid-template-rows: 15% 75% 10;"><div class="top bg-slate-700" style="background-color: red;"><div class="logo"></div>
   dog
  </div>
  <div class="mid">${validate_component(Example, "Example").$$render($$result, {}, {}, {})}</div>
  <div class="bottom"></div>


    
</div>`;
});
export {
  Page as default
};
