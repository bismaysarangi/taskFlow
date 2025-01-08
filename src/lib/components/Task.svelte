<script>
    import { tasks } from '$lib/stores/taskStore';
  
    export let task;
    export let columnId;
    export let index;
  
    function handleDragStart(e) {
      e.dataTransfer.setData(
        'text/plain',
        JSON.stringify({ columnId, index })
      );
    }
  
    function handleDelete() {
      tasks.deleteTask(columnId, index);
    }
</script>
  
<div
    class="bg-white dark:bg-gray-700 p-3 rounded shadow cursor-move hover:shadow-md transition-all flex justify-between items-center"
    draggable="true"
    on:dragstart={handleDragStart}
>
    <div>
      <h3 class="font-semibold text-gray-800 dark:text-white">{task.title}</h3>
      {#if task.description}
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {task.description}
        </p>
      {/if}
    </div>
    <button
      class="ml-4 px-2 py-1 bg-emerald-400 text-white rounded hover:bg-red-600 text-sm"
      on:click={handleDelete}
    >
      Delete
    </button>
</div>
  