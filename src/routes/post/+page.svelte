<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome icons
    import Create from '$lib/components/crud/Create.svelte';
    import Read from '$lib/components/crud/Read.svelte';
    import Update from '$lib/components/crud/Update.svelte';
    import Delete from '$lib/components/crud/Delete.svelte';
</script>

<svelte:head>
    <title>Forum</title>
    <meta name="description" content="Forum" />
</svelte:head>

<header>
    <NavBar />
</header>

<body class="bg-white">
    <div class="mt-28">
        <div class="h-full">
            <h2 class="text-6xl text-center font-bold text-[#3730A3]">Forum</h2>
        </div>
    </div>
    <div class="container mx-auto mt-4 mb-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <a href="/home" class="hover:text-gray-400"><i class="fa fa-home"></i></a> / 
            <a href="#" class="hover:text-gray-400">Some category</a> / 
            <a href="#" class="hover:text-gray-400">Forum Statistics</a>
          </div>
          <div class="text-right">
            <p class="text-gray-600">Welcome, <a href="#" class="underline">CATEATER889</a></p>
          </div>
        </div>
      </div>
      <!-- Forum Categories -->
      <div class="container mx-auto">
        <div class="rounded bg-[#3730A3] text-white p-4 flex justify-between items-center mb-4">
          <div class="text-lg font-bold">Some category title</div>
         
        </div>
      </div>
      <Create />
      <Read />
      <Update />
      <Delete />

      <!-- Add more rows as needed -->
    
      
</body>

<style>
</style>
