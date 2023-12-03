<script>
  import NavBar from "$lib/components/NavBar.svelte";
</script>
<svelte:head>
  <title>CREATE</title>
  <meta name="description" content="Forum" />
</svelte:head>
<header>
  <NavBar />
</header>
<body class="bg-white">
  <div class="container mx-auto mt-8">
    <div class="rounded bg-[#3730A3] text-white p-4 mb-4">
        <span class="text-lg font-bold">Create New Topic</span>
    </div>

    <form class="max-w-md mx-auto">
        <div class="mb-4">
            <label for="title" class="block text-gray-600">Title:</label>
            <input type="text" id="title" name="title" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="subTopic" class="block text-gray-600">Sub-Topic:</label>
          <input type="text" id="subTopic" name="subTopic" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required>
      </div>
        <div class="mb-4">
            <label for="description" class="block text-gray-600">Description:</label>
            <textarea id="description" name="description" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required></textarea>
        </div>
        <!-- Submit Button -->
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Submit</button>

        <!-- Update Button -->
        <button class="bg-blue-500 text-white px-4 py-2 rounded">
          <i class="fa fa-pencil-alt"></i> Edit
        </button>

        <!-- Delete Button -->
        <button class="bg-red-500 text-white px-4 py-2 rounded">
          <i class="fa fa-trash-alt"></i> Delete
        </button>
  </body>  