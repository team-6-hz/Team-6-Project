import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Example = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container w-full mx-auto grid font-sans" style="grid-template-rows: 15% 75% 10; min-width: 100vw;"><div class="top bg-slate-700 font-bold text-4xl grid text-white h-24" style="grid-template-columns: 1fr 2fr 1fr; justify-content: center; align-items: center; justify-items: center;"><div>Anxietr</div>
        <div class="text-3xl">Stress relief forums</div>
        <div class="text-xl">Account</div></div>
    <div class="mid bg-slate-200 min-h-full flex items-center justify-center" style="min-height: 800px;">${validate_component(Example, "Example").$$render($$result, {}, {}, {})}
        <div class="w-3/4"><div id="post" class="grid border-4 bg-slate-500" style="grid-template-rows: 1fr 6fr; align-items: center; justify-items: center;"><div class="left-0 text-white text-2xl p-2">Lorum ipsum</div>
                <div class="right-0 text-white text-xl p-2 bg-slate-400 h-3/4 m-16 mb-7">Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni.
                    <script>async function fetchTest(){
                          const responseLink = "http://localhost:3000/todos";
                         const response = await fetch(responseLink);
                         const data = await response.json();
                         console.log(response);
                        console.log(data);
                        }
                        fetchTest();
                    <\/script></div></div>
            <div id="post" class="grid border-4 bg-slate-500" style="grid-template-rows: 1fr 6fr; align-items: center; justify-items: center;"><div class="left-0 text-white text-2xl p-2">Lorum ipsum</div>
                <div class="right-0 text-white text-xl p-2 bg-slate-400 h-3/4 m-16 mb-7">Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni.
                </div></div></div></div>
    <div class="bottom h-3/6 text-center">Anxietr©</div>
</div>`;
});
export {
  Page as default
};
