<script>
    import { tasks } from '$lib/stores/taskStore';
    
    export let task;
    export let columnId;
    export let index;
    
    function handleDragStart(e) {
      e.dataTransfer.setData('text/plain', JSON.stringify({
        columnId,
        index
      }));
    }
</script>
  
<div
    class="bg-white dark:bg-gray-700 p-3 rounded shadow cursor-move hover:shadow-md transition-all"
    draggable="true"
    on:dragstart={handleDragStart}
>
    <h3 class="font-semibold text-gray-800 dark:text-white">{task.title}</h3>
    {#if task.description}
      <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{task.description}</p>
    {/if}
</div>