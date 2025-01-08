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
    class="bg-white p-3 rounded shadow cursor-move hover:shadow-md transition-shadow"
    draggable="true"
    on:dragstart={handleDragStart}
>
    <h3 class="font-semibold text-gray-800">{task.title}</h3>
    {#if task.description}
      <p class="text-sm text-gray-600 mt-1">{task.description}</p>
    {/if}
</div>