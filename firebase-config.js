import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import{getAuth}from"https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import{getDatabase}from"https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import{getStorage}from"https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
const firebaseConfig={
 apiKey:"AIzaSyA0C8ZAlYUZQM4UYs49xBhyMHwArJDLJpA",
 authDomain:"website-a091e.firebaseapp.com",
 databaseURL:"https://website-a091e-default-rtdb.firebaseio.com",
 projectId:"website-a091e",
 storageBucket:"website-a091e.firebasestorage.app",
 messagingSenderId:"204226900375",
 appId:"1:204226900375:web:2edc07a4db0a90fa4b14d2",
 measurementId:"G-WNSLPLBJB2"
};
const app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase(app),storage=getStorage(app);
export{app,auth,db,storage};