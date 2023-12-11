<!-- src/routes/_error.svelte -->

<script>
  export let status; // HTTP status code
  export let error;  // Error object
</script>

<main>
  <h1>Error {status}</h1>
  <p>{error ? error.message : 'An unknown error occurred.'}</p>
</main>