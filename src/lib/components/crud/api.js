//Supabase
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://lvvmyhlducflakyynoax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2dm15aGxkdWNmbGFreXlub2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwNDA0MDUsImV4cCI6MjAxNjYxNjQwNX0.6OP7tGh4dLUBkkCc_qaoH1WQFqxQZPwt-DaLXAuUixs';
const supabase = createClient(supabaseUrl, supabaseKey);

export const createRecord = async (table, data) => {
    const { data: record, error } = await supabase
      .from(table)
      .upsert([data]);
    return { record, error };
  };
  
  export const getRecords = async (table) => {
    const { data: records, error } = await supabase.from(table).select('*');
    return { records, error };
  };
  
  export const updateRecord = async (table, id, data) => {
    const { data: record, error } = await supabase
      .from(table)
      .upsert([{ id, ...data }]);
    return { record, error };
  };
  
  export const deleteRecord = async (table, id) => {
    const { error } = await supabase.from(table).delete().eq('id', id);
    return { error };
  };
  