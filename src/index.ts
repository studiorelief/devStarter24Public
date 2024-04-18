import './index.css';

import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Clément Murzeau';
  greetUser(name);
});
