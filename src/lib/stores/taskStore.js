import { writable } from 'svelte/store';

const initialTasks = {
  todo: [
    { title: 'Learn Svelte', description: 'Study Svelte fundamentals' },
    { title: 'Build TaskFlow', description: 'Create a task management app' }
  ],
  inProgress: [
    { title: 'Setup Project', description: 'Initialize project with SvelteKit' }
  ],
  completed: [
    { title: 'Install Dependencies', description: 'Install required packages' }
  ]
};

const createTaskStore = () => {
  const { subscribe, set, update } = writable(initialTasks);

  return {
    subscribe,
    addTask: (columnId, task) => update(store => {
      store[columnId] = [...store[columnId], task];
      return store;
    }),
    moveTask: (fromColumn, toColumn, taskIndex) => update(store => {
      const task = store[fromColumn].splice(taskIndex, 1)[0];
      store[toColumn].push(task);
      return store;
    })
  };
};

export const tasks = createTaskStore();