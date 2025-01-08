<script>
    import { tasks } from '$lib/stores/taskStore';
    
    export let id;
    let title = '';
    let description = '';
    let isExpanded = false;
    
    function handleSubmit() {
      if (title.trim()) {
        tasks.addTask(id, { title, description });
        title = '';
        description = '';
        isExpanded = false;
      }
    }
</script>
  
<form on:submit|preventDefault={handleSubmit} class="mt-4 space-y-2">
    <input
      bind:value={title}
      placeholder="Add new task"
      class="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
      on:focus={() => isExpanded = true}
    />
    
    {#if isExpanded}
      <textarea
        bind:value={description}
        placeholder="Add description (optional)"
        rows="2"
        class="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-colors"
      ></textarea>
      <div class="flex justify-end space-x-2">
        <button 
          type="button"
          class="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          on:click={() => isExpanded = false}
        >
          Cancel
        </button>
        <button 
          type="submit"
          class="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    {/if}
</form>