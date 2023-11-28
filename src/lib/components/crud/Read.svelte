<script>
    import { getRecords } from './api';
  
    let records = [];
  
    const loadRecords = async () => {
      const { records: data, error } = await getRecords('test');
  
      if (error) {
        console.error('Error fetching records:', error.message);
      } else {
        // Use a temporary variable to avoid potential issues
        const newData = data || [];
        records = newData;
      }
    };
  
    $: loadRecords(); // Automatically load records when the component mounts
  </script>
  
  <h2>Records</h2>
  <ul>
    {#each records as record (record.id)}
      <li>{record.test}</li> <!-- Adjust the field based on your table structure -->
    {/each}
  </ul>
  