import './app.jsx';

/*
if (
  'serviceWorker' in navigator &&
  window.location.href.indexOf('.hello') === -1
) {
  navigator.serviceWorker.register('/service-worker.js');
}
*/

/**
 * A11y
 */

const CheckClass = 'no-outline';
const $body = document.body;

$body.classList.add(CheckClass);

window.addEventListener('keydown', function(e) {
  const code = e.keyCode ? e.keyCode : e.which;
  if (code === 9) {
    $body.classList.remove(CheckClass);
  }
});

window.addEventListener('mousemove', function(e) {
  $body.classList.add(CheckClass);
});
