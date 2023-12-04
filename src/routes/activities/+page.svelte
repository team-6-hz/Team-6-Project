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
  <!-- Activities Section -->
  <div class="col-span-1 flex flex-col">
    <h2 class="text-4xl font-bold text-[#3730A3] mb-4 self-start">Activity Events</h2>
    
    <!-- Cycling Event -->
    <div class="m-4 p-4 bg-white rounded">
        <div class="flex items-center mb-2">
            <i class="fas fa-bicycle text-[#3730A3] mr-2"></i>
            <span class="text-[#3730A3] font-bold">Cycling:</span>
        </div>
        <div class="border-t-2 border-[#3730A3] pt-2">Join our cycling event and explore scenic routes!</div>
    </div>

    <!-- Hiking Event -->
    <div class="m-4 p-4 bg-white rounded">
        <div class="flex items-center mb-2">
            <i class="fas fa-hiking text-[#3730A3] mr-2"></i>
            <span class="text-[#3730A3] font-bold">Hiking:</span>
        </div>
        <div class="border-t-2 border-[#3730A3] pt-2">Embark on a hiking adventure in the beautiful mountains!</div>
    </div>

    <!-- Swimming Event -->
    <div class="m-4 p-4 bg-white rounded">
        <div class="flex items-center mb-2">
            <i class="fas fa-swimmer text-[#3730A3] mr-2"></i>
            <span class="text-[#3730A3] font-bold">Swimming:</span>
        </div>
        <div class="border-t-2 border-[#3730A3] pt-2">Dive into the pool and enjoy a refreshing swim session!</div>
    </div>

    <!-- Yoga Event -->
    <div class="m-4 p-4 bg-white rounded">
        <div class="flex items-center mb-2">
            <i class="fas fa-spa text-[#3730A3] mr-2"></i>
            <span class="text-[#3730A3] font-bold">Yoga:</span>
        </div>
        <div class="border-t-2 border-[#3730A3] pt-2">Relax your mind and body with a rejuvenating yoga class!</div>
    </div>

    <!-- Running Event -->
    <div class="m-4 p-4 bg-white rounded">
        <div class="flex items-center mb-2">
            <i class="fas fa-running text-[#3730A3] mr-2"></i>
            <span class="text-[#3730A3] font-bold">Running:</span>
        </div>
        <div class="border-t-2 border-[#3730A3] pt-2">Participate in our running event and boost your fitness!</div>
    </div>

    <!-- Dance Event -->
    <div class="m-4 p-4 bg-white rounded">
        <div class="flex items-center mb-2">
            <i class="fas fa-drumstick-bite text-[#3730A3] mr-2"></i>
            <span class="text-[#3730A3] font-bold">Dance:</span>
        </div>
        <div class="border-t-2 border-[#3730A3] pt-2">Groove to the beats in our lively dance event!</div>
    </div>

</div>     
  
  </body>

<style>
</style>
