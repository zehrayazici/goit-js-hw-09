window.global = window; 

import './style.css';

if (document.querySelector('.gallery')) {
  import('./js/01-gallery.js');
}

if (document.querySelector('.feedback-form')) {
  import('./js/02-form.js');
}