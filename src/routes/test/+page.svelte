<script>
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<svelte:head>
  <title>User Profile</title>
  <meta name="description" content="User Profile Page" />
</svelte:head>

<header>
  <NavBar />
</header>

<body class="bg-[#EEF5DB] h-screen flex items-center justify-center">

  <div class="grid grid-cols-2 gap-8 p-8 bg-white rounded-xl w-full h-full">
    <!-- User Profile Section -->
    <div class="col-span-1 flex flex-col">
      <h2 class="text-4xl font-bold text-[#3730A3] mb-4">User Profile</h2>
      <div class="flex-grow bg-white p-4 rounded-xl">
        <div class="mb-4">
          <img src="https://placekitten.com/200/200" alt="Profile Image" class="rounded-full w-16 h-16 mb-2">
          <p class="text-[#3730A3] font-bold">Username</p>
        </div>
        <p class="text-[#3730A3] mb-2">About Me:</p>
        <p class="text-gray-600"> Hi there! I'm passionate about exploring the great outdoors, discovering new hiking trails, and embracing the beauty of nature. 
          When I'm not out on an adventure, you can find me immersed in a good book, sipping on a cup of coffee, or cycling through scenic routes.
          Let's connect and share our love for outdoor activities and captivating stories!</p>
        <p class="text-[#3730A3] mt-4">Interests:</p>
        <ul class="mt-2 list-disc ml-6">
          <li>Hiking</li>
          <li>Cycling</li>
          <li>Reading</li>
        </ul>
        <p class="text-[#3730A3] mt-4">Mental awareness:</p>
        <ul class="mt-2 list-disc ml-6">
          <li>Alcoholism</li>
          <li>Anxious</li>
          <li>Bipolar</li>
      </div>
    </div>

    <!-- Activity Feed Section -->
    <div class="col-span-1 flex flex-col">
      <h2 class="text-4xl font-bold text-[#3730A3] mb-4 self-start">Activity Feed</h2>
      <div class="col-span-4 mt-4">
        <!-- Activity feed content goes here -->
        <div class="m-4 p-4 bg-white rounded">
          <div class="flex items-center mb-2">
              <i class="fas fa-hiking text-[#3730A3] mr-2"></i>
              <span class="text-[#3730A3] font-bold">Hiking:</span>
          </div>
          <div class="border-t-2 border-[#3730A3] pt-2">Went for a refreshing hike today!</div>
        </div>

        <div class="m-4 p-4 bg-white rounded">
          <div class="flex items-center mb-2">
              <i class="fas fa-bicycle text-[#3730A3] mr-2"></i>
              <span class="text-[#3730A3] font-bold">Cycling:</span>
          </div>
          <div class="border-t-2 border-[#3730A3] pt-2">Enjoyed a long bike ride this evening.</div>
        </div>

        <div class="m-4 p-4 bg-white rounded">
          <div class="flex items-center mb-2">
              <i class="fas fa-book-open text-[#3730A3] mr-2"></i>
              <span class="text-[#3730A3] font-bold">Reading:</span>
          </div>
          <div class="border-t-2 border-[#3730A3] pt-2">Immersed in a good book right now.</div>
        </div>
      </div>
    </div>
  </div>

</body>

<style>
</style>
