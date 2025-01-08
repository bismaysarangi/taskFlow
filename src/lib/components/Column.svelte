<script>
    import Task from './Task.svelte';
    import TaskForm from './TaskForm.svelte';
    import { tasks as taskStore } from '$lib/stores/taskStore';  // renamed the import
    
    export let title;
    export let id;
    export let tasks;  // this is the prop
  
    function handleDragOver(e) {
      e.preventDefault();
    }
  
    function handleDrop(e) {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      if (data.columnId !== id) {
        taskStore.moveTask(data.columnId, id, data.index);  // using renamed store
      }
    }
</script>
  
<div 
    class="w-72 bg-gray-200 rounded-lg p-4"
    on:dragover={handleDragOver}
    on:drop={handleDrop}
>
    <h2 class="font-bold mb-4 text-gray-700">{title}</h2>
    <div class="space-y-2 min-h-[200px]">
      {#each tasks as task, index}
        <Task {task} columnId={id} {index} />
      {/each}
    </div>
    <TaskForm {id} />
</div>