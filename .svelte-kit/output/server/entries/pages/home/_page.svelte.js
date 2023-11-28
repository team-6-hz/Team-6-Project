import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as NavBar } from "../../../chunks/NavBar.js";
const all = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ibocgz_START -->${$$result.title = `<title>Forum</title>`, ""}<meta name="description" content="Forum"><!-- HEAD_svelte-1ibocgz_END -->`, ""}

<header>${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}</header>

<body class="bg-white"><div class="mt-28"><div class="h-full"><h2 class="text-6xl text-center font-bold text-[#3730A3]">Forum</h2></div></div>
    <div class="container mx-auto mt-4 mb-8"><div class="flex items-center justify-between"><div class="flex items-center space-x-2"><a href="/home" class="hover:text-gray-400"><i class="fa fa-home"></i></a> / 
            <a href="#" class="hover:text-gray-400">Some category</a> / 
            <a href="#" class="hover:text-gray-400">Forum Statistics</a></div>
          <div class="text-right"><p class="text-gray-600">Welcome, <a href="#" class="underline">CATEATER889</a></p></div></div></div>
      
      <div class="container mx-auto"><div class="rounded bg-[#3730A3] text-white p-4 flex justify-between items-center mb-4"><div class="text-lg font-bold">Some category title</div></div>
        
        

        
        <div class="container mx-auto mt-8">
            <div class="bg-gray-100 p-4 rounded border-b-2 border-black"><div class="text-2xl text-blue-600"><i class="fa fa-file"></i></div>
              <div class="text-gray-700"><a href="#" class="font-bold hover:text-blue-600">Title of the title</a>
                <p>Description of the title of the topic(?)</p></div>
              <div class="text-center"><div class="text-gray-600">96587</div>
                <div class="text-gray-600">678</div></div>
              <div><a href="#" class="text-blue-600">Some sub-topic</a>
                <p>08-29-2013 7:29PM</p>
                <p>by <a href="#" class="text-blue-600">Some user</a></p></div></div>
           
           <div class="bg-gray-100 p-4 rounded border-b-2 border-black"><div class="text-2xl text-blue-600"><i class="fa-solid fa-pills"></i></div>
            <div class="text-gray-700"><a href="#" class="font-bold hover:text-blue-600">Anxirtyty matters - Drugs and remedies</a>
              <p>Description of the title of the topic(?)</p></div>
            <div class="text-center"><div class="text-gray-600">96587</div>
              <div class="text-gray-600">678</div></div>
            <div><a href="#" class="text-blue-600">Some sub-topic</a>
              <p>08-29-2013 7:29PM</p>
              <p>by <a href="#" class="text-blue-600">AyLOVEbeingSober</a></p></div></div>
            </div></div>

       
    <div class="container mx-auto mt-8"><div class="rounded bg-[#3730A3] text-white p-4 mb-4"><span class="text-lg font-bold">Forum Statistics</span></div>
        
        <div class="bg-gray-100 p-4 rounded"><h1 class="text-lg font-bold mb-4 flex items-center"><i class="fas fa-chart-line mr-2 text-blue-600"></i> Top Posts This Week
      </h1>

      
      <div class="mb-2"><a href="#" class="text-blue-600 font-bold hover:underline">Post Title 1</a>
        <p class="text-gray-600">Author: <span class="text-blue-600">User1</span> | Views: 123 | Likes: 45</p></div>

      <div class="mb-2"><a href="#" class="text-blue-600 font-bold hover:underline">Post Title 2</a>
        <p class="text-gray-600">Author: <span class="text-blue-600">User2</span> | Views: 98 | Likes: 30</p></div>

    <div class="mb-2"><a href="#" class="text-blue-600 font-bold hover:underline">Post Title 3</a>
            <p class="text-gray-600">Author: <span class="text-blue-600">User3</span> | Views: 87 | Likes: 25</p></div>



      </div></div></body>`;
});
export {
  Page as default
};
