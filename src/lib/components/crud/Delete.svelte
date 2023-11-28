<script>
    import { getRecords, deleteRecord } from './api';
  
    let records = [];
    let selectedId = '';
  
    const loadRecords = async () => {
      const result = await getRecords('test');
      const { records: data, error } = result || { records: null, error: null };
  
      if (error) {
        console.error('Error fetching records:', error.message);
      } else {
        records = data || []; // Ensure that 'data' is not null
        selectedId = records.length > 0 ? records[0].id : ''; // Set a default value for selectedId
      }
    };
  
    // Load records when the component is initialized
    loadRecords();
    
    const handleDelete = async () => {
      const { error } = await deleteRecord('test', selectedId);
  
      if (error) {
        console.error('Error deleting record:', error.message);
      } else {
        console.log('Record deleted');
        // Optionally, reset form fields or navigate to another page.
      }
    };
  </script>
  
  <h2>Delete Record</h2>
  <select bind:value={selectedId}>
    {#each records as record (record.id)}
      <option value={record.id}>{record.test}</option>
    {/each}
  </select>
  
  <button on:click={handleDelete}>Delete Record</button>
  