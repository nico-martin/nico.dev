import './app.jsx';
import '../styles/app.css';
import '../styles/components/page.css';
import '../styles/components/content.css';
import '../styles/components/social.css';
import '../styles/components/app.css';
import '../styles/components/nav.css';
import '../styles/components/editor.css';
import '../styles/components/card.css';

'serviceWorker' in navigator &&
  window.location.href.indexOf('.hello') === -1 &&
  navigator.serviceWorker.register('/service-worker.js');

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
