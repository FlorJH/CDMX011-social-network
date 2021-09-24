// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* eslint-disable */

import { onNavigate } from '../routes.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCaBVEyo0yKvVWGvxHpTufYnUwG7qMZ2FY',
  authDomain: 'pic-art-1c2c5.firebaseapp.com',
  projectId: 'pic-art-1c2c5',
  storageBucket: 'pic-art-1c2c5.appspot.com',
  messagingSenderId: '866895313531',
  appId: '1:866895313531:web:c14ccfb8c6766208a540de',
  measurementId: 'G-V85MSYGCCW',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase.analytics();

//Acceder a los usuarios
export const getUser = () => firebase.auth().currentUser;
//console.log(getUser());
//export const dataBase = () => firebase.firestore();


//Generar colección de post publicados, ordenarlos por fecha y actualizar nuevos cambios.
export const onGetPost = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(callback);

//Obtener un solo post por ID//
export const getPost = (id) => firebase.firestore().collection('posts').doc(id).get();
//console.log(getPost);
//Borrar los post en interfaz y en firestore
export const deletePost = id => firebase.firestore().collection('posts').doc(id).delete();
  

//Editar los post
export const updatePost = (id, updatedPost) => firebase.firestore().collection('posts').doc(id).update(updatedPost);

//Funcion para guardar los datos de los post
export const savePost = (textShare) =>
firebase.firestore().collection('posts').doc().set({
  textShare,
  date: firebase.firestore.Timestamp.fromDate(new Date()),
  user: firebase.auth().currentUser.email,
  uid: firebase.auth().currentUser.uid,
  likes: [],
});

// Firebase register
export const register = (singUpEmail, singUpPassword) => {
  return firebase.auth().createUserWithEmailAndPassword(singUpEmail, singUpPassword);
};



// Firebase login
export const logIn = (logInEmail, logInPassword) => {
  return firebase.auth().signInWithEmailAndPassword(logInEmail, logInPassword);
};


// Google autentication
export const continueGoogle = () => {
  const credential = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'en';
  return firebase.auth().signInWithPopup(credential);

};

//Github autentication
export const continueGitHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().languageCode = 'en';
  return firebase.auth().signInWithPopup(provider);
};

 //LogOut
 let email ;
export const actualUser=()=>{
//  const user = firebase.auth().currentUser;
if (getUser() !== null) {
  // The user object has basic properties such as display name, email, etc.
 
    return getUser().uid;
}
//return email
}

export const logOutUser = () => {
  onNavigate('/')
  return firebase.auth().signOut()
}


export const addLikes = (idPost) => {
  const uidUser = firebase.auth().currentUser.uid; //uid del current user
  //console.log(uidUser);
  const likesFb = firebase.firestore().collection('posts').doc(idPost); //cómo sacar el id del post? o se llamaría en TimeLine?
  //console.log(likesFb); //cosa rara que no entiendo
  likesFb.update({
    likes: firebase.firestore.FieldValue.arrayUnion(uidUser) //se tendría que agregar el uid
  });
  
}

export const disLike = (idPost) => {
  const uidUser = firebase.auth().currentUser.uid; 
  const likesFb = firebase.firestore().collection('posts').doc(idPost);
  likesFb.update({
    likes: firebase.firestore.FieldValue.arrayRemove(uidUser)
  });
}
