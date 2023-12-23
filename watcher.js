// import onChange from 'on-change';
import schema from './validation';

const form = document.getElementById('rss-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  schema(this);
});
