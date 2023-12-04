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

  <div class="grid grid-cols-5 gap-8 p-8 bg-white rounded-xl w-full h-full">
    <!-- Conversation List -->
    <div class="col-span-1 flex flex-col border-r-2 pr-4">
      <h2 class="text-4xl font-bold text-[#3730A3] mb-4">Chats</h2>
      <!-- Add your conversation list here -->
      <div class="flex items-center space-x-4 w-64 mb-4 col-span-4 border-b-2 border-gray-300 mb-4">
        <img src="https://placekitten.com/40/40" alt="User Image" class="rounded-full">
        <div class="text-[#3730A3] font-bold text-lg font-bold mb-1">Friend 1</div>
        <div class="text-sm text-gray-500">Fake message from You</div>
      </div>
      <div class="flex items-center space-x-4  w-64 mb-4 col-span-4 border-b-2 border-gray-300 mb-4">
        <img src="https://placekitten.com/40/40" alt="User Image" class="rounded-full">
        <div class="text-[#3730A3] font-bold text-lg font-bold mb-1">Friend 2</div>
        <div class="text-sm text-gray-500">Kudos</div>
      </div>
      <div class="flex items-center space-x-4 w-64 mb-4 col-span-4 border-b-2 border-gray-300 mb-4">
        <img src="https://placekitten.com/40/40" alt="User Image" class="rounded-full">
        <div class="text-[#3730A3] font-bold text-lg font-bold mb-1">Friend 3</div>
        <div class="text-sm text-gray-500">How are you?</div>
      </div>
    </div>

    <!-- Chat Section -->
    <div class="col-span-4 flex flex-col">
      <div class="flex items-center justify-between p-4 border-b-2">
        <h2 class="text-4xl font-bold text-[#3730A3] mb-4">Friend 1</h2>
        <!-- Add an icon for options if needed -->
      </div>

      <!-- Messages -->
      <div class="flex-grow p-4 overflow-y-auto">
        <!-- Add your messages here -->
        <div class="flex items-start mb-4">
          <div class="bg-[#D1E5FE] p-2 rounded">
            Fake message from Friend 1
          </div>
        </div>
        <div class="flex items-end justify-end mb-4">
          <div class="bg-[#D1E5FE] p-2 rounded">
            Fake message from You
          </div>
        </div>
      </div>

      <!-- Message Input -->
      <div class="p-4 border-t-2">
        <input type="text" placeholder="Type a message..." class="w-full p-2 border rounded">
        <!-- Add a send button or emoji picker if needed -->
      </div>
    </div>
  </div>
  
  </body>

<style>
</style>
