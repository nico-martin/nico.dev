import lazySizes from 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
import styles from './Image.module.css';

lazySizes.cfg.lazyClass = styles.lazy;
lazySizes.cfg.loadingClass = styles.loading;
lazySizes.cfg.loadedClass = styles.loaded;

document.addEventListener('lazyloaded', (e) => {
  lazySizesFindParent(e.target).classList.add(styles.parentLoaded);
});

const lazySizesFindParent = (el) => {
  while ((el = el.parentElement) && !el.classList.contains(styles.root));
  return el;
};

export default lazySizes;
