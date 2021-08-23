// Este es el punto de entrada de tu aplicacion
import { onNavigate, routes } from "./routes.js";

const rootDiv = document.getElementById('root');
const homeViewFunction = routes[window.location.pathname];
homeViewFunction(rootDiv);

// aqui tu codigo
// console.log('Hola mundo!');
