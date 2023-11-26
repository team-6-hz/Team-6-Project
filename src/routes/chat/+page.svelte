<script>
    import NavBar from "$lib/components/NavBar.svelte";
</script>
<svelte:head>
    <title>Chat & Activities</title>
    <meta name="description" content="Forum" />
</svelte:head>
<header>
    <NavBar />
</header>
<body class="bg-[#EEF5DB] h-screen flex items-center justify-center">

    <div class="grid grid-cols-2 gap-8 p-8 bg-white rounded-xl w-full h-full">
      <!-- Chat Section -->
      <div class="col-span-1 flex flex-col">
        <h2 class="text-4xl font-bold text-[#3730A3] mb-4">Chat</h2>
        <div class="flex-grow bg-white p-4 rounded-xl">
          <h3 class="text-xl font-bold mb-2">Chat Options</h3>
          
          <ul class="mt-4 space-y-2">
            <li class="flex items-center space-x-2">
              <i class="fas fa-user-circle text-[#3730A3]"></i>
              <div class="bg-[#D1E5FE] p-2 rounded">
                Fake message from User 1
              </div>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-user-circle text-[#3730A3]"></i>
              <div class="bg-[#D1E5FE] p-2 rounded">
                Fake message from User 2
              </div>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-user-circle text-[#3730A3]"></i>
              <div class="bg-[#D1E5FE] p-2 rounded">
                Fake message from User 3
              </div>
            </li>
            <!-- Add more users as needed -->
          </ul>
        </div>
      </div>

      <!-- Activities Section -->
      <div class="col-span-1 flex flex-col">
        <h2 class="text-4xl font-bold text-[#3730A3] mb-4 self-start">Activities</h2>
        <div class="col-span-4 mt-4">
          <!-- Activities content goes here -->
          <div class="m-4 p-4 bg-white rounded">
            <div class="flex items-center mb-2">
                <i class="fas fa-hiking text-[#3730A3] mr-2"></i>
                <span class="text-[#3730A3] font-bold">Hiking:</span>
            </div>
            <div class="border-t-2 border-[#3730A3] pt-2">Went for a refreshing hike today!</div>
        </div>
        

        </div>
      </div>
    </div>
  
  </body>

<style>
</style>
