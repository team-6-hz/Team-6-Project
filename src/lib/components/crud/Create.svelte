<script>
  import { createRecord } from "./api";
  
    let formData = {
      // Define your form fields here
      test: '',
      // ...
    };
  
    const handleCreate = async () => {
      const { record, error } = await createRecord('test', formData);
  
      if (error) {
        console.error('Error creating record:', error.message);
      } else {
        console.log('Record created:', record);
        // Optionally, reset form fields or navigate to another page.
      }
    };
  </script>
  
  <form on:submit|preventDefault={handleCreate}>
    <!-- Form fields -->
    <label>
      Name:
      <input bind:value={formData.test} />
    </label>
    <!-- Add other form fields as needed -->
  
    <button type="submit">Create Record</button>
  </form>
  