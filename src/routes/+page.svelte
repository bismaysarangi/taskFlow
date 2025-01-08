<script>
    import Board from '$lib/components/Board.svelte';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>
  
<main class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">TaskFlow</h1>
      <Board />
    </div>
    <ThemeToggle />
</main>