<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import { onMount } from "svelte";

    let test;
    let activities = [];

    onMount(async () => {
        await fetch("http://localhost:3001/activities")
            .then((response) => response.json())
            .then((data) => (activities = data));
        console.log(activities);
        const array = [1, 2, 3, 4, 5];
    });
</script>

<svelte:head>
    <title>Chat & Activities</title>
    <meta name="description" content="Forum" />
</svelte:head>
<header>
    <NavBar />
</header>
<body class="bg-[#EEF5DB] flex items-center justify-center">
    <!-- Activities Section -->
    <div class="col-span-1 flex flex-col">
        <h2 class="text-4xl font-bold text-[#3730A3] mb-4 self-start">
            Activity Events
        </h2>
        <!-- write a svelte foreach -->
        {#each activities as activity, i}
            <div class="m-4 p-4 bg-white rounded">
                <div class="flex items-center mb-2">
                    <i class="fas fa-bicycle text-[#3730A3] mr-2" />
                    <span class="text-[#3730A3] font-bold"
                        >{activity.title}</span
                    >
                 
                </div>
                <div class="border-t-2 border-[#3730A3] pt-2">
                    {@html activity.content.replace(/\n/g, "<br>")}
                </div>
            </div>
        {/each}

       
    </div>
</body>

<style>
</style>
