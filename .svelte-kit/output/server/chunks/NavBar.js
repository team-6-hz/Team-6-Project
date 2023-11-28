import { c as create_ssr_component } from "./index.js";
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="bg-[#3730A3] p-4 sticky top-0 w-full z-10"><div class="container mx-auto flex justify-between items-center"><a href="/home" class="text-[#DFC2F2] text-6xl font-bold">Anxietr</a>

        <ul class="flex space-x-4"><li><a href="/home" class="text-[#DFC2F2] text-2xl font-bold hover:text-white">Forum</a>
                <a href="/chat" class="text-[#DFC2F2] text-2xl p-8 font-bold hover:text-white">Chat &amp; Activities</a>
                <a href="/profilepage" class="text-[#DFC2F2] text-2xl font-bold hover:text-white">Profile</a>
                <i class="fa-solid fa-moon text-[#DFC2F2] text-2xl font-bold hover:text-white"></i>
                <i class="fa-solid fa-sun text-[#DFC2F2] text-2xl font-bold hover:text-white"></i></li></ul></div>
</nav>`;
});
export {
  NavBar as N
};
