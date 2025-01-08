<script>
    import Column from './Column.svelte';
    import { tasks } from '$lib/stores/taskStore';
</script>
  
<div
    class="flex flex-col md:flex-row justify-center items-center gap-4 p-4 md:overflow-x-auto min-h-screen"
>
    <Column title="To Do" id="todo" tasks={$tasks.todo} />
    <Column title="In Progress" id="inProgress" tasks={$tasks.inProgress} />
    <Column title="Completed" id="completed" tasks={$tasks.completed} />
</div>
  