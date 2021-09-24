/* eslint-disable */

import { toViewHome } from './components/Home.js';
import { toViewSignUp } from './components/signUp.js';
import { toViewLogIn} from './components/LogIn.js';
import { toViewtimeline } from './components/TimeLine.js';



const rootDiv = document.querySelector('#root');

export const routes = {
  '/': toViewHome,
  '/signUp': toViewSignUp,
  '/LogIn': toViewLogIn,
  '/TimeLine': toViewtimeline,

};


export const onNavigate = (pathname) => {

    window.history.pushState({}, //estado vacío
        pathname, //título pathname
        window.location.origin + pathname //ruta que queremos asignar concatenando el pathname
    );
    const component = routes[pathname]
    component(rootDiv); //se renderiza el html
}

window.onpopstate = () => { //guarda una copia de navegación en el historial
    const component = routes[window.location.pathname]
    component(rootDiv);
}