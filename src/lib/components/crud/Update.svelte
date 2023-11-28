<script>
    import { getRecords, updateRecord } from './api';
  
    let records = [];
    let formData = {
      id: '',
      test: '',
      // Add other form fields as needed
    };
  
    const loadRecords = async () => {
      const result = await getRecords('test');
      const { records: data, error } = result || { records: null, error: null };
  
      if (error) {
        console.error('Error fetching records:', error.message);
      } else {
        // Ensure 'data' is not null before assigning
        records = data || [];
      }
    };
  
    const handleUpdate = async () => {
      // Check if 'records' is not null before trying to update
      if (records !== null) {
        const { record, error } = await updateRecord('test', formData.id, formData);
  
        if (error) {
          console.error('Error updating record:', error.message);
        } else {
          console.log('Record updated:', record);
          // Optionally, reset form fields or navigate to another page.
        }
      } else {
        console.error('Records are null. Cannot update.');
      }
    };
  </script>
  
  <h2>Update Record</h2>
  <select bind:value={formData.id}>
    {#each records as record (record.id)}
      <option value={record.id}>{record.test}</option>
    {/each}
  </select>
  
  <!-- Form fields for update -->
  <label>
    Name:
    <input bind:value={formData.test} />
  </label>
  <!-- Add other form fields as needed -->
  
  <button on:click={handleUpdate}>Update Record</button>
  
  