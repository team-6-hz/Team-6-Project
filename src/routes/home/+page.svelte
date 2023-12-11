<script>
  import { onMount } from "svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import "@fortawesome/fontawesome-free/css/all.css"; // Import FontAwesome icons
  import { goto } from "$app/navigation";
  import { json } from "@sveltejs/kit";

  let test;
  let posts = [];

  onMount(async () => {
    await fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => (posts = data));
    console.log(posts);
  });
</script>

<svelte:head>
  <title>Forum</title>
  <meta name="description" content="Forum" />
</svelte:head>

<header>
  <NavBar />
</header>

<body class="bg-white">
  <div class="mt-8 mb-8">
    <div class="h-full">
      <h2 class="text-6xl text-center font-bold text-[#3730A3]">Forum</h2>
    </div>
  </div>
  <div class="container mx-auto mt-4 mb-8">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <a href="/home" class="hover:text-gray-400"><i class="fa fa-home" /></a>
        /
        <a href="#" class="hover:text-gray-400">Some category</a> /

        <a href="#" class="hover:text-gray-400">Forum Statistics</a>
      </div>
      <div class="text-right">
        <p class="text-gray-600">
          Welcome, <a href="#" class="underline">Admin</a>
        </p>
      </div>
    </div>
  </div>
  <!-- Forum Categories -->
  <div class="container mx-auto">
    <div
      class="rounded bg-[#3730A3] text-white p-4 flex justify-between items-center mb-4"
    >
      <div class="text-lg font-bold">Some category title</div>
      <div class="flex space-x-2">
        <!-- Create Button -->
        <a href="/crud" class="bg-green-500 text-white px-4 py-2 rounded">
          <i class="fa fa-plus" /> Create
        </a>
      </div>
    </div>
    <!-- Forum Topics -->
    <div class="container mx-auto mt-8">
      <!-- Repeat this block for each forum topic -->
      <!-- s -->
      {#each posts as post, i}
        <div class="bg-gray-100 p-4 rounded border-b-2 border-black">
          <div class="text-2xl text-blue-600"><i class="fa fa-file" /></div>
          <div class="text-gray-700">
            <a href="#" class="font-bold hover:text-blue-600">{post.title}</a>
            <p>{post.content}</p>
          </div>
          <div class="text-center">
            <div class="text-gray-600">
              {#if post.likes !== null}
                <!-- Display content when data is not null -->
                <h1>{post.likes}</h1>
              {:else}{/if}
            </div>
          </div>
          <div>
            <a href="#" class="text-blue-600">Some sub-topic</a>
            <p>On {post.created_at.substring(0,10)} at {post.created_at.substring(11,16)}</p>
            <p>by <a href="#" class="text-blue-600">{post.author}</a></p>
          </div>
        </div>
      {/each}
      <!-- Another Topic -->
      <!-- <div class="bg-gray-100 p-4 rounded border-b-2 border-black">
            <div class="text-2xl text-blue-600"><i class="fa-solid fa-pills"></i></div>
            <div class="text-gray-700">
              <a href="#" class="font-bold hover:text-blue-600">Anxirtyty matters - Drugs and remedies</a>
              <p>Description of the title of the topic(?)</p>
            </div>
            <div class="text-center">
              <div class="text-gray-600">96587</div>
              <div class="text-gray-600">678</div>
            </div>
            <div>
              <a href="#" class="text-blue-600">Some sub-topic</a>
              <p>08-29-2013 7:29PM</p>
              <p>by <a href="#" class="text-blue-600">AyLOVEbeingSober</a></p>
            </div>
          </div> -->
      <!-- End of block -->
    </div>
  </div>

  <!-- Forum Statistics-->
  <div class="container mx-auto mt-8">
    <div class="rounded bg-[#3730A3] text-white p-4 mb-4">
      <span class="text-lg font-bold">Forum Statistics</span>
    </div>
    <!-- <div class="bg-gray-100 p-4 rounded">
          <h1 class="text-lg font-bold mb-4">Who's online</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <h1 class="text-lg font-bold mt-4">Board Statistics</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div> -->
    <div class="bg-gray-100 p-4 rounded">
      <h1 class="text-lg font-bold mb-4 flex items-center">
        <i class="fas fa-chart-line mr-2 text-blue-600" /> Top Posts This Week
      </h1>

      <!-- Sample Top Posts Rows -->
      <div class="mb-2">
        <a href="#" class="text-blue-600 font-bold hover:underline"
          >Post Title 1</a
        >
        <p class="text-gray-600">
          Author: <span class="text-blue-600">User1</span> | Views: 123 | Likes:
          45
        </p>
      </div>

      <div class="mb-2">
        <a href="#" class="text-blue-600 font-bold hover:underline"
          >Post Title 2</a
        >
        <p class="text-gray-600">
          Author: <span class="text-blue-600">User2</span> | Views: 98 | Likes: 30
        </p>
      </div>

      <div class="mb-2">
        <a href="#" class="text-blue-600 font-bold hover:underline"
          >Post Title 3</a
        >
        <p class="text-gray-600">
          Author: <span class="text-blue-600">User3</span> | Views: 87 | Likes: 25
        </p>
      </div>

      <!-- Add more rows as needed -->
    </div>
  </div></body
>

<style>
</style>
