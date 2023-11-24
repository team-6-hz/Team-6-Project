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

<body class="bg-[#EEF5DB]">
    
    <div class="grid grid-cols-2 mt-28">
        <div class="flex flex-col h-full border-r-8">
            <h2 class="text-6xl text-left ml-6 font-bold text-[#3730A3]">
                Chat
            </h2>
             <!-- Additional Div with White Background -->
            <div class="bg-white p-4 mt-4 rounded-xl">
                <h3 class="text-xl font-bold mb-2">Chat Options</h3>
                <p>Add more features here...</p>
                <ul class="ml-8 mt-4">
                    <li class="flex items-center space-x-2">
                        <i class="fas fa-user-circle text-[#3730A3]"></i>
                        <div class="bg-[#D1E5FE] p-2 rounded">
                            Fake message from User 1
                        </div>
                    </li>
                    <li class="flex items-center space-x-2 mt-2">
                        <i class="fas fa-user-circle text-[#3730A3]"></i>
                        <div class="bg-[#D1E5FE] p-2 rounded">
                            Fake message from User 2
                        </div>
                    </li>
                    <li class="flex items-center space-x-2 mt-2">
                        <i class="fas fa-user-circle text-[#3730A3]"></i>
                        <div class="bg-[#D1E5FE] p-2 rounded">
                            Fake message from User 3
                        </div>
                    </li>
                    <!-- Add more users as needed -->
                </ul>
    
            </div>
            
           
            
        </div>
        

        <div class="flex h-full">
            <div class="flex flex-col h-full border-r-8">
            <h2 class="text-6xl text-right ml-6 font-bold text-[#3730A3]">
                Activities
                </h2>
                <div class="col-span-4 mt-4">
                    <!-- You can customize the activities and icons here -->
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
    </div>
</body>

<style>
</style>
