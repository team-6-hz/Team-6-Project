import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as NavBar } from "../../../chunks/NavBar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1cw5vse_START -->${$$result.title = `<title>User Profile</title>`, ""}<meta name="description" content="User Profile Page"><!-- HEAD_svelte-1cw5vse_END -->`, ""}

<header>${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}</header>

<body class="bg-[#EEF5DB] h-screen flex items-center justify-center"><div class="grid grid-cols-2 gap-8 p-8 bg-white rounded-xl w-full h-full">
    <div class="col-span-1 flex flex-col"><h2 class="text-4xl font-bold text-[#3730A3] mb-4">User Profile</h2>
      <div class="flex-grow bg-white p-4 rounded-xl"><div class="mb-4"><img src="https://placekitten.com/200/200" alt="Profile Image" class="rounded-full w-16 h-16 mb-2">
          <p class="text-[#3730A3] font-bold">Username</p></div>
        <p class="text-[#3730A3] mb-2">About Me:</p>
        <p class="text-gray-600">Hi there! I&#39;m passionate about exploring the great outdoors, discovering new hiking trails, and embracing the beauty of nature. 
          When I&#39;m not out on an adventure, you can find me immersed in a good book, sipping on a cup of coffee, or cycling through scenic routes.
          Let&#39;s connect and share our love for outdoor activities and captivating stories!</p>
        <p class="text-[#3730A3] mt-4">Interests:</p>
        <ul class="mt-2 list-disc ml-6"><li>Hiking</li>
          <li>Cycling</li>
          <li>Reading</li></ul>
        <p class="text-[#3730A3] mt-4">Mental awareness:</p>
        <ul class="mt-2 list-disc ml-6"><li>Alcoholism</li>
          <li>Anxious</li>
          <li>Bipolar</li></ul></div></div>

    
    <div class="col-span-1 flex flex-col"><h2 class="text-4xl font-bold text-[#3730A3] mb-4 self-start">Activity Feed</h2>
      <div class="col-span-4 mt-4">
        <div class="m-4 p-4 bg-white rounded"><div class="flex items-center mb-2"><i class="fas fa-hiking text-[#3730A3] mr-2"></i>
              <span class="text-[#3730A3] font-bold">Hiking:</span></div>
          <div class="border-t-2 border-[#3730A3] pt-2">Went for a refreshing hike today!</div></div>

        <div class="m-4 p-4 bg-white rounded"><div class="flex items-center mb-2"><i class="fas fa-bicycle text-[#3730A3] mr-2"></i>
              <span class="text-[#3730A3] font-bold">Cycling:</span></div>
          <div class="border-t-2 border-[#3730A3] pt-2">Enjoyed a long bike ride this evening.</div></div>

        <div class="m-4 p-4 bg-white rounded"><div class="flex items-center mb-2"><i class="fas fa-book-open text-[#3730A3] mr-2"></i>
              <span class="text-[#3730A3] font-bold">Reading:</span></div>
          <div class="border-t-2 border-[#3730A3] pt-2">Immersed in a good book right now.</div></div></div></div></div>

</body>`;
});
export {
  Page as default
};
