import { writable } from 'svelte/store';

const userTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
export const darkMode = writable(userTheme === 'dark');

if (typeof window !== 'undefined') {
  darkMode.subscribe(value => {
    localStorage.setItem('theme', value ? 'dark' : 'light');
    if (value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}