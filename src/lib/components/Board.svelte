<script>
    import Column from './Column.svelte';
    import { tasks } from '$lib/stores/taskStore';
</script>
  
<div class="flex gap-4 p-4 h-screen bg-gray-100">
    <Column title="To Do" id="todo" tasks={$tasks.todo} />
    <Column title="In Progress" id="inProgress" tasks={$tasks.inProgress} />
    <Column title="Completed" id="completed" tasks={$tasks.completed} />
</div>