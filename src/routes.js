import { toViewHome } from './components/Home.js';
import { toViewSingUp } from './components/singUp.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': toViewHome,
  '/singUp': toViewSingUp,
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
  const viewFunction = routes[pathname];
  viewFunction(rootDiv);
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
};
