/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../routes.js';
//import { toViewSingUp } from './singUp.js';

// export function toViewHome() {
// document.getElementById('root').innerHTML=`<h1>Hola</h1>`;
// }

export const toViewHome = (container) => {
  const html = `
    <section class="container">
        <img class="logo" src="img/PIC&ART.png" alt="logo">
        <p>Share your ideas in the largest art community. Get inspired with different styles and genres around your country.
        </p>
        <input type="button" class="btn_log login" value="LOG IN" />
        <input type="button" class="btn_log signup" value="SIGN UP" id="signUp" />
        <p2>or</p2>
        <input type="button" class="btn_log google" value="Continue with Google" />
    </section>`;
  container.innerHtml = html;

  const signUp = document.getElementById('signUp');

  signUp.addEventListener('click', () => {
    onNavigate('/singUp');
  });
};
